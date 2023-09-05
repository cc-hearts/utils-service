import { readFile } from "fs/promises"
import { resolve } from "path"

export async function getPackage(path?: string) {
  path = path || resolve(process.cwd(), 'package.json')
  const packages = await readFile(path, { encoding: 'utf-8' })
  return JSON.parse(packages)
}