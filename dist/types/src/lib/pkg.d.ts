/**
 * Retrieves the contents of a package.json file.
 *
 * @param {string=} path - The path to the package.json file. If not provided, the current working directory will be used.
 * @return {Promise<T = any>} A promise that resolves to the parsed contents of the package.json file.
 */
export declare function getPackage<T = any>(path?: string): Promise<T>;
