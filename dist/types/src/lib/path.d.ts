/**
 * used in the alias of vite's configuration file etc.
 *
 * @param {string} url is import.meta.url
 * @returns {string}
 */
export declare function resolveCurrentPath(url: string): string;
/**
 * Join the current working directory with the provided path arguments.
 *
 * @param {...string[]} args - The path arguments to join with the current working directory.
 * @return {string} - The joined path.
 */
export declare function cwdJoin(...args: string[]): string;
/**
 * Step up to find the most recent file
 *
 * @param path
 * @returns
 */
export declare function findUpPkg(path: string, fileName: string): any;
