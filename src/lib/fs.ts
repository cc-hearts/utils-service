import { existsSync } from "fs";
import fs, { mkdir, copyFile } from "fs/promises";

export async function rm(path: string) {
  fs.rm(path, { recursive: true, force: true });
}

/**
 * copy file
 * @param {string} originFilePath
 * @param {string} targetFilePath
 * @returns {Promise<void>}
 */
export async function cpFile(
  originFilePath: string,
  targetFilePath: string
): Promise<void> {
  const path = targetFilePath.split("/").slice(0, -1).join("/");

  if (!existsSync(path)) {
    await mkdir(path, { recursive: true });
  }
  return copyFile(originFilePath, targetFilePath);
}
