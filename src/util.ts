import { constants, promises as fs } from 'fs';
import { dirname, join } from 'path';
import latestSemver from 'latest-semver';

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

function splitVersions(versions: string[]): any[] {
  const latestVersion: string = latestSemver(versions);
  const index: number = versions.indexOf(latestVersion);

  versions.splice(index, 1);

  return [latestVersion, versions];
}

export { fileExists, getDotApmFolder, isDirectory, splitVersions };
