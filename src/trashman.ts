import { CompositeDisposable } from 'atom';
import { configSchema, migrateConfig } from './config';
import { deleteOutdatedData, deleteOutdateStorageData } from './commands';
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
