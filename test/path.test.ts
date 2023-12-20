import { describe, it, expect, vi } from 'vitest'
import { cwdJoin, resolveCurrentPath, findPackagePath } from '../src/lib/path'
import { fileURLToPath } from 'url'
import { resolve } from 'path'

describe('path modules', () => {
  it('resolve current path when use ESM env', () => {
    const mockPath = 'file:///Users/heart/mock/test/path.test.ts'
    expect(resolveCurrentPath(mockPath)).toBe('/Users/heart/mock/test')
  })

  it('join path from current workspace path', () => {
    process.cwd = vi.fn(() => '/Users/heart/mock')
    expect(cwdJoin('./testPath')).toBe('/Users/heart/mock/testPath')
  })

  it('find up package.json file path', async () => {
    const currentPath = fileURLToPath(import.meta.url)
    expect(await findPackagePath(currentPath)).toBe(
      resolve(currentPath, '../../package.json'),
    )
  })

  it('result is null when path is  system root directory', async () => {
    expect(await findPackagePath(resolve('/'))).toBeNull()
  })

  it('find up package.json file path when path is current file path', async () => {
    console.log(await findPackagePath(fileURLToPath(import.meta.url)));
    expect(await findPackagePath(fileURLToPath(import.meta.url))).toBe(
      resolve(fileURLToPath(import.meta.url), '../../package.json'),
    )
  })
})
