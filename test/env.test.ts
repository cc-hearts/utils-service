import { describe, it, expect } from "vitest";
import { getPackage } from "../src/lib/env";

describe('getPackage function', () => {
  it('get current workspace package.json', () => {
    expect(getPackage()?.name).toEqual('@cc-heart/utils-service')
  })
})