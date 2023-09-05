import { fileURLToPath } from 'url';
import { resolve } from 'path';

/**
 * used in the alias of vite's configuration file etc.
 *
 * @param {string} url is import.meta.url
 * @returns {string}
 */
function resolveCurrentPath(url) {
    return resolve(fileURLToPath(url), '..');
}
/**
 * Join the current working directory with the provided path arguments.
 *
 * @param {...string[]} args - The path arguments to join with the current working directory.
 * @return {string} - The joined path.
 */
function cwdJoin(...args) {
    return resolve(process.cwd(), ...args);
}

export { cwdJoin, resolveCurrentPath };
