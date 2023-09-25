import { describe, it, expect } from 'vitest'
import { isDirectory, isFile } from '../src/lib/valid'
import { fileURLToPath } from 'url'
import { join } from 'path'

describe('valid modules', () => {
  it('return true when path is fs.ts and invoke isFile', async () => {
    expect(await isFile(fileURLToPath(import.meta.url))).toBeTruthy()
  })

  it('return false when path is test directory and invoke isFile', async () => {
    expect(await isFile(join(fileURLToPath(import.meta.url), '..'))).toBeFalsy()
  })

  it('return false when path is fs.ts and invoke isDirectory', async () => {
    expect(await isDirectory(fileURLToPath(import.meta.url))).toBeFalsy()
  })

  it('return true when path is test directory and invoke isDirectory', async () => {
    expect(
      await isDirectory(join(fileURLToPath(import.meta.url), '..')),
    ).toBeTruthy()
  })
})
