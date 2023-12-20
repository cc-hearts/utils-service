import { existsSync } from 'fs'
import { stat } from 'fs/promises'

/**
 * Checks if the given path points to a file.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the path points to a file.
 */
export async function isFile(path: string) {
  if (!existsSync(path)) return false
  const file = await stat(path)
  return file.isFile()
}

/**
 * Checks if the given path is a directory.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to true if the path is a directory, false otherwise.
 */
export async function isDirectory(path: string) {
  if (!existsSync(path)) return false
  const file = await stat(path)
  return file.isDirectory()
}
