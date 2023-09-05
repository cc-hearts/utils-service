import { describe, it, expect, vi } from "vitest";
import { cwdJoin, resolveCurrentPath } from '../src/lib/path'


describe('path modules', () => {
  it('resolve current path when use ESM env', () => {
    const mockPath = 'file:///Users/heart/mock/test/path.test.ts'
    expect(resolveCurrentPath(mockPath)).toBe('/Users/heart/mock/test')
  })


  it('join path from current workspace path', () => {
    process.cwd = vi.fn(() => '/Users/heart/mock')
    expect(cwdJoin('./testPath')).toBe('/Users/heart/mock/testPath')
  })
})