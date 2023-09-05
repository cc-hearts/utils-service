import { describe, it, expect } from "vitest";
import { getPackage } from '../src/lib/pkg'

describe('pkg module', () => {

  it('load current package.json', async () => {
    const pkg = await getPackage()

    expect(pkg.name).toContain('@cc-heart/utils-service')
    expect(pkg.author).toBe('cc heart')
    expect(pkg.license).toBe('MIT')
  })
})