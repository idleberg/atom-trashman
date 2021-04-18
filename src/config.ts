import { ConfigValues } from 'atom';
import meta from '../package.json';
import Logger from './log';

const PERIODS = {
  never: -1,
  daily: 60 * 60 * 24,
  weekly: 60 * 60 * 24 * 7,
  biweekly: 60 * 60 * 24 * 7 * 2,
  monthly: 60 * 60 * 24 * 30,
  bimonthly: 60 * 60 * 24 * 30 * 2,
  quarterly: 60 * 60 * 24 * 90,
  yearly: 60 * 60 * 24 * 365
};

const OPERATIONS = ['files', 'storage'];

const configSchema = {
  itemsToKeep: {
    title: 'Items to Keep',
    description: 'Specify the last number of versions to keep',
    type: 'integer',
    default: 5,
    minimum: 1,
    order: 1
  },
  periodicCleanupInterval: {
    title: 'Run Periodically',
    description: 'Specify an interval to run `trashman` automatically',
    type: 'integer',
    default: PERIODS.never,
    enum: [
      {
        value: PERIODS.never,
        description: 'never'
      },
      {
        value: PERIODS.daily,
        description: 'daily'
      },
      {
        value: PERIODS.weekly,
        description: 'weekly'
      },
      {
        value: PERIODS.biweekly,
        description: 'bi-weekly'
      },
      {
        value: PERIODS.monthly,
        description: 'monthly'
      },
      {
        value: PERIODS.bimonthly,
        description: 'bi-monthly'
      },
      {
        value: PERIODS.quarterly,
        description: 'quarterly'
      },
      {
        value: PERIODS.yearly,
        description: 'yearly'
      }
    ],
    order: 2
  },
  periodicCleanupTypes: {
    title: 'Periodic Cleanup Types',
    description: 'Specify the types of delete operations to run periodically',
    type: 'array',
    default: OPERATIONS,
    enum: [
      {
        value: OPERATIONS,
        description: 'Files and Storage'
      },
      {
        value: [OPERATIONS[0]],
        description: 'Files only'
      },
      {
        value: [OPERATIONS[1]],
        description: 'Storage only'
      }
    ],
    order: 3
  },
  developer: {
    title: 'Developer Settings',
    type: 'object',
    order: 4,
    properties: {
      autoOpenConsole: {
        title: 'Automatically Open Console',
        description: 'Logs all actions to the console while in Debug Mode',
        type: 'boolean',
        default: true,
        order: 1
      },
      autoClearConsole: {
        title: 'Automatically Clear Console',
        description: 'Clears the console on each call while in Debug Mode',
        type: 'boolean',
        default: false,
        order: 2
      }
    }
  }
};

function getConfig(key = ''): ConfigValues {
  return key?.length ? atom.config.get(`${meta.name}.${key}`) : atom.config.get(`${meta.name}`);
}

function migrateConfig(oldKey: string, newKey: string): void {
  if (atom.config.get(`${meta.name}.${newKey}`)) {
    Logger.warn(`Setting '${newKey}' already exists, skipping migration`);
    return;
  }

  try {
    atom.config.set(`${meta.name}.${newKey}`, atom.config.get(`${meta.name}.${oldKey}`));
  } catch (error) {
    console.log(error);
    atom.notifications.addWarning(`Failed to migrate configuration, see console for details`);

    return;
  }

  Logger.warn(`Setting '${oldKey}' migrated successfully to '${newKey}'`);
  atom.config.unset(`${meta.name}.${oldKey}`);
}

function unsetConfig(key = ''): void {
  key?.length ? atom.config.unset(`${meta.name}.${key}`) : atom.config.unset(`${meta.name}`);
}

export { configSchema, getConfig, migrateConfig, unsetConfig };
