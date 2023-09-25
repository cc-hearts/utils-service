/**
 * Retrieves the contents of a package.json file.
 *
 * @param {string=} path - The path to the package.json file. If not provided, the current working directory will be used.
 * @return {Promise<object>} A promise that resolves to the parsed contents of the package.json file.
 */
export declare function getPackage(path?: string): Promise<any>;
