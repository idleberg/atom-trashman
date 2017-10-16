{ name } = require "../package.json"

module.exports = Trashman =
  config:
    deleteApmFolders:
      title: "Delete apm Folders"
      description: "Deletes outdated packages in `~/.atom/.apm`"
      type: "boolean"
      default: true
      order: 1
    deleteStorage:
      title: "Delete Storage"
      description: "Deletes items for outdated packages in Atom's [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)"
      type: "boolean"
      default: true
      order: 2
    itemsToKeep:
      title: "Items to Keep"
      description: "Specify the last number of versions to keep"
      type: "integer"
      default: 5
      minimum: 1
      order: 3
    developerSettings:
      type: "object"
      order: 4
      properties:
        debugMode:
          title: "Debug Mode"
          description: "Logs all actions to the console"
          type: "boolean"
          default: false
          order: 1
        autoOpenConsole:
          title: "Automatically Open Console"
          description: "Logs all actions to the console while in Debug Mode"
          type: "boolean"
          default: true
          order: 2
        autoClearConsole:
          title: "Automatically Clear Console"
          description: "Clears the console on each call while in Debug Mode"
          type: "boolean"
          default: true
          order: 3
  subscriptions: null

  activate: (state) ->
    { CompositeDisposable } = require 'atom'

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'trashman:delete-outdated-package-data': => @deleteOutdatedData()

  deactivate: ->
    @subscriptions.dispose()

  # TODO: promise based
  deleteOutdatedData: ->
    { readdirSync } = require "fs"

    atom.openDevTools() if @getConfig("developerSettings.debugMode") and @getConfig("developerSettings.autoOpenConsole")
    console.clear() if @getConfig("developerSettings.debugMode") and @getConfig("developerSettings.autoClearConsole")

    allKeys = []

    inputPath = @getApmPath()

    console.log "#{inputPath.length} items found in file:///#{inputPath}\n\n" if @getConfig("developerSettings.debugMode")

    # TODO: make async
    directories = readdirSync inputPath
    directories.sort()

    for directory in directories
      unless directory.startsWith(".") or directory.startsWith("_") or directory.startsWith("@")
        @deleteVersions(directory)

  # TODO: promise based
  deleteVersions: (item) ->
    { readdirSync } = require "fs"
    { removeSync } =  require('fs-extra')
    { join } = require "path"
    { valid } = require "semver"
    semverCompare = require "semver-compare"

    inputPath = join @getApmPath(), item

    # TODO: make async
    versions = readdirSync inputPath
    versions.sort(semverCompare)

    itemsToKeep = @getConfig("itemsToKeep")
    outdated = versions.slice(0, -itemsToKeep)

    if versions.length is 1
      versionsWording = "version"
    else
      versionsWording = "versions"

    console.log "#{item}: #{versions.length} #{versionsWording}, #{outdated.length} outdated" if versions.length > 0 and @getConfig("developerSettings.debugMode")

    for version in outdated
      if valid(version) and not (version.startsWith(".") or version.startsWith("_"))
        fullPath = join inputPath, version

        break unless fs.lstatSync(fullPath).isDirectory()

        try
          removeSync(fullPath) if @getConfig("deleteApmFolders")
          console.info "Deleted '.apm/#{item}/#{version}'" if @getConfig("developerSettings.debugMode")
        catch err
          console.error "Deleting '#{item}/#{version}' failed (#{fullPath})" if @getConfig("developerSettings.debugMode")
          console.error err
          break

        key = localStorage.getItem "installed-packages:#{item}:#{version}:can-defer-main-module-require"
        if @getConfig("deleteStorage") and key
          localStorage.removeItem "installed-packages:#{item}:#{version}:can-defer-main-module-require"
          console.log "Deleted '#{item}:#{version}:can-defer-main-module-require' from localStorage" if @getConfig("developerSettings.debugMode")

  getApmPath: ->
    { dirname, join } = require "path"

    configFile = atom.config.getUserConfigPath()
    # console.log "configFile: #{configFile}"
    configPath = dirname(configFile)
    # console.log "configPath: #{configPath}"
    apmPath    = join(configPath, "/.apm")
    # console.log "apmPath: #{apmPath}"

    return apmPath

  getConfig: (key = "") ->
    if key?
      return atom.config.get("trashman.#{key}")

    return atom.config.get("trashman")
