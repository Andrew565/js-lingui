import getConfig, { replaceRootDir } from './index'

describe('lingui-conf', function() {
  it('should return default confing', function() {
    const config = getConfig()
    expect(config).toBeInstanceOf(Object)
    expect(config.localeDir).toBeDefined()
    expect(config.srcPathDirs).toBeDefined()
    expect(config.srcPathIgnorePatterns).toBeDefined()
  })

  it('should replace <rootDir>', function() {
    const config = replaceRootDir({
      boolean: false,
      localeDir: "<rootDir>",
      srcPathDirs: ["<rootDir>", "rootDir"]
    }, '/Root')

    expect(config.boolean).toEqual(false)
    expect(config.localeDir).toEqual("/Root")
    expect(config.srcPathDirs).toEqual(["/Root", 'rootDir'])
  })
})
