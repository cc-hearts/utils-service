import { existsSync } from 'fs';
import { rm as rm$1, mkdir, copyFile } from 'fs/promises';

/**
 * Removes a file or directory at the specified path.
 *
 * @param {string} path - The path of the file or directory to be removed.
 * @return {Promise<void>} A promise that resolves when the file or directory is successfully removed.
 */
async function rm(path) {
    await rm$1(path, { recursive: true, force: true });
}
/**
 * Validates the given file path and creates the necessary directories if they do not exist.
 *
 * @param {string} filePath - The file path to validate and create directories for.
 * @return {Promise<void>} - A promise that resolves once the directories are created.
 */
async function validateFilePathOrCreateMkdir(filePath) {
    const path = filePath.split("/").slice(0, -1).join("/");
    if (!existsSync(path)) {
        await mkdir(path, { recursive: true });
    }
}
/**
 * Copies a file from the originFilePath to the targetFilePath.
 *
 * @param {string} originFilePath - The path of the file to be copied.
 * @param {string} targetFilePath - The path where the file should be copied to.
 * @return {Promise<void>} A Promise that resolves when the file is successfully copied, or rejects with an error.
 */
async function cpFile(originFilePath, targetFilePath) {
    await validateFilePathOrCreateMkdir(targetFilePath);
    return copyFile(originFilePath, targetFilePath);
}

export { cpFile, rm, validateFilePathOrCreateMkdir };
