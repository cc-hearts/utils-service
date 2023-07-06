import { readFileSync } from "fs"
import { resolve } from "path"

export function getPackage(path?: string) {
  path = path || resolve(process.cwd(), 'package.json')
  const packages = readFileSync(path, { encoding: 'utf-8' })
  return JSON.parse(packages)
}