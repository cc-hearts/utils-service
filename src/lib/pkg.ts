import { readFile } from 'fs/promises'
import { resolve } from 'path'

/**
 * Retrieves the contents of a package.json file.
 *
 * @param {string=} path - The path to the package.json file. If not provided, the current working directory will be used.
 * @return {Promise<object>} A promise that resolves to the parsed contents of the package.json file.
 */
export async function getPackage(path?: string) {
  path = path || resolve(process.cwd(), 'package.json')
  const packages = await readFile(path, { encoding: 'utf-8' })
  return JSON.parse(packages)
}
