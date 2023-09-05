/**
 * Removes a file or directory at the specified path.
 *
 * @param {string} path - The path of the file or directory to be removed.
 * @return {Promise<void>} A promise that resolves when the file or directory is successfully removed.
 */
export declare function rm(path: string): Promise<void>;
/**
 * Validates the given file path and creates the necessary directories if they do not exist.
 *
 * @param {string} filePath - The file path to validate and create directories for.
 * @return {Promise<void>} - A promise that resolves once the directories are created.
 */
export declare function validateFilePathOrCreateMkdir(filePath: string): Promise<void>;
/**
 * Copies a file from the originFilePath to the targetFilePath.
 *
 * @param {string} originFilePath - The path of the file to be copied.
 * @param {string} targetFilePath - The path where the file should be copied to.
 * @return {Promise<void>} A Promise that resolves when the file is successfully copied, or rejects with an error.
 */
export declare function cpFile(originFilePath: string, targetFilePath: string): Promise<void>;
