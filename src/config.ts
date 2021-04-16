import { ConfigValues } from 'atom';
import meta from '../package.json';
import Logger from './log';

const configSchema = {
  deleteApmFolders: {
    title: 'Delete apm Folders',
    description: 'Deletes outdated packages in `~/.atom/.apm`',
    type: 'boolean',
    default: true,
    order: 1
  },
  deleteStorage: {
    title: 'Delete Storage',
    description:
      "Deletes items for outdated packages in Atom's [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)",
    type: 'boolean',
    default: true,
    order: 2
  },
  itemsToKeep: {
    title: 'Items to Keep',
    description: 'Specify the last number of versions to keep',
    type: 'integer',
    default: 5,
    minimum: 1,
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
        default: true,
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
