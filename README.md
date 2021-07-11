# trashman

[![apm](https://flat.badgen.net/apm/license/trashman)](https://atom.io/packages/trashman)
[![apm](https://flat.badgen.net/apm/v/trashman)](https://atom.io/packages/trashman)
[![apm](https://flat.badgen.net/apm/dl/trashman)](https://atom.io/packages/trashman)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-trashman)](https://circleci.com/gh/idleberg/atom-trashman)
[![David](https://flat.badgen.net/david/dep/idleberg/atom-trashman)](https://david-dm.org/idleberg/atom-trashman)

Clean up outdated package data in `~/.atom/.apm` and Atom's [storage](https://developer.mozilla.org/docs/Web/API/Storage). Take note of the package settings before first time usage!

**Note:** This is a working early prototype, use with care!

## Installation

Install `trashman` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install trashman`

### GitHub

Change to your Atom packages directory:

```bash
# Windows
$ cd %USERPROFILE%\.atom\packages

# Linux & macOS
$ cd ~/.atom/packages/
```

Clone the repository as `trashman`:

```bash
$ git clone https://github.com/idleberg/atom-trashman trashman
```

Inside the cloned directory, install Node dependencies:

```bash
$ npm install
```

Build source:

```bash
$ npm run build
```

## Usage

The following commands are available through the [command-palette](https://atom.io/docs/latest/getting-started-atom-basics#command-palette):

- `Trashman: Delete apm Cache`
- `Trashman: Delete Outdated Storage Data`

Also take note that several tweaks can be made through the package settings!

## License

This work licensed under [The MIT License](https://opensource.org/licenses/MIT)
