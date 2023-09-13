import { stat } from "fs/promises";


export async function isFile(path:string) {
  const file = await stat(path)
  return file.isFile()
}
export async function isDirectory(path: string) {
  const file = await stat(path)
  return file.isDirectory()
}