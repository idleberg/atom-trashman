import { CompositeDisposable } from 'atom';
import { configSchema, getConfig, migrateConfig } from './config';
import { deleteOutdatedData, deleteOutdateStorageData } from './commands';
import { setLastUpdate, updateIsDue } from './util';
import Logger from './log';
import Signal from './busy-signal';

const Trashman = {
  config: configSchema,
  subscriptions: new CompositeDisposable(),

  async activate(): Promise<void> {
    Logger.log('Activating package');

    // Register commands
    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'trashman:delete-outdated-package-data': async () => {
          await deleteOutdatedData();
        }
      }),
      atom.commands.add('atom-workspace', {
        'trashman:delete-outdated-storage-data': async () => {
          await deleteOutdateStorageData();
        }
      })
    );

    if (updateIsDue()) {
      Logger.log(`Defering cleanup by 10 seconds`);

      setTimeout(async () => {
        Logger.log('Running periodic cleanup 🧹');

        const periodicCleanupTypes = getConfig('periodicCleanupTypes');

        if (periodicCleanupTypes.includes('deleteFiles')) await deleteOutdatedData();
        if (periodicCleanupTypes.includes('deleteStorage')) await deleteOutdateStorageData();

        setLastUpdate();
      }, 10 * 1000);
    }
  },

  migrate(): void {
    migrateConfig('developerSettings', 'developer');
  },

  deactivate(): void {
    Logger.log('Deactivating package');

    this.subscriptions?.dispose();
  },

  consumeSignal(registry: unknown): void {
    Logger.log('Consuming Busy Signal service');

    Signal.consumer(registry);
  }
};

export default Trashman;
