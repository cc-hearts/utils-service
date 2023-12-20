import { fileURLToPath } from 'url'
import { resolve } from 'path'
import { existsSync } from 'fs'

/**
 * used in the alias of vite's configuration file etc.
 *
 * @param {string} url is import.meta.url
 * @returns {string}
 */
export function resolveCurrentPath(url: string): string {
  return resolve(fileURLToPath(url), '..')
}

/**
 * Join the current working directory with the provided path arguments.
 *
 * @param {...string[]} args - The path arguments to join with the current working directory.
 * @return {string} - The joined path.
 */
export function cwdJoin(...args: string[]) {
  return resolve(process.cwd(), ...args)
}

/**
 * Step up to find the most recent file path
 *
 * @param path
 * @returns
 */
export async function findFilePath(path: string, fileName: string): Promise<string | null> {
  if (fileName === void 0) {
    throw new Error('fileName is required')
  }
  let curPath: string = resolve(path, fileName)

  if (existsSync(curPath)) {
    return curPath
  }
  if (path === '/') return null

  return findFilePath(resolve(path, '..'), fileName)
}

/**
 * Finds the nearest "package.json" file by traversing up the directory tree starting from the given path.
 *
 * @param {string} path - The starting path to search from.
 * @return {Promise<string>} A Promise that resolves to the path of the nearest "package.json" file, or null if not found.
 */
export async function findPackagePath(path: string): Promise<string | null> {
  return findFilePath(path, 'package.json')
}
