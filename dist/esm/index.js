import { existsSync } from 'fs';
import fs, { mkdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

async function rm(path) {
    fs.rm(path, { recursive: true, force: true });
}
/**
 * copy file
 * @param {string} originFilePath
 * @param {string} targetFilePath
 * @returns {Promise<void>}
 */
async function cpFile(originFilePath, targetFilePath) {
    const path = targetFilePath.split("/").slice(0, -1).join("/");
    if (!existsSync(path)) {
        await mkdir(path, { recursive: true });
    }
    return copyFile(originFilePath, targetFilePath);
}

/**
 * used in the alias of vite's configuration file etc.
 * @param {string} url is import.meta.url
 * @param {string} dir resolve paths
 * @returns {string}
 */
function resolveCurrentPath(url, dir) {
    return resolve(fileURLToPath(url), dir);
}

export { cpFile, resolveCurrentPath, rm };
