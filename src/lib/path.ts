import { fileURLToPath } from "url";
import { resolve } from "path";

/**
 * used in the alias of vite's configuration file etc.
 * @param {string} url is import.meta.url
 * @param {string} dir resolve paths
 * @returns {string}
 */
export function resolveCurrentPath(url: string, dir: string): string {
  return resolve(fileURLToPath(url), dir);
}
