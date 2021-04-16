import { getConfig } from './config';
import { getDotApmFolder, isDirectory, splitVersions } from './util';
import { join } from 'path';
import { promises as fs } from 'fs';
import globby from 'globby';
import latestSemver from 'latest-semver';
import Logger from './log';
import Signal from './busy-signal';

async function deleteOutdatedData(): Promise<void> {
  const developer = getConfig('developer');

  if (atom.inDevMode() && developer['autoOpenConsole']) {
    atom.openDevTools();
  }

  if (atom.inDevMode() && developer['autoClearConsole']) {
    console.clear();
  }

  Signal.add('Deleting .apm data');

  const dotApmFolder = await getDotApmFolder();

  const globbyOptions = {
    cwd: dotApmFolder,
    onlyFiles: false,
    deep: 0
  };

  (await globby('*', globbyOptions))
    .filter((item) => !item.startsWith('.') && !item.startsWith('_') && !item.startsWith('@'))
    .map(async (item) => {
      const dirPath = join(dotApmFolder, item);
      const versions = (await isDirectory(dirPath)) && (await fs.readdir(dirPath));

      if (!versions?.length) {
        Logger.log(`Skipping ${item}`);

        return;
      }

      const [, outdatedVersions] = splitVersions(Array.from(versions));

      if (!outdatedVersions?.length) {
        Logger.log('Nothing deleted');

        return;
      }

      outdatedVersions.map(async (version) => {
        const dirPath = join(dotApmFolder, item, version);

        if (await isDirectory(dirPath)) {
          Logger.log(`Deleting ${dirPath}`);

          try {
            await fs.rmdir(dirPath, {
              maxRetries: 5,
              recursive: true
            });
          } catch (err) {
            Logger.error(err);
          }
        }
      });
    });

  Signal.remove('Deleting .apm data');
}

async function deleteOutdateStorageData(): Promise<void> {
  const installedPackages = atom.packages.getAvailablePackageNames();

  Signal.add('Deleting storage items');

  installedPackages.map((packageName) => {
    const storageData = Object.keys(localStorage).filter((item) =>
      item.startsWith(`installed-packages:${packageName}:`)
    );

    const packageVersions: Set<string> = new Set();

    storageData.map((data) => {
      packageVersions.add(data.split(':')[2]);
    });

    const [latestVersion, outdatedVersions] = splitVersions(Array.from(packageVersions));

    if (latestVersion && outdatedVersions) {
      outdatedVersions.map((outdatedVersion) => {
        const storageData = Object.keys(localStorage).filter((item) =>
          item.startsWith(`installed-packages:${packageName}:${outdatedVersion}`)
        );

        storageData.map((storageItem) => {
          Logger.log(`Deleting storage item: ${storageItem}`);
          localStorage.removeItem(storageItem);
        });
      });
    }
  });

  Signal.remove('Trashman is deleting storage items');
}

export { deleteOutdatedData, deleteOutdateStorageData };
