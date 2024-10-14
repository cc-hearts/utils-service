import { readFile } from 'fs/promises'
import { resolve } from 'path'

/**
 * Retrieves the contents of a package.json file.
 *
 * @param {string=} path - The path to the package.json file. If not provided, the current working directory will be used.
 * @returns {Promise<T = any>} A promise that resolves to the parsed contents of the package.json file.
 */
export async function getPackage<T = any>(path?: string): Promise<T> {
  path = path || resolve(process.cwd(), 'package.json')
  const packages = await readFile(path, { encoding: 'utf-8' })
  return JSON.parse(packages)
}

/**
 * Get the package manager name 
 *
 * @returns 'npm' | 'pnpm' | 'bun' | 'yarn' | 'cnpm' | string
 */
export function getPackageManager() {
  const packageInfo = process.env.npm_config_user_agent || '';

  const managerAndVersionInfo = packageInfo.split(' ')[0];
  let [packageManager] = managerAndVersionInfo.split('/')

  return packageManager || 'npm'
}
