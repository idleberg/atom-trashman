import { constants, promises as fs } from 'fs';
import { dirname, join } from 'path';
import { getConfig } from './config';
import latestSemver from 'latest-semver';
import Logger from './log';
import meta from '../package.json';

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath, constants.F_OK);
  } catch (error) {
    return false;
  }

  return true;
}

async function getDotApmFolder(): Promise<string> {
  const configPath: string = dirname(atom.config.getUserConfigPath());
  const dotApmPath: string = join(configPath, '.apm') || null;

  return (await fileExists(dotApmPath)) ? dotApmPath : null;
}

async function isDirectory(filePath: string): Promise<boolean> {
  let stat;

  try {
    stat = await fs.lstat(filePath);
  } catch (error) {
    return false;
  }

  return stat.isDirectory();
}

function splitVersions(versions: string[]): any {
  const latestVersion: string = latestSemver(versions);
  const index: number = versions.indexOf(latestVersion);

  versions.splice(index, 1);

  const deleteVersions = versions.sort().slice(0, -1 * Number(getConfig('itemsToKeep')));

  return [latestVersion, deleteVersions];
}

function getLastUpdate(): number {
  const lastUpdateTime = localStorage.getItem(`${meta.name}.lastUpdateTime`) || 0;

  return Math.floor(new Date(lastUpdateTime).getTime() / 1000);
}

function setLastUpdate(): void {
  localStorage.setItem(`${meta.name}.lastUpdateTime`, new Date().toISOString());
}

function updateIsDue(): boolean {
  const intervalMinutes = Number(getConfig('periodicCleanupInterval'));

  if (intervalMinutes === -1) return false;

  const now = Math.floor(new Date().getTime() / 1000);
  const lastUpdate = getLastUpdate();

  if (intervalMinutes * 60 >= now - lastUpdate) {
    Logger.log(`No periodic cleanup due 👍`);
    return false;
  }

  return true;
}

export { fileExists, getDotApmFolder, getLastUpdate, isDirectory, setLastUpdate, splitVersions, updateIsDue };
