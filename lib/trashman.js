'use strict';

var atom$1 = require('atom');
var fs$2 = require('fs');
var path = require('path');
var stream_1 = require('stream');
var require$$1 = require('os');
var util = require('util');
var events_1 = require('events');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs$2);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var stream_1__default = /*#__PURE__*/_interopDefaultLegacy(stream_1);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var events_1__default = /*#__PURE__*/_interopDefaultLegacy(events_1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

var name = "trashman";
var main = "./lib/trashman";
var version = "0.2.0";
var description = "Clean up outdated package data on disk and Atom storage";
var scripts = {
	analyze: "source-map-explorer lib/**/*.js",
	build: "rollup --config",
	dev: "npm run start",
	"lint:code": "eslint --ignore-path .gitignore --no-error-on-unmatched-pattern ./src/**/*.ts",
	"lint:styles": "echo \"Nothing to lint\"",
	lint: "npm-run-all --parallel lint:*",
	prepublishOnly: "npm run build",
	start: "rollup --watch --config",
	test: "npm run lint"
};
var keywords = [
	"apm",
	"local storage",
	"clean"
];
var repository = "https://github.com/idleberg/atom-trashman";
var license = "MIT";
var engines = {
	atom: ">=1.0.0 <2.0.0"
};
var activationCommands = {
	"atom-workspace": [
		"trashman:delete-outdated-package-data",
		"trashman:delete-outdated-storage-data"
	]
};
var consumedServices = {
	"busy-signal": {
		versions: {
			"1.0.0": "consumeSignal"
		}
	}
};
var dependencies = {
	"@atxm/developer-console": "^0.5.0",
	"atom-select-list": "^0.7.1",
	"fs-extra": "^8.0.1",
	globby: "^11.0.3",
	"latest-semver": "^3.0.0",
	semver: "^6.3.0",
	"semver-compare": "^1.0.0"
};
var devDependencies = {
	"@babel/core": "^7.13.14",
	"@babel/eslint-parser": "^7.13.14",
	"@babel/plugin-proposal-export-namespace-from": "^7.12.13",
	"@babel/preset-env": "^7.13.12",
	"@rollup/plugin-babel": "^5.3.0",
	"@rollup/plugin-commonjs": "^18.0.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^11.2.1",
	"@rollup/plugin-typescript": "^8.2.1",
	"@types/atom": "^1.40.10",
	"@types/electron": "^1.6.10",
	"@types/node": "^14.14.37",
	"@typescript-eslint/eslint-plugin": "^4.21.0",
	"@typescript-eslint/parser": "^4.21.0",
	"core-js": "^3.10.1",
	eslint: "^7.23.0",
	"eslint-config-eslint": "^7.0.0",
	"eslint-plugin-json": "^2.1.2",
	"eslint-plugin-prettierx": "^0.17.1",
	husky: ">=4.3 <5",
	"lint-staged": "^10.5.4",
	"npm-run-all": "^4.1.5",
	prettierx: "^0.18.0",
	rollup: "^2.44.0",
	"rollup-plugin-scss": "^2.6.1",
	"rollup-plugin-terser": "^7.0.2",
	"source-map-explorer": "^2.5.2",
	stylelint: "^13.12.0",
	tslib: "^2.2.0",
	typescript: "^4.2.4"
};
var husky = {
	hooks: {
		"pre-commit": "lint-staged"
	}
};
var meta = {
	name: name,
	main: main,
	version: version,
	description: description,
	scripts: scripts,
	keywords: keywords,
	repository: repository,
	license: license,
	engines: engines,
	activationCommands: activationCommands,
	consumedServices: consumedServices,
	dependencies: dependencies,
	devDependencies: devDependencies,
	husky: husky,
	"lint-staged": {
	"*.ts": "eslint --cache --fix",
	"*.{js,md,yml}": "prettier --write"
}
};

var configSchema = {
  deleteApmFolders: {
    title: 'Delete apm Folders',
    description: 'Deletes outdated packages in `~/.atom/.apm`',
    type: 'boolean',
    "default": true,
    order: 1
  },
  deleteStorage: {
    title: 'Delete Storage',
    description: "Deletes items for outdated packages in Atom's [storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)",
    type: 'boolean',
    "default": true,
    order: 2
  },
  itemsToKeep: {
    title: 'Items to Keep',
    description: 'Specify the last number of versions to keep',
    type: 'integer',
    "default": 5,
    minimum: 1,
    order: 3
  },
  developer: {
    type: 'object',
    order: 4,
    properties: {
      autoOpenConsole: {
        title: 'Automatically Open Console',
        description: 'Logs all actions to the console while in Debug Mode',
        type: 'boolean',
        "default": true,
        order: 1
      },
      autoClearConsole: {
        title: 'Automatically Clear Console',
        description: 'Clears the console on each call while in Debug Mode',
        type: 'boolean',
        "default": true,
        order: 2
      }
    }
  }
};

function getConfig(key) {
  if (key === void 0) {
    key = '';
  }

  return (key === null || key === void 0 ? void 0 : key.length) ? atom.config.get(meta.name + "." + key) : atom.config.get("" + meta.name);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION$1 = '2.0.0';
const MAX_LENGTH$7 = 256;
const MAX_SAFE_INTEGER$3 = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

const MAX_SAFE_COMPONENT_LENGTH$1 = 16;
var constants$4 = {
  SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION$1,
  MAX_LENGTH: MAX_LENGTH$7,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$3,
  MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH$1
};

const debug$1 = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error('SEMVER', ...args) : () => {};
var debug_1$1 = debug$1;

var re_1$1 = createCommonjsModule(function (module, exports) {
const {
  MAX_SAFE_COMPONENT_LENGTH
} = constants$4;



exports = module.exports = {}; // The actual regexps go on exports.re

const re = exports.re = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;

const createToken = (name, value, isGlobal) => {
  const index = R++;
  debug_1$1(index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
}; // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.


createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+'); // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'); // ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`); // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`); // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`); // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+'); // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`); // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`); // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)'); // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`); // Coercion.
// Extract anything that could conceivably be a part of a valid semver

createToken('COERCE', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true); // Tilde ranges.
// Meaning is "reasonably at or greater than"

createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`); // Caret ranges.
// Meaning is "at least and backwards compatible with"

createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`); // A simple gt/lt/eq thing, or just "" to indicate "any version"

createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`); // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`); // Star ranges basically just allow anything at all.

createToken('STAR', '(<|>)?=?\\s*\\*'); // >=0.0.0 is like a star

createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');
});

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts$1 = ['includePrerelease', 'loose', 'rtl'];

const parseOptions$1 = options => !options ? {} : typeof options !== 'object' ? {
  loose: true
} : opts$1.filter(k => options[k]).reduce((options, k) => {
  options[k] = true;
  return options;
}, {});

var parseOptions_1$1 = parseOptions$1;

const numeric$1 = /^[0-9]+$/;

const compareIdentifiers$3 = (a, b) => {
  const anum = numeric$1.test(a);
  const bnum = numeric$1.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};

const rcompareIdentifiers$1 = (a, b) => compareIdentifiers$3(b, a);

var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$3,
  rcompareIdentifiers: rcompareIdentifiers$1
};

const {
  MAX_LENGTH: MAX_LENGTH$6,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$2
} = constants$4;

const {
  re: re$9,
  t: t$9
} = re_1$1;



const {
  compareIdentifiers: compareIdentifiers$2
} = identifiers$1;

class SemVer$1 {
  constructor(version, options) {
    options = parseOptions_1$1(options);

    if (version instanceof SemVer$1) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`);
    }

    if (version.length > MAX_LENGTH$6) {
      throw new TypeError(`version is longer than ${MAX_LENGTH$6} characters`);
    }

    debug_1$1('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose; // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.

    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re$9[t$9.LOOSE] : re$9[t$9.FULL]);

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }

    this.raw = version; // these are actually numbers

    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER$2 || this.major < 0) {
      throw new TypeError('Invalid major version');
    }

    if (this.minor > MAX_SAFE_INTEGER$2 || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }

    if (this.patch > MAX_SAFE_INTEGER$2 || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    } // numberify any prerelease numeric ids


    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(id => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;

          if (num >= 0 && num < MAX_SAFE_INTEGER$2) {
            return num;
          }
        }

        return id;
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;

    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }

    return this.version;
  }

  toString() {
    return this.version;
  }

  compare(other) {
    debug_1$1('SemVer.compare', this.version, this.options, other);

    if (!(other instanceof SemVer$1)) {
      if (typeof other === 'string' && other === this.version) {
        return 0;
      }

      other = new SemVer$1(other, this.options);
    }

    if (other.version === this.version) {
      return 0;
    }

    return this.compareMain(other) || this.comparePre(other);
  }

  compareMain(other) {
    if (!(other instanceof SemVer$1)) {
      other = new SemVer$1(other, this.options);
    }

    return compareIdentifiers$2(this.major, other.major) || compareIdentifiers$2(this.minor, other.minor) || compareIdentifiers$2(this.patch, other.patch);
  }

  comparePre(other) {
    if (!(other instanceof SemVer$1)) {
      other = new SemVer$1(other, this.options);
    } // NOT having a prerelease is > having one


    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }

    let i = 0;

    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug_1$1('prerelease compare', i, a, b);

      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers$2(a, b);
      }
    } while (++i);
  }

  compareBuild(other) {
    if (!(other instanceof SemVer$1)) {
      other = new SemVer$1(other, this.options);
    }

    let i = 0;

    do {
      const a = this.build[i];
      const b = other.build[i];
      debug_1$1('prerelease compare', i, a, b);

      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers$2(a, b);
      }
    } while (++i);
  } // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.


  inc(release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;

      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;

      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.

      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier);
        }

        this.inc('pre', identifier);
        break;

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }

        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;

      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }

        this.patch = 0;
        this.prerelease = [];
        break;

      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++;
        }

        this.prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.

      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          let i = this.prerelease.length;

          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }

          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0);
          }
        }

        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }

        break;

      default:
        throw new Error(`invalid increment argument: ${release}`);
    }

    this.format();
    this.raw = this.version;
    return this;
  }

}

var semver$3 = SemVer$1;

const {
  MAX_LENGTH: MAX_LENGTH$5
} = constants$4;

const {
  re: re$8,
  t: t$8
} = re_1$1;





const parse$3 = (version, options) => {
  options = parseOptions_1$1(options);

  if (version instanceof semver$3) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH$5) {
    return null;
  }

  const r = options.loose ? re$8[t$8.LOOSE] : re$8[t$8.FULL];

  if (!r.test(version)) {
    return null;
  }

  try {
    return new semver$3(version, options);
  } catch (er) {
    return null;
  }
};

var parse_1$3 = parse$3;

const valid$3 = (version, options) => {
  const v = parse_1$3(version, options);
  return v ? v.version : null;
};

var valid_1$1 = valid$3;

const clean$1 = (version, options) => {
  const s = parse_1$3(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
};

var clean_1$1 = clean$1;

const inc$1 = (version, release, options, identifier) => {
  if (typeof options === 'string') {
    identifier = options;
    options = undefined;
  }

  try {
    return new semver$3(version, options).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
};

var inc_1$1 = inc$1;

const compare$2 = (a, b, loose) => new semver$3(a, loose).compare(new semver$3(b, loose));

var compare_1$1 = compare$2;

const eq$1 = (a, b, loose) => compare_1$1(a, b, loose) === 0;

var eq_1$1 = eq$1;

const diff$1 = (version1, version2) => {
  if (eq_1$1(version1, version2)) {
    return null;
  } else {
    const v1 = parse_1$3(version1);
    const v2 = parse_1$3(version2);
    const hasPre = v1.prerelease.length || v2.prerelease.length;
    const prefix = hasPre ? 'pre' : '';
    const defaultResult = hasPre ? 'prerelease' : '';

    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }

    return defaultResult; // may be undefined
  }
};

var diff_1$1 = diff$1;

const major$1 = (a, loose) => new semver$3(a, loose).major;

var major_1$1 = major$1;

const minor$1 = (a, loose) => new semver$3(a, loose).minor;

var minor_1$1 = minor$1;

const patch$1 = (a, loose) => new semver$3(a, loose).patch;

var patch_1$1 = patch$1;

const prerelease$1 = (version, options) => {
  const parsed = parse_1$3(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};

var prerelease_1$1 = prerelease$1;

const rcompare$1 = (a, b, loose) => compare_1$1(b, a, loose);

var rcompare_1$1 = rcompare$1;

const compareLoose$1 = (a, b) => compare_1$1(a, b, true);

var compareLoose_1$1 = compareLoose$1;

const compareBuild$1 = (a, b, loose) => {
  const versionA = new semver$3(a, loose);
  const versionB = new semver$3(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};

var compareBuild_1$1 = compareBuild$1;

const sort$1 = (list, loose) => list.sort((a, b) => compareBuild_1$1(a, b, loose));

var sort_1$1 = sort$1;

const rsort$1 = (list, loose) => list.sort((a, b) => compareBuild_1$1(b, a, loose));

var rsort_1$1 = rsort$1;

const gt$1 = (a, b, loose) => compare_1$1(a, b, loose) > 0;

var gt_1$1 = gt$1;

const lt$1 = (a, b, loose) => compare_1$1(a, b, loose) < 0;

var lt_1$1 = lt$1;

const neq$1 = (a, b, loose) => compare_1$1(a, b, loose) !== 0;

var neq_1$1 = neq$1;

const gte$1 = (a, b, loose) => compare_1$1(a, b, loose) >= 0;

var gte_1$1 = gte$1;

const lte$1 = (a, b, loose) => compare_1$1(a, b, loose) <= 0;

var lte_1$1 = lte$1;

const cmp$1 = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a === b;

    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a !== b;

    case '':
    case '=':
    case '==':
      return eq_1$1(a, b, loose);

    case '!=':
      return neq_1$1(a, b, loose);

    case '>':
      return gt_1$1(a, b, loose);

    case '>=':
      return gte_1$1(a, b, loose);

    case '<':
      return lt_1$1(a, b, loose);

    case '<=':
      return lte_1$1(a, b, loose);

    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};

var cmp_1$1 = cmp$1;

const {
  re: re$7,
  t: t$7
} = re_1$1;

const coerce$1 = (version, options) => {
  if (version instanceof semver$3) {
    return version;
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null;
  }

  options = options || {};
  let match = null;

  if (!options.rtl) {
    match = version.match(re$7[t$7.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next;

    while ((next = re$7[t$7.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }

      re$7[t$7.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    } // leave it in a clean state


    re$7[t$7.COERCERTL].lastIndex = -1;
  }

  if (match === null) return null;
  return parse_1$3(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options);
};

var coerce_1$1 = coerce$1;

var iterator$1 = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};

var yallist$1 = Yallist$1;
Yallist$1.Node = Node$1;
Yallist$1.create = Yallist$1;

function Yallist$1(list) {
  var self = this;

  if (!(self instanceof Yallist$1)) {
    self = new Yallist$1();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist$1.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist$1.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist$1.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist$1.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push$1(this, arguments[i]);
  }

  return this.length;
};

Yallist$1.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift$1(this, arguments[i]);
  }

  return this.length;
};

Yallist$1.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist$1.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist$1.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist$1.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist$1.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist$1.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist$1.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist$1.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist$1();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist$1.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist$1.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist$1.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist$1.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist$1.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist$1();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist$1.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist$1();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist$1.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert$1(this, walker, nodes[i]);
  }

  return ret;
};

Yallist$1.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert$1(self, node, value) {
  var inserted = node === self.head ? new Node$1(value, null, node, self) : new Node$1(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push$1(self, item) {
  self.tail = new Node$1(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift$1(self, item) {
  self.head = new Node$1(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node$1(value, prev, next, list) {
  if (!(this instanceof Node$1)) {
    return new Node$1(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  iterator$1(Yallist$1);
} catch (er) {}

const MAX$1 = Symbol('max');
const LENGTH$1 = Symbol('length');
const LENGTH_CALCULATOR$1 = Symbol('lengthCalculator');
const ALLOW_STALE$1 = Symbol('allowStale');
const MAX_AGE$1 = Symbol('maxAge');
const DISPOSE$1 = Symbol('dispose');
const NO_DISPOSE_ON_SET$1 = Symbol('noDisposeOnSet');
const LRU_LIST$1 = Symbol('lruList');
const CACHE$1 = Symbol('cache');
const UPDATE_AGE_ON_GET$1 = Symbol('updateAgeOnGet');

const naiveLength$1 = () => 1; // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


class LRUCache$1 {
  constructor(options) {
    if (typeof options === 'number') options = {
      max: options
    };
    if (!options) options = {};
    if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number'); // Kind of weird to have a default max of Infinity, but oh well.

    this[MAX$1] = options.max || Infinity;
    const lc = options.length || naiveLength$1;
    this[LENGTH_CALCULATOR$1] = typeof lc !== 'function' ? naiveLength$1 : lc;
    this[ALLOW_STALE$1] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
    this[MAX_AGE$1] = options.maxAge || 0;
    this[DISPOSE$1] = options.dispose;
    this[NO_DISPOSE_ON_SET$1] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET$1] = options.updateAgeOnGet || false;
    this.reset();
  } // resize the cache when the max changes.


  set max(mL) {
    if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
    this[MAX$1] = mL || Infinity;
    trim$1(this);
  }

  get max() {
    return this[MAX$1];
  }

  set allowStale(allowStale) {
    this[ALLOW_STALE$1] = !!allowStale;
  }

  get allowStale() {
    return this[ALLOW_STALE$1];
  }

  set maxAge(mA) {
    if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
    this[MAX_AGE$1] = mA;
    trim$1(this);
  }

  get maxAge() {
    return this[MAX_AGE$1];
  } // resize the cache when the lengthCalculator changes.


  set lengthCalculator(lC) {
    if (typeof lC !== 'function') lC = naiveLength$1;

    if (lC !== this[LENGTH_CALCULATOR$1]) {
      this[LENGTH_CALCULATOR$1] = lC;
      this[LENGTH$1] = 0;
      this[LRU_LIST$1].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR$1](hit.value, hit.key);
        this[LENGTH$1] += hit.length;
      });
    }

    trim$1(this);
  }

  get lengthCalculator() {
    return this[LENGTH_CALCULATOR$1];
  }

  get length() {
    return this[LENGTH$1];
  }

  get itemCount() {
    return this[LRU_LIST$1].length;
  }

  rforEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST$1].tail; walker !== null;) {
      const prev = walker.prev;
      forEachStep$1(this, fn, walker, thisp);
      walker = prev;
    }
  }

  forEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST$1].head; walker !== null;) {
      const next = walker.next;
      forEachStep$1(this, fn, walker, thisp);
      walker = next;
    }
  }

  keys() {
    return this[LRU_LIST$1].toArray().map(k => k.key);
  }

  values() {
    return this[LRU_LIST$1].toArray().map(k => k.value);
  }

  reset() {
    if (this[DISPOSE$1] && this[LRU_LIST$1] && this[LRU_LIST$1].length) {
      this[LRU_LIST$1].forEach(hit => this[DISPOSE$1](hit.key, hit.value));
    }

    this[CACHE$1] = new Map(); // hash of items by key

    this[LRU_LIST$1] = new yallist$1(); // list of items in order of use recency

    this[LENGTH$1] = 0; // length of items in the list
  }

  dump() {
    return this[LRU_LIST$1].map(hit => isStale$1(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter(h => h);
  }

  dumpLru() {
    return this[LRU_LIST$1];
  }

  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE$1];
    if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR$1](value, key);

    if (this[CACHE$1].has(key)) {
      if (len > this[MAX$1]) {
        del$1(this, this[CACHE$1].get(key));
        return false;
      }

      const node = this[CACHE$1].get(key);
      const item = node.value; // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking

      if (this[DISPOSE$1]) {
        if (!this[NO_DISPOSE_ON_SET$1]) this[DISPOSE$1](key, item.value);
      }

      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH$1] += len - item.length;
      item.length = len;
      this.get(key);
      trim$1(this);
      return true;
    }

    const hit = new Entry$1(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

    if (hit.length > this[MAX$1]) {
      if (this[DISPOSE$1]) this[DISPOSE$1](key, value);
      return false;
    }

    this[LENGTH$1] += hit.length;
    this[LRU_LIST$1].unshift(hit);
    this[CACHE$1].set(key, this[LRU_LIST$1].head);
    trim$1(this);
    return true;
  }

  has(key) {
    if (!this[CACHE$1].has(key)) return false;
    const hit = this[CACHE$1].get(key).value;
    return !isStale$1(this, hit);
  }

  get(key) {
    return get$1(this, key, true);
  }

  peek(key) {
    return get$1(this, key, false);
  }

  pop() {
    const node = this[LRU_LIST$1].tail;
    if (!node) return null;
    del$1(this, node);
    return node.value;
  }

  del(key) {
    del$1(this, this[CACHE$1].get(key));
  }

  load(arr) {
    // reset the cache
    this.reset();
    const now = Date.now(); // A previous serialized cache has the most recent items first

    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0) // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v);else {
        const maxAge = expiresAt - now; // dont add already expired items

        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }

  prune() {
    this[CACHE$1].forEach((value, key) => get$1(this, key, false));
  }

}

const get$1 = (self, key, doUse) => {
  const node = self[CACHE$1].get(key);

  if (node) {
    const hit = node.value;

    if (isStale$1(self, hit)) {
      del$1(self, node);
      if (!self[ALLOW_STALE$1]) return undefined;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET$1]) node.value.now = Date.now();
        self[LRU_LIST$1].unshiftNode(node);
      }
    }

    return hit.value;
  }
};

const isStale$1 = (self, hit) => {
  if (!hit || !hit.maxAge && !self[MAX_AGE$1]) return false;
  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE$1] && diff > self[MAX_AGE$1];
};

const trim$1 = self => {
  if (self[LENGTH$1] > self[MAX$1]) {
    for (let walker = self[LRU_LIST$1].tail; self[LENGTH$1] > self[MAX$1] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev;
      del$1(self, walker);
      walker = prev;
    }
  }
};

const del$1 = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE$1]) self[DISPOSE$1](hit.key, hit.value);
    self[LENGTH$1] -= hit.length;
    self[CACHE$1].delete(hit.key);
    self[LRU_LIST$1].removeNode(node);
  }
};

class Entry$1 {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }

}

const forEachStep$1 = (self, fn, node, thisp) => {
  let hit = node.value;

  if (isStale$1(self, hit)) {
    del$1(self, node);
    if (!self[ALLOW_STALE$1]) hit = undefined;
  }

  if (hit) fn.call(thisp, hit.value, hit.key, self);
};

var lruCache$1 = LRUCache$1;

// hoisted class for cyclic dependency
class Range$1 {
  constructor(range, options) {
    options = parseOptions_1$1(options);

    if (range instanceof Range$1) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range$1(range.raw, options);
      }
    }

    if (range instanceof comparator$1) {
      // just put it in the set and return
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this;
    }

    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/) // map the range to a 2d array of comparators
    .map(range => this.parseRange(range.trim())) // throw out any comparator lists that are empty
    // this generally means that it was not a valid range, which is allowed
    // in loose mode, but will still throw if the WHOLE range is invalid.
    .filter(c => c.length);

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`);
    } // if we have any that are not the null set, throw out null sets.


    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0];
      this.set = this.set.filter(c => !isNullSet$1(c[0]));
      if (this.set.length === 0) this.set = [first];else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny$1(c[0])) {
            this.set = [c];
            break;
          }
        }
      }
    }

    this.format();
  }

  format() {
    this.range = this.set.map(comps => {
      return comps.join(' ').trim();
    }).join('||').trim();
    return this.range;
  }

  toString() {
    return this.range;
  }

  parseRange(range) {
    range = range.trim(); // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.

    const memoOpts = Object.keys(this.options).join(',');
    const memoKey = `parseRange:${memoOpts}:${range}`;
    const cached = cache$1.get(memoKey);
    if (cached) return cached;
    const loose = this.options.loose; // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

    const hr = loose ? re$6[t$6.HYPHENRANGELOOSE] : re$6[t$6.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace$1(this.options.includePrerelease));
    debug_1$1('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

    range = range.replace(re$6[t$6.COMPARATORTRIM], comparatorTrimReplace$1);
    debug_1$1('comparator trim', range, re$6[t$6.COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

    range = range.replace(re$6[t$6.TILDETRIM], tildeTrimReplace$1); // `^ 1.2.3` => `^1.2.3`

    range = range.replace(re$6[t$6.CARETTRIM], caretTrimReplace$1); // normalize spaces

    range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re$6[t$6.COMPARATORLOOSE] : re$6[t$6.COMPARATOR];
    const rangeList = range.split(' ').map(comp => parseComparator$1(comp, this.options)).join(' ').split(/\s+/) // >=0.0.0 is equivalent to *
    .map(comp => replaceGTE0$1(comp, this.options)) // in loose mode, throw out any that are not valid comparators
    .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true).map(comp => new comparator$1(comp, this.options)); // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once

    rangeList.length;
    const rangeMap = new Map();

    for (const comp of rangeList) {
      if (isNullSet$1(comp)) return [comp];
      rangeMap.set(comp.value, comp);
    }

    if (rangeMap.size > 1 && rangeMap.has('')) rangeMap.delete('');
    const result = [...rangeMap.values()];
    cache$1.set(memoKey, result);
    return result;
  }

  intersects(range, options) {
    if (!(range instanceof Range$1)) {
      throw new TypeError('a Range is required');
    }

    return this.set.some(thisComparators => {
      return isSatisfiable$1(thisComparators, options) && range.set.some(rangeComparators => {
        return isSatisfiable$1(rangeComparators, options) && thisComparators.every(thisComparator => {
          return rangeComparators.every(rangeComparator => {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  } // if ANY of the sets match ALL of its comparators, then pass


  test(version) {
    if (!version) {
      return false;
    }

    if (typeof version === 'string') {
      try {
        version = new semver$3(version, this.options);
      } catch (er) {
        return false;
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet$1(this.set[i], version, this.options)) {
        return true;
      }
    }

    return false;
  }

}

var range$1 = Range$1;



const cache$1 = new lruCache$1({
  max: 1000
});









const {
  re: re$6,
  t: t$6,
  comparatorTrimReplace: comparatorTrimReplace$1,
  tildeTrimReplace: tildeTrimReplace$1,
  caretTrimReplace: caretTrimReplace$1
} = re_1$1;

const isNullSet$1 = c => c.value === '<0.0.0-0';

const isAny$1 = c => c.value === ''; // take a set of comparators and determine whether there
// exists a version which can satisfy it


const isSatisfiable$1 = (comparators, options) => {
  let result = true;
  const remainingComparators = comparators.slice();
  let testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(otherComparator => {
      return testComparator.intersects(otherComparator, options);
    });
    testComparator = remainingComparators.pop();
  }

  return result;
}; // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


const parseComparator$1 = (comp, options) => {
  debug_1$1('comp', comp, options);
  comp = replaceCarets$1(comp, options);
  debug_1$1('caret', comp);
  comp = replaceTildes$1(comp, options);
  debug_1$1('tildes', comp);
  comp = replaceXRanges$1(comp, options);
  debug_1$1('xrange', comp);
  comp = replaceStars$1(comp, options);
  debug_1$1('stars', comp);
  return comp;
};

const isX$1 = id => !id || id.toLowerCase() === 'x' || id === '*'; // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0


const replaceTildes$1 = (comp, options) => comp.trim().split(/\s+/).map(comp => {
  return replaceTilde$1(comp, options);
}).join(' ');

const replaceTilde$1 = (comp, options) => {
  const r = options.loose ? re$6[t$6.TILDELOOSE] : re$6[t$6.TILDE];
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1$1('tilde', comp, _, M, m, p, pr);
    let ret;

    if (isX$1(M)) {
      ret = '';
    } else if (isX$1(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
    } else if (isX$1(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
    } else if (pr) {
      debug_1$1('replaceTilde pr', pr);
      ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
    }

    debug_1$1('tilde return', ret);
    return ret;
  });
}; // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0


const replaceCarets$1 = (comp, options) => comp.trim().split(/\s+/).map(comp => {
  return replaceCaret$1(comp, options);
}).join(' ');

const replaceCaret$1 = (comp, options) => {
  debug_1$1('caret', comp, options);
  const r = options.loose ? re$6[t$6.CARETLOOSE] : re$6[t$6.CARET];
  const z = options.includePrerelease ? '-0' : '';
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1$1('caret', comp, _, M, m, p, pr);
    let ret;

    if (isX$1(M)) {
      ret = '';
    } else if (isX$1(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
    } else if (isX$1(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
      }
    } else if (pr) {
      debug_1$1('replaceCaret pr', pr);

      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
      }
    } else {
      debug_1$1('no pr');

      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
      }
    }

    debug_1$1('caret return', ret);
    return ret;
  });
};

const replaceXRanges$1 = (comp, options) => {
  debug_1$1('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(comp => {
    return replaceXRange$1(comp, options);
  }).join(' ');
};

const replaceXRange$1 = (comp, options) => {
  comp = comp.trim();
  const r = options.loose ? re$6[t$6.XRANGELOOSE] : re$6[t$6.XRANGE];
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug_1$1('xRange', comp, ret, gtlt, M, m, p, pr);
    const xM = isX$1(M);
    const xm = xM || isX$1(m);
    const xp = xm || isX$1(p);
    const anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    } // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value


    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }

      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';

        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      if (gtlt === '<') pr = '-0';
      ret = `${gtlt + M}.${m}.${p}${pr}`;
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
    }

    debug_1$1('xRange return', ret);
    return ret;
  });
}; // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


const replaceStars$1 = (comp, options) => {
  debug_1$1('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re$6[t$6.STAR], '');
};

const replaceGTE0$1 = (comp, options) => {
  debug_1$1('replaceGTE0', comp, options);
  return comp.trim().replace(re$6[options.includePrerelease ? t$6.GTE0PRE : t$6.GTE0], '');
}; // This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0


const hyphenReplace$1 = incPr => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
  if (isX$1(fM)) {
    from = '';
  } else if (isX$1(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
  } else if (isX$1(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
  } else if (fpr) {
    from = `>=${from}`;
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`;
  }

  if (isX$1(tM)) {
    to = '';
  } else if (isX$1(tm)) {
    to = `<${+tM + 1}.0.0-0`;
  } else if (isX$1(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`;
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`;
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`;
  } else {
    to = `<=${to}`;
  }

  return `${from} ${to}`.trim();
};

const testSet$1 = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug_1$1(set[i].semver);

      if (set[i].semver === comparator$1.ANY) {
        continue;
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver;

        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
};

const ANY$5 = Symbol('SemVer ANY'); // hoisted class for cyclic dependency

class Comparator$1 {
  static get ANY() {
    return ANY$5;
  }

  constructor(comp, options) {
    options = parseOptions_1$1(options);

    if (comp instanceof Comparator$1) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }

    debug_1$1('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);

    if (this.semver === ANY$5) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }

    debug_1$1('comp', this);
  }

  parse(comp) {
    const r = this.options.loose ? re$5[t$5.COMPARATORLOOSE] : re$5[t$5.COMPARATOR];
    const m = comp.match(r);

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`);
    }

    this.operator = m[1] !== undefined ? m[1] : '';

    if (this.operator === '=') {
      this.operator = '';
    } // if it literally is just '>' or '' then allow anything.


    if (!m[2]) {
      this.semver = ANY$5;
    } else {
      this.semver = new semver$3(m[2], this.options.loose);
    }
  }

  toString() {
    return this.value;
  }

  test(version) {
    debug_1$1('Comparator.test', version, this.options.loose);

    if (this.semver === ANY$5 || version === ANY$5) {
      return true;
    }

    if (typeof version === 'string') {
      try {
        version = new semver$3(version, this.options);
      } catch (er) {
        return false;
      }
    }

    return cmp_1$1(version, this.operator, this.semver, this.options);
  }

  intersects(comp, options) {
    if (!(comp instanceof Comparator$1)) {
      throw new TypeError('a Comparator is required');
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true;
      }

      return new range$1(comp.value, options).test(this.value);
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true;
      }

      return new range$1(this.value, options).test(comp.semver);
    }

    const sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    const sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    const sameSemVer = this.semver.version === comp.semver.version;
    const differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    const oppositeDirectionsLessThan = cmp_1$1(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    const oppositeDirectionsGreaterThan = cmp_1$1(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  }

}

var comparator$1 = Comparator$1;



const {
  re: re$5,
  t: t$5
} = re_1$1;

const satisfies$1 = (version, range, options) => {
  try {
    range = new range$1(range, options);
  } catch (er) {
    return false;
  }

  return range.test(version);
};

var satisfies_1$1 = satisfies$1;

// Mostly just for testing and legacy API reasons


const toComparators$1 = (range, options) => new range$1(range, options).set.map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

var toComparators_1$1 = toComparators$1;

const maxSatisfying$1 = (versions, range, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;

  try {
    rangeObj = new range$1(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(v => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new semver$3(max, options);
      }
    }
  });
  return max;
};

var maxSatisfying_1$1 = maxSatisfying$1;

const minSatisfying$1 = (versions, range, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;

  try {
    rangeObj = new range$1(range, options);
  } catch (er) {
    return null;
  }

  versions.forEach(v => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new semver$3(min, options);
      }
    }
  });
  return min;
};

var minSatisfying_1$1 = minSatisfying$1;

const minVersion$1 = (range, loose) => {
  range = new range$1(range, loose);
  let minver = new semver$3('0.0.0');

  if (range.test(minver)) {
    return minver;
  }

  minver = new semver$3('0.0.0-0');

  if (range.test(minver)) {
    return minver;
  }

  minver = null;

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let setMin = null;
    comparators.forEach(comparator => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new semver$3(comparator.semver.version);

      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }

          compver.raw = compver.format();

        /* fallthrough */

        case '':
        case '>=':
          if (!setMin || gt_1$1(compver, setMin)) {
            setMin = compver;
          }

          break;

        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;

        /* istanbul ignore next */

        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`);
      }
    });
    if (setMin && (!minver || gt_1$1(minver, setMin))) minver = setMin;
  }

  if (minver && range.test(minver)) {
    return minver;
  }

  return null;
};

var minVersion_1$1 = minVersion$1;

const validRange$1 = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new range$1(range, options).range || '*';
  } catch (er) {
    return null;
  }
};

var valid$2 = validRange$1;

const {
  ANY: ANY$4
} = comparator$1;













const outside$1 = (version, range, hilo, options) => {
  version = new semver$3(version, options);
  range = new range$1(range, options);
  let gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt_1$1;
      ltefn = lte_1$1;
      ltfn = lt_1$1;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt_1$1;
      ltefn = gte_1$1;
      ltfn = gt_1$1;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisfies the range it is not outside


  if (satisfies_1$1(version, range, options)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i];
    let high = null;
    let low = null;
    comparators.forEach(comparator => {
      if (comparator.semver === ANY$4) {
        comparator = new comparator$1('>=0.0.0');
      }

      high = high || comparator;
      low = low || comparator;

      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return false;
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }

  return true;
};

var outside_1$1 = outside$1;

// Determine if version is greater than all the versions possible in the range.


const gtr$1 = (version, range, options) => outside_1$1(version, range, '>', options);

var gtr_1$1 = gtr$1;

// Determine if version is less than all the versions possible in the range


const ltr$1 = (version, range, options) => outside_1$1(version, range, '<', options);

var ltr_1$1 = ltr$1;

const intersects$1 = (r1, r2, options) => {
  r1 = new range$1(r1, options);
  r2 = new range$1(r2, options);
  return r1.intersects(r2);
};

var intersects_1$1 = intersects$1;

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.




var simplify$1 = (versions, range, options) => {
  const set = [];
  let min = null;
  let prev = null;
  const v = versions.sort((a, b) => compare_1$1(a, b, options));

  for (const version of v) {
    const included = satisfies_1$1(version, range, options);

    if (included) {
      prev = version;
      if (!min) min = version;
    } else {
      if (prev) {
        set.push([min, prev]);
      }

      prev = null;
      min = null;
    }
  }

  if (min) set.push([min, null]);
  const ranges = [];

  for (const [min, max] of set) {
    if (min === max) ranges.push(min);else if (!max && min === v[0]) ranges.push('*');else if (!max) ranges.push(`>=${min}`);else if (min === v[0]) ranges.push(`<=${max}`);else ranges.push(`${min} - ${max}`);
  }

  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};

const {
  ANY: ANY$3
} = comparator$1;



 // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true


const subset$1 = (sub, dom, options = {}) => {
  if (sub === dom) return true;
  sub = new range$1(sub, options);
  dom = new range$1(dom, options);
  let sawNonNull = false;

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset$1(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) continue OUTER;
    } // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.


    if (sawNonNull) return false;
  }

  return true;
};

const simpleSubset$1 = (sub, dom, options) => {
  if (sub === dom) return true;

  if (sub.length === 1 && sub[0].semver === ANY$3) {
    if (dom.length === 1 && dom[0].semver === ANY$3) return true;else if (options.includePrerelease) sub = [new comparator$1('>=0.0.0-0')];else sub = [new comparator$1('>=0.0.0')];
  }

  if (dom.length === 1 && dom[0].semver === ANY$3) {
    if (options.includePrerelease) return true;else dom = [new comparator$1('>=0.0.0')];
  }

  const eqSet = new Set();
  let gt, lt;

  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') gt = higherGT$1(gt, c, options);else if (c.operator === '<' || c.operator === '<=') lt = lowerLT$1(lt, c, options);else eqSet.add(c.semver);
  }

  if (eqSet.size > 1) return null;
  let gtltComp;

  if (gt && lt) {
    gtltComp = compare_1$1(gt.semver, lt.semver, options);
    if (gtltComp > 0) return null;else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) return null;
  } // will iterate one or zero times


  for (const eq of eqSet) {
    if (gt && !satisfies_1$1(eq, String(gt), options)) return null;
    if (lt && !satisfies_1$1(eq, String(lt), options)) return null;

    for (const c of dom) {
      if (!satisfies_1$1(eq, String(c), options)) return false;
    }

    return true;
  }

  let higher, lower;
  let hasDomLT, hasDomGT; // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset

  let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false; // exception: <1.2.3-0 is the same as <1.2.3

  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';

    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }

      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT$1(gt, c, options);
        if (higher === c && higher !== gt) return false;
      } else if (gt.operator === '>=' && !satisfies_1$1(gt.semver, String(c), options)) return false;
    }

    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }

      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT$1(lt, c, options);
        if (lower === c && lower !== lt) return false;
      } else if (lt.operator === '<=' && !satisfies_1$1(lt.semver, String(c), options)) return false;
    }

    if (!c.operator && (lt || gt) && gtltComp !== 0) return false;
  } // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0


  if (gt && hasDomLT && !lt && gtltComp !== 0) return false;
  if (lt && hasDomGT && !gt && gtltComp !== 0) return false; // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple

  if (needDomGTPre || needDomLTPre) return false;
  return true;
}; // >=1.2.3 is lower than >1.2.3


const higherGT$1 = (a, b, options) => {
  if (!a) return b;
  const comp = compare_1$1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
}; // <=1.2.3 is higher than <1.2.3


const lowerLT$1 = (a, b, options) => {
  if (!a) return b;
  const comp = compare_1$1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};

var subset_1$1 = subset$1;

// just pre-load all the stuff that index.js lazily exports


var semver$2 = {
  re: re_1$1.re,
  src: re_1$1.src,
  tokens: re_1$1.t,
  SEMVER_SPEC_VERSION: constants$4.SEMVER_SPEC_VERSION,
  SemVer: semver$3,
  compareIdentifiers: identifiers$1.compareIdentifiers,
  rcompareIdentifiers: identifiers$1.rcompareIdentifiers,
  parse: parse_1$3,
  valid: valid_1$1,
  clean: clean_1$1,
  inc: inc_1$1,
  diff: diff_1$1,
  major: major_1$1,
  minor: minor_1$1,
  patch: patch_1$1,
  prerelease: prerelease_1$1,
  compare: compare_1$1,
  rcompare: rcompare_1$1,
  compareLoose: compareLoose_1$1,
  compareBuild: compareBuild_1$1,
  sort: sort_1$1,
  rsort: rsort_1$1,
  gt: gt_1$1,
  lt: lt_1$1,
  eq: eq_1$1,
  neq: neq_1$1,
  gte: gte_1$1,
  lte: lte_1$1,
  cmp: cmp_1$1,
  coerce: coerce_1$1,
  Comparator: comparator$1,
  Range: range$1,
  satisfies: satisfies_1$1,
  toComparators: toComparators_1$1,
  maxSatisfying: maxSatisfying_1$1,
  minSatisfying: minSatisfying_1$1,
  minVersion: minVersion_1$1,
  validRange: valid$2,
  outside: outside_1$1,
  gtr: gtr_1$1,
  ltr: ltr_1$1,
  intersects: intersects_1$1,
  simplifyRange: simplify$1,
  subset: subset_1$1
};

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH$4 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER ||
/* istanbul ignore next */
9007199254740991; // Max safe segment length for coercion.

const MAX_SAFE_COMPONENT_LENGTH = 16;
var constants$3 = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH: MAX_LENGTH$4,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  MAX_SAFE_COMPONENT_LENGTH
};

const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error('SEMVER', ...args) : () => {};
var debug_1 = debug;

var re_1 = createCommonjsModule(function (module, exports) {
const {
  MAX_SAFE_COMPONENT_LENGTH
} = constants$3;



exports = module.exports = {}; // The actual regexps go on exports.re

const re = exports.re = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;

const createToken = (name, value, isGlobal) => {
  const index = R++;
  debug_1(index, value);
  t[name] = index;
  src[index] = value;
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
}; // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.


createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+'); // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'); // ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`); // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`); // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`); // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+'); // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`); // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`); // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)'); // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`); // Coercion.
// Extract anything that could conceivably be a part of a valid semver

createToken('COERCE', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true); // Tilde ranges.
// Meaning is "reasonably at or greater than"

createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`); // Caret ranges.
// Meaning is "at least and backwards compatible with"

createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`); // A simple gt/lt/eq thing, or just "" to indicate "any version"

createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`); // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`); // Star ranges basically just allow anything at all.

createToken('STAR', '(<|>)?=?\\s*\\*'); // >=0.0.0 is like a star

createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');
});

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl'];

const parseOptions = options => !options ? {} : typeof options !== 'object' ? {
  loose: true
} : opts.filter(k => options[k]).reduce((options, k) => {
  options[k] = true;
  return options;
}, {});

var parseOptions_1 = parseOptions;

const numeric = /^[0-9]+$/;

const compareIdentifiers$1 = (a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};

const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);

var identifiers = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};

const {
  MAX_LENGTH: MAX_LENGTH$3,
  MAX_SAFE_INTEGER
} = constants$3;

const {
  re: re$4,
  t: t$4
} = re_1;



const {
  compareIdentifiers
} = identifiers;

class SemVer {
  constructor(version, options) {
    options = parseOptions_1(options);

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`);
    }

    if (version.length > MAX_LENGTH$3) {
      throw new TypeError(`version is longer than ${MAX_LENGTH$3} characters`);
    }

    debug_1('SemVer', version, options);
    this.options = options;
    this.loose = !!options.loose; // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.

    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re$4[t$4.LOOSE] : re$4[t$4.FULL]);

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }

    this.raw = version; // these are actually numbers

    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version');
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version');
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version');
    } // numberify any prerelease numeric ids


    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split('.').map(id => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;

          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }

        return id;
      });
    }

    this.build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;

    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`;
    }

    return this.version;
  }

  toString() {
    return this.version;
  }

  compare(other) {
    debug_1('SemVer.compare', this.version, this.options, other);

    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0;
      }

      other = new SemVer(other, this.options);
    }

    if (other.version === this.version) {
      return 0;
    }

    return this.compareMain(other) || this.comparePre(other);
  }

  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }

  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    } // NOT having a prerelease is > having one


    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }

    let i = 0;

    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug_1('prerelease compare', i, a, b);

      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }

  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }

    let i = 0;

    do {
      const a = this.build[i];
      const b = other.build[i];
      debug_1('prerelease compare', i, a, b);

      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  } // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.


  inc(release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc('pre', identifier);
        break;

      case 'preminor':
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc('pre', identifier);
        break;

      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.

      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier);
        }

        this.inc('pre', identifier);
        break;

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }

        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;

      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }

        this.patch = 0;
        this.prerelease = [];
        break;

      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++;
        }

        this.prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.

      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0];
        } else {
          let i = this.prerelease.length;

          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++;
              i = -2;
            }
          }

          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0);
          }
        }

        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0];
            }
          } else {
            this.prerelease = [identifier, 0];
          }
        }

        break;

      default:
        throw new Error(`invalid increment argument: ${release}`);
    }

    this.format();
    this.raw = this.version;
    return this;
  }

}

var semver$1 = SemVer;

const {
  MAX_LENGTH: MAX_LENGTH$2
} = constants$3;

const {
  re: re$3,
  t: t$3
} = re_1;





const parse$2 = (version, options) => {
  options = parseOptions_1(options);

  if (version instanceof semver$1) {
    return version;
  }

  if (typeof version !== 'string') {
    return null;
  }

  if (version.length > MAX_LENGTH$2) {
    return null;
  }

  const r = options.loose ? re$3[t$3.LOOSE] : re$3[t$3.FULL];

  if (!r.test(version)) {
    return null;
  }

  try {
    return new semver$1(version, options);
  } catch (er) {
    return null;
  }
};

var parse_1$2 = parse$2;

const valid$1 = (version, options) => {
  const v = parse_1$2(version, options);
  return v ? v.version : null;
};

var valid_1 = valid$1;

const clean = (version, options) => {
  const s = parse_1$2(version.trim().replace(/^[=v]+/, ''), options);
  return s ? s.version : null;
};

var clean_1 = clean;

const inc = (version, release, options, identifier) => {
  if (typeof options === 'string') {
    identifier = options;
    options = undefined;
  }

  try {
    return new semver$1(version, options).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
};

var inc_1 = inc;

const compare$1 = (a, b, loose) => new semver$1(a, loose).compare(new semver$1(b, loose));

var compare_1 = compare$1;

const eq = (a, b, loose) => compare_1(a, b, loose) === 0;

var eq_1 = eq;

const diff = (version1, version2) => {
  if (eq_1(version1, version2)) {
    return null;
  } else {
    const v1 = parse_1$2(version1);
    const v2 = parse_1$2(version2);
    const hasPre = v1.prerelease.length || v2.prerelease.length;
    const prefix = hasPre ? 'pre' : '';
    const defaultResult = hasPre ? 'prerelease' : '';

    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key;
        }
      }
    }

    return defaultResult; // may be undefined
  }
};

var diff_1 = diff;

const major = (a, loose) => new semver$1(a, loose).major;

var major_1 = major;

const minor = (a, loose) => new semver$1(a, loose).minor;

var minor_1 = minor;

const patch = (a, loose) => new semver$1(a, loose).patch;

var patch_1 = patch;

const prerelease = (version, options) => {
  const parsed = parse_1$2(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};

var prerelease_1 = prerelease;

const rcompare = (a, b, loose) => compare_1(b, a, loose);

var rcompare_1 = rcompare;

const compareLoose = (a, b) => compare_1(a, b, true);

var compareLoose_1 = compareLoose;

const compareBuild = (a, b, loose) => {
  const versionA = new semver$1(a, loose);
  const versionB = new semver$1(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
};

var compareBuild_1 = compareBuild;

const sort = (list, loose) => list.sort((a, b) => compareBuild_1(a, b, loose));

var sort_1 = sort;

const rsort = (list, loose) => list.sort((a, b) => compareBuild_1(b, a, loose));

var rsort_1 = rsort;

const gt = (a, b, loose) => compare_1(a, b, loose) > 0;

var gt_1 = gt;

const lt = (a, b, loose) => compare_1(a, b, loose) < 0;

var lt_1 = lt;

const neq = (a, b, loose) => compare_1(a, b, loose) !== 0;

var neq_1 = neq;

const gte = (a, b, loose) => compare_1(a, b, loose) >= 0;

var gte_1 = gte;

const lte = (a, b, loose) => compare_1(a, b, loose) <= 0;

var lte_1 = lte;

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a === b;

    case '!==':
      if (typeof a === 'object') a = a.version;
      if (typeof b === 'object') b = b.version;
      return a !== b;

    case '':
    case '=':
    case '==':
      return eq_1(a, b, loose);

    case '!=':
      return neq_1(a, b, loose);

    case '>':
      return gt_1(a, b, loose);

    case '>=':
      return gte_1(a, b, loose);

    case '<':
      return lt_1(a, b, loose);

    case '<=':
      return lte_1(a, b, loose);

    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
};

var cmp_1 = cmp;

const {
  re: re$2,
  t: t$2
} = re_1;

const coerce = (version, options) => {
  if (version instanceof semver$1) {
    return version;
  }

  if (typeof version === 'number') {
    version = String(version);
  }

  if (typeof version !== 'string') {
    return null;
  }

  options = options || {};
  let match = null;

  if (!options.rtl) {
    match = version.match(re$2[t$2.COERCE]);
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next;

    while ((next = re$2[t$2.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }

      re$2[t$2.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
    } // leave it in a clean state


    re$2[t$2.COERCERTL].lastIndex = -1;
  }

  if (match === null) return null;
  return parse_1$2(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options);
};

var coerce_1 = coerce;

var iterator = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value;
    }
  };
};

var yallist = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i]);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  iterator(Yallist);
} catch (er) {}

const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

const naiveLength = () => 1; // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


class LRUCache {
  constructor(options) {
    if (typeof options === 'number') options = {
      max: options
    };
    if (!options) options = {};
    if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number'); // Kind of weird to have a default max of Infinity, but oh well.

    this[MAX] = options.max || Infinity;
    const lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  } // resize the cache when the max changes.


  set max(mL) {
    if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
    this[MAX] = mL || Infinity;
    trim(this);
  }

  get max() {
    return this[MAX];
  }

  set allowStale(allowStale) {
    this[ALLOW_STALE] = !!allowStale;
  }

  get allowStale() {
    return this[ALLOW_STALE];
  }

  set maxAge(mA) {
    if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
    this[MAX_AGE] = mA;
    trim(this);
  }

  get maxAge() {
    return this[MAX_AGE];
  } // resize the cache when the lengthCalculator changes.


  set lengthCalculator(lC) {
    if (typeof lC !== 'function') lC = naiveLength;

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC;
      this[LENGTH] = 0;
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
        this[LENGTH] += hit.length;
      });
    }

    trim(this);
  }

  get lengthCalculator() {
    return this[LENGTH_CALCULATOR];
  }

  get length() {
    return this[LENGTH];
  }

  get itemCount() {
    return this[LRU_LIST].length;
  }

  rforEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev;
      forEachStep(this, fn, walker, thisp);
      walker = prev;
    }
  }

  forEach(fn, thisp) {
    thisp = thisp || this;

    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next;
      forEachStep(this, fn, walker, thisp);
      walker = next;
    }
  }

  keys() {
    return this[LRU_LIST].toArray().map(k => k.key);
  }

  values() {
    return this[LRU_LIST].toArray().map(k => k.value);
  }

  reset() {
    if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value));
    }

    this[CACHE] = new Map(); // hash of items by key

    this[LRU_LIST] = new yallist(); // list of items in order of use recency

    this[LENGTH] = 0; // length of items in the list
  }

  dump() {
    return this[LRU_LIST].map(hit => isStale(this, hit) ? false : {
      k: hit.key,
      v: hit.value,
      e: hit.now + (hit.maxAge || 0)
    }).toArray().filter(h => h);
  }

  dumpLru() {
    return this[LRU_LIST];
  }

  set(key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE];
    if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
    const now = maxAge ? Date.now() : 0;
    const len = this[LENGTH_CALCULATOR](value, key);

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key));
        return false;
      }

      const node = this[CACHE].get(key);
      const item = node.value; // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking

      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
      }

      item.now = now;
      item.maxAge = maxAge;
      item.value = value;
      this[LENGTH] += len - item.length;
      item.length = len;
      this.get(key);
      trim(this);
      return true;
    }

    const hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

    if (hit.length > this[MAX]) {
      if (this[DISPOSE]) this[DISPOSE](key, value);
      return false;
    }

    this[LENGTH] += hit.length;
    this[LRU_LIST].unshift(hit);
    this[CACHE].set(key, this[LRU_LIST].head);
    trim(this);
    return true;
  }

  has(key) {
    if (!this[CACHE].has(key)) return false;
    const hit = this[CACHE].get(key).value;
    return !isStale(this, hit);
  }

  get(key) {
    return get(this, key, true);
  }

  peek(key) {
    return get(this, key, false);
  }

  pop() {
    const node = this[LRU_LIST].tail;
    if (!node) return null;
    del(this, node);
    return node.value;
  }

  del(key) {
    del(this, this[CACHE].get(key));
  }

  load(arr) {
    // reset the cache
    this.reset();
    const now = Date.now(); // A previous serialized cache has the most recent items first

    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l];
      const expiresAt = hit.e || 0;
      if (expiresAt === 0) // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v);else {
        const maxAge = expiresAt - now; // dont add already expired items

        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge);
        }
      }
    }
  }

  prune() {
    this[CACHE].forEach((value, key) => get(this, key, false));
  }

}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key);

  if (node) {
    const hit = node.value;

    if (isStale(self, hit)) {
      del(self, node);
      if (!self[ALLOW_STALE]) return undefined;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }

    return hit.value;
  }
};

const isStale = (self, hit) => {
  if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
  const diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev;
      del(self, walker);
      walker = prev;
    }
  }
};

const del = (self, node) => {
  if (node) {
    const hit = node.value;
    if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE].delete(hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

class Entry {
  constructor(key, value, length, now, maxAge) {
    this.key = key;
    this.value = value;
    this.length = length;
    this.now = now;
    this.maxAge = maxAge || 0;
  }

}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value;

  if (isStale(self, hit)) {
    del(self, node);
    if (!self[ALLOW_STALE]) hit = undefined;
  }

  if (hit) fn.call(thisp, hit.value, hit.key, self);
};

var lruCache = LRUCache;

// hoisted class for cyclic dependency
class Range {
  constructor(range, options) {
    options = parseOptions_1(options);

    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }

    if (range instanceof comparator) {
      // just put it in the set and return
      this.raw = range.value;
      this.set = [[range]];
      this.format();
      return this;
    }

    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

    this.raw = range;
    this.set = range.split(/\s*\|\|\s*/) // map the range to a 2d array of comparators
    .map(range => this.parseRange(range.trim())) // throw out any comparator lists that are empty
    // this generally means that it was not a valid range, which is allowed
    // in loose mode, but will still throw if the WHOLE range is invalid.
    .filter(c => c.length);

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`);
    } // if we have any that are not the null set, throw out null sets.


    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0];
      this.set = this.set.filter(c => !isNullSet(c[0]));
      if (this.set.length === 0) this.set = [first];else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c];
            break;
          }
        }
      }
    }

    this.format();
  }

  format() {
    this.range = this.set.map(comps => {
      return comps.join(' ').trim();
    }).join('||').trim();
    return this.range;
  }

  toString() {
    return this.range;
  }

  parseRange(range) {
    range = range.trim(); // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.

    const memoOpts = Object.keys(this.options).join(',');
    const memoKey = `parseRange:${memoOpts}:${range}`;
    const cached = cache.get(memoKey);
    if (cached) return cached;
    const loose = this.options.loose; // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

    const hr = loose ? re$1[t$1.HYPHENRANGELOOSE] : re$1[t$1.HYPHENRANGE];
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
    debug_1('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

    range = range.replace(re$1[t$1.COMPARATORTRIM], comparatorTrimReplace);
    debug_1('comparator trim', range, re$1[t$1.COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

    range = range.replace(re$1[t$1.TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

    range = range.replace(re$1[t$1.CARETTRIM], caretTrimReplace); // normalize spaces

    range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re$1[t$1.COMPARATORLOOSE] : re$1[t$1.COMPARATOR];
    const rangeList = range.split(' ').map(comp => parseComparator(comp, this.options)).join(' ').split(/\s+/) // >=0.0.0 is equivalent to *
    .map(comp => replaceGTE0(comp, this.options)) // in loose mode, throw out any that are not valid comparators
    .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true).map(comp => new comparator(comp, this.options)); // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once

    rangeList.length;
    const rangeMap = new Map();

    for (const comp of rangeList) {
      if (isNullSet(comp)) return [comp];
      rangeMap.set(comp.value, comp);
    }

    if (rangeMap.size > 1 && rangeMap.has('')) rangeMap.delete('');
    const result = [...rangeMap.values()];
    cache.set(memoKey, result);
    return result;
  }

  intersects(range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required');
    }

    return this.set.some(thisComparators => {
      return isSatisfiable(thisComparators, options) && range.set.some(rangeComparators => {
        return isSatisfiable(rangeComparators, options) && thisComparators.every(thisComparator => {
          return rangeComparators.every(rangeComparator => {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  } // if ANY of the sets match ALL of its comparators, then pass


  test(version) {
    if (!version) {
      return false;
    }

    if (typeof version === 'string') {
      try {
        version = new semver$1(version, this.options);
      } catch (er) {
        return false;
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true;
      }
    }

    return false;
  }

}

var range = Range;



const cache = new lruCache({
  max: 1000
});









const {
  re: re$1,
  t: t$1,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = re_1;

const isNullSet = c => c.value === '<0.0.0-0';

const isAny = c => c.value === ''; // take a set of comparators and determine whether there
// exists a version which can satisfy it


const isSatisfiable = (comparators, options) => {
  let result = true;
  const remainingComparators = comparators.slice();
  let testComparator = remainingComparators.pop();

  while (result && remainingComparators.length) {
    result = remainingComparators.every(otherComparator => {
      return testComparator.intersects(otherComparator, options);
    });
    testComparator = remainingComparators.pop();
  }

  return result;
}; // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


const parseComparator = (comp, options) => {
  debug_1('comp', comp, options);
  comp = replaceCarets(comp, options);
  debug_1('caret', comp);
  comp = replaceTildes(comp, options);
  debug_1('tildes', comp);
  comp = replaceXRanges(comp, options);
  debug_1('xrange', comp);
  comp = replaceStars(comp, options);
  debug_1('stars', comp);
  return comp;
};

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'; // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0


const replaceTildes = (comp, options) => comp.trim().split(/\s+/).map(comp => {
  return replaceTilde(comp, options);
}).join(' ');

const replaceTilde = (comp, options) => {
  const r = options.loose ? re$1[t$1.TILDELOOSE] : re$1[t$1.TILDE];
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1('tilde', comp, _, M, m, p, pr);
    let ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
    } else if (pr) {
      debug_1('replaceTilde pr', pr);
      ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
    }

    debug_1('tilde return', ret);
    return ret;
  });
}; // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0


const replaceCarets = (comp, options) => comp.trim().split(/\s+/).map(comp => {
  return replaceCaret(comp, options);
}).join(' ');

const replaceCaret = (comp, options) => {
  debug_1('caret', comp, options);
  const r = options.loose ? re$1[t$1.CARETLOOSE] : re$1[t$1.CARET];
  const z = options.includePrerelease ? '-0' : '';
  return comp.replace(r, (_, M, m, p, pr) => {
    debug_1('caret', comp, _, M, m, p, pr);
    let ret;

    if (isX(M)) {
      ret = '';
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
      }
    } else if (pr) {
      debug_1('replaceCaret pr', pr);

      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
      }
    } else {
      debug_1('no pr');

      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
        } else {
          ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
        }
      } else {
        ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
      }
    }

    debug_1('caret return', ret);
    return ret;
  });
};

const replaceXRanges = (comp, options) => {
  debug_1('replaceXRanges', comp, options);
  return comp.split(/\s+/).map(comp => {
    return replaceXRange(comp, options);
  }).join(' ');
};

const replaceXRange = (comp, options) => {
  comp = comp.trim();
  const r = options.loose ? re$1[t$1.XRANGELOOSE] : re$1[t$1.XRANGE];
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug_1('xRange', comp, ret, gtlt, M, m, p, pr);
    const xM = isX(M);
    const xm = xM || isX(m);
    const xp = xm || isX(p);
    const anyX = xp;

    if (gtlt === '=' && anyX) {
      gtlt = '';
    } // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value


    pr = options.includePrerelease ? '-0' : '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0;
      }

      p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';

        if (xm) {
          M = +M + 1;
        } else {
          m = +m + 1;
        }
      }

      if (gtlt === '<') pr = '-0';
      ret = `${gtlt + M}.${m}.${p}${pr}`;
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
    }

    debug_1('xRange return', ret);
    return ret;
  });
}; // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


const replaceStars = (comp, options) => {
  debug_1('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re$1[t$1.STAR], '');
};

const replaceGTE0 = (comp, options) => {
  debug_1('replaceGTE0', comp, options);
  return comp.trim().replace(re$1[options.includePrerelease ? t$1.GTE0PRE : t$1.GTE0], '');
}; // This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0


const hyphenReplace = incPr => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = '';
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
  } else if (fpr) {
    from = `>=${from}`;
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`;
  }

  if (isX(tM)) {
    to = '';
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`;
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`;
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`;
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`;
  } else {
    to = `<=${to}`;
  }

  return `${from} ${to}`.trim();
};

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false;
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug_1(set[i].semver);

      if (set[i].semver === comparator.ANY) {
        continue;
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver;

        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
          return true;
        }
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
};

const ANY$2 = Symbol('SemVer ANY'); // hoisted class for cyclic dependency

class Comparator {
  static get ANY() {
    return ANY$2;
  }

  constructor(comp, options) {
    options = parseOptions_1(options);

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }

    debug_1('comparator', comp, options);
    this.options = options;
    this.loose = !!options.loose;
    this.parse(comp);

    if (this.semver === ANY$2) {
      this.value = '';
    } else {
      this.value = this.operator + this.semver.version;
    }

    debug_1('comp', this);
  }

  parse(comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
    const m = comp.match(r);

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`);
    }

    this.operator = m[1] !== undefined ? m[1] : '';

    if (this.operator === '=') {
      this.operator = '';
    } // if it literally is just '>' or '' then allow anything.


    if (!m[2]) {
      this.semver = ANY$2;
    } else {
      this.semver = new semver$1(m[2], this.options.loose);
    }
  }

  toString() {
    return this.value;
  }

  test(version) {
    debug_1('Comparator.test', version, this.options.loose);

    if (this.semver === ANY$2 || version === ANY$2) {
      return true;
    }

    if (typeof version === 'string') {
      try {
        version = new semver$1(version, this.options);
      } catch (er) {
        return false;
      }
    }

    return cmp_1(version, this.operator, this.semver, this.options);
  }

  intersects(comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required');
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true;
      }

      return new range(comp.value, options).test(this.value);
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true;
      }

      return new range(this.value, options).test(comp.semver);
    }

    const sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    const sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    const sameSemVer = this.semver.version === comp.semver.version;
    const differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    const oppositeDirectionsLessThan = cmp_1(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    const oppositeDirectionsGreaterThan = cmp_1(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  }

}

var comparator = Comparator;



const {
  re,
  t
} = re_1;

const satisfies = (version, range$1, options) => {
  try {
    range$1 = new range(range$1, options);
  } catch (er) {
    return false;
  }

  return range$1.test(version);
};

var satisfies_1 = satisfies;

// Mostly just for testing and legacy API reasons


const toComparators = (range$1, options) => new range(range$1, options).set.map(comp => comp.map(c => c.value).join(' ').trim().split(' '));

var toComparators_1 = toComparators;

const maxSatisfying = (versions, range$1, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;

  try {
    rangeObj = new range(range$1, options);
  } catch (er) {
    return null;
  }

  versions.forEach(v => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new semver$1(max, options);
      }
    }
  });
  return max;
};

var maxSatisfying_1 = maxSatisfying;

const minSatisfying = (versions, range$1, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;

  try {
    rangeObj = new range(range$1, options);
  } catch (er) {
    return null;
  }

  versions.forEach(v => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new semver$1(min, options);
      }
    }
  });
  return min;
};

var minSatisfying_1 = minSatisfying;

const minVersion = (range$1, loose) => {
  range$1 = new range(range$1, loose);
  let minver = new semver$1('0.0.0');

  if (range$1.test(minver)) {
    return minver;
  }

  minver = new semver$1('0.0.0-0');

  if (range$1.test(minver)) {
    return minver;
  }

  minver = null;

  for (let i = 0; i < range$1.set.length; ++i) {
    const comparators = range$1.set[i];
    let setMin = null;
    comparators.forEach(comparator => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new semver$1(comparator.semver.version);

      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }

          compver.raw = compver.format();

        /* fallthrough */

        case '':
        case '>=':
          if (!setMin || gt_1(compver, setMin)) {
            setMin = compver;
          }

          break;

        case '<':
        case '<=':
          /* Ignore maximum versions */
          break;

        /* istanbul ignore next */

        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`);
      }
    });
    if (setMin && (!minver || gt_1(minver, setMin))) minver = setMin;
  }

  if (minver && range$1.test(minver)) {
    return minver;
  }

  return null;
};

var minVersion_1 = minVersion;

const validRange = (range$1, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new range(range$1, options).range || '*';
  } catch (er) {
    return null;
  }
};

var valid = validRange;

const {
  ANY: ANY$1
} = comparator;













const outside = (version, range$1, hilo, options) => {
  version = new semver$1(version, options);
  range$1 = new range(range$1, options);
  let gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt_1;
      ltefn = lte_1;
      ltfn = lt_1;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt_1;
      ltefn = gte_1;
      ltfn = gt_1;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisfies the range it is not outside


  if (satisfies_1(version, range$1, options)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  for (let i = 0; i < range$1.set.length; ++i) {
    const comparators = range$1.set[i];
    let high = null;
    let low = null;
    comparators.forEach(comparator$1 => {
      if (comparator$1.semver === ANY$1) {
        comparator$1 = new comparator('>=0.0.0');
      }

      high = high || comparator$1;
      low = low || comparator$1;

      if (gtfn(comparator$1.semver, high.semver, options)) {
        high = comparator$1;
      } else if (ltfn(comparator$1.semver, low.semver, options)) {
        low = comparator$1;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return false;
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }

  return true;
};

var outside_1 = outside;

// Determine if version is greater than all the versions possible in the range.


const gtr = (version, range, options) => outside_1(version, range, '>', options);

var gtr_1 = gtr;

// Determine if version is less than all the versions possible in the range


const ltr = (version, range, options) => outside_1(version, range, '<', options);

var ltr_1 = ltr;

const intersects = (r1, r2, options) => {
  r1 = new range(r1, options);
  r2 = new range(r2, options);
  return r1.intersects(r2);
};

var intersects_1 = intersects;

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.




var simplify = (versions, range, options) => {
  const set = [];
  let min = null;
  let prev = null;
  const v = versions.sort((a, b) => compare_1(a, b, options));

  for (const version of v) {
    const included = satisfies_1(version, range, options);

    if (included) {
      prev = version;
      if (!min) min = version;
    } else {
      if (prev) {
        set.push([min, prev]);
      }

      prev = null;
      min = null;
    }
  }

  if (min) set.push([min, null]);
  const ranges = [];

  for (const [min, max] of set) {
    if (min === max) ranges.push(min);else if (!max && min === v[0]) ranges.push('*');else if (!max) ranges.push(`>=${min}`);else if (min === v[0]) ranges.push(`<=${max}`);else ranges.push(`${min} - ${max}`);
  }

  const simplified = ranges.join(' || ');
  const original = typeof range.raw === 'string' ? range.raw : String(range);
  return simplified.length < original.length ? simplified : range;
};

const {
  ANY
} = comparator;



 // Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true


const subset = (sub, dom, options = {}) => {
  if (sub === dom) return true;
  sub = new range(sub, options);
  dom = new range(dom, options);
  let sawNonNull = false;

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) continue OUTER;
    } // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.


    if (sawNonNull) return false;
  }

  return true;
};

const simpleSubset = (sub, dom, options) => {
  if (sub === dom) return true;

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) return true;else if (options.includePrerelease) sub = [new comparator('>=0.0.0-0')];else sub = [new comparator('>=0.0.0')];
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) return true;else dom = [new comparator('>=0.0.0')];
  }

  const eqSet = new Set();
  let gt, lt;

  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=') gt = higherGT(gt, c, options);else if (c.operator === '<' || c.operator === '<=') lt = lowerLT(lt, c, options);else eqSet.add(c.semver);
  }

  if (eqSet.size > 1) return null;
  let gtltComp;

  if (gt && lt) {
    gtltComp = compare_1(gt.semver, lt.semver, options);
    if (gtltComp > 0) return null;else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) return null;
  } // will iterate one or zero times


  for (const eq of eqSet) {
    if (gt && !satisfies_1(eq, String(gt), options)) return null;
    if (lt && !satisfies_1(eq, String(lt), options)) return null;

    for (const c of dom) {
      if (!satisfies_1(eq, String(c), options)) return false;
    }

    return true;
  }

  let higher, lower;
  let hasDomLT, hasDomGT; // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset

  let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
  let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false; // exception: <1.2.3-0 is the same as <1.2.3

  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';

    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }

      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options);
        if (higher === c && higher !== gt) return false;
      } else if (gt.operator === '>=' && !satisfies_1(gt.semver, String(c), options)) return false;
    }

    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }

      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options);
        if (lower === c && lower !== lt) return false;
      } else if (lt.operator === '<=' && !satisfies_1(lt.semver, String(c), options)) return false;
    }

    if (!c.operator && (lt || gt) && gtltComp !== 0) return false;
  } // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0


  if (gt && hasDomLT && !lt && gtltComp !== 0) return false;
  if (lt && hasDomGT && !gt && gtltComp !== 0) return false; // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple

  if (needDomGTPre || needDomLTPre) return false;
  return true;
}; // >=1.2.3 is lower than >1.2.3


const higherGT = (a, b, options) => {
  if (!a) return b;
  const comp = compare_1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
}; // <=1.2.3 is higher than <1.2.3


const lowerLT = (a, b, options) => {
  if (!a) return b;
  const comp = compare_1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};

var subset_1 = subset;

// just pre-load all the stuff that index.js lazily exports


var semver = {
  re: re_1.re,
  src: re_1.src,
  tokens: re_1.t,
  SEMVER_SPEC_VERSION: constants$3.SEMVER_SPEC_VERSION,
  SemVer: semver$1,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers,
  parse: parse_1$2,
  valid: valid_1,
  clean: clean_1,
  inc: inc_1,
  diff: diff_1,
  major: major_1,
  minor: minor_1,
  patch: patch_1,
  prerelease: prerelease_1,
  compare: compare_1,
  rcompare: rcompare_1,
  compareLoose: compareLoose_1,
  compareBuild: compareBuild_1,
  sort: sort_1,
  rsort: rsort_1,
  gt: gt_1,
  lt: lt_1,
  eq: eq_1,
  neq: neq_1,
  gte: gte_1,
  lte: lte_1,
  cmp: cmp_1,
  coerce: coerce_1,
  Comparator: comparator,
  Range: range,
  satisfies: satisfies_1,
  toComparators: toComparators_1,
  maxSatisfying: maxSatisfying_1,
  minSatisfying: minSatisfying_1,
  minVersion: minVersion_1,
  validRange: valid,
  outside: outside_1,
  gtr: gtr_1,
  ltr: ltr_1,
  intersects: intersects_1,
  simplifyRange: simplify,
  subset: subset_1
};

var cleanSemver = version => {
  if (typeof version !== "string") {
    throw new TypeError(`Expected a string, got ${typeof version}`);
  }

  return semver.clean(version, {
    loose: true,
    includePrerelease: true
  }) || semver.valid(semver.coerce(version));
};

var toSemver = (versions, options) => {
  options = {
    includePrereleases: true,
    clean: true,
    ...options
  };
  let sortedVersions = versions.map(version => version.trim()).map(version => [version, cleanSemver(version)]).filter(version => version[1]).sort((a, b) => semver$2.rcompare(a[1], b[1]));

  if (!options.includePrereleases) {
    sortedVersions = sortedVersions.filter(version => semver$2.prerelease(version[1]) === null);
  }

  if (options.clean) {
    return sortedVersions.map(version => version[1]);
  }

  return sortedVersions.map(([version]) => version);
};

var latestSemver = versions => toSemver(versions, {
  includePrereleases: false
})[0];

function fileExists(filePath) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , fs$2.promises.access(filePath, fs$2.constants.F_OK)];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 3];

        case 2:
          _a.sent();
          return [2
          /*return*/
          , false];

        case 3:
          return [2
          /*return*/
          , true];
      }
    });
  });
}

function getDotApmFolder() {
  return __awaiter(this, void 0, void 0, function () {
    var configPath, dotApmPath;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          configPath = path.dirname(atom.config.getUserConfigPath());
          dotApmPath = path.join(configPath, '.apm') || null;
          return [4
          /*yield*/
          , fileExists(dotApmPath)];

        case 1:
          return [2
          /*return*/
          , _a.sent() ? dotApmPath : null];
      }
    });
  });
}

function isDirectory$1(filePath) {
  return __awaiter(this, void 0, void 0, function () {
    var stat;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , fs$2.promises.lstat(filePath)];

        case 1:
          stat = _a.sent();
          return [3
          /*break*/
          , 3];

        case 2:
          _a.sent();
          return [2
          /*return*/
          , false];

        case 3:
          return [2
          /*return*/
          , stat.isDirectory()];
      }
    });
  });
}

function splitVersions(versions) {
  var latestVersion = latestSemver(versions);
  var index = versions.indexOf(latestVersion);
  versions.splice(index, 1);
  return [latestVersion, versions];
}

var arrayUnion = (...arguments_) => {
  return [...new Set([].concat(...arguments_))];
};

/*
 * merge2
 * https://github.com/teambition/merge2
 *
 * Copyright (c) 2014-2020 Teambition
 * Licensed under the MIT license.
 */



const PassThrough = stream_1__default['default'].PassThrough;
const slice = Array.prototype.slice;
var merge2_1 = merge2;

function merge2() {
  const streamsQueue = [];
  const args = slice.call(arguments);
  let merging = false;
  let options = args[args.length - 1];

  if (options && !Array.isArray(options) && options.pipe == null) {
    args.pop();
  } else {
    options = {};
  }

  const doEnd = options.end !== false;
  const doPipeError = options.pipeError === true;

  if (options.objectMode == null) {
    options.objectMode = true;
  }

  if (options.highWaterMark == null) {
    options.highWaterMark = 64 * 1024;
  }

  const mergedStream = PassThrough(options);

  function addStream() {
    for (let i = 0, len = arguments.length; i < len; i++) {
      streamsQueue.push(pauseStreams(arguments[i], options));
    }

    mergeStream();
    return this;
  }

  function mergeStream() {
    if (merging) {
      return;
    }

    merging = true;
    let streams = streamsQueue.shift();

    if (!streams) {
      process.nextTick(endStream);
      return;
    }

    if (!Array.isArray(streams)) {
      streams = [streams];
    }

    let pipesCount = streams.length + 1;

    function next() {
      if (--pipesCount > 0) {
        return;
      }

      merging = false;
      mergeStream();
    }

    function pipe(stream) {
      function onend() {
        stream.removeListener('merge2UnpipeEnd', onend);
        stream.removeListener('end', onend);

        if (doPipeError) {
          stream.removeListener('error', onerror);
        }

        next();
      }

      function onerror(err) {
        mergedStream.emit('error', err);
      } // skip ended stream


      if (stream._readableState.endEmitted) {
        return next();
      }

      stream.on('merge2UnpipeEnd', onend);
      stream.on('end', onend);

      if (doPipeError) {
        stream.on('error', onerror);
      }

      stream.pipe(mergedStream, {
        end: false
      }); // compatible for old stream

      stream.resume();
    }

    for (let i = 0; i < streams.length; i++) {
      pipe(streams[i]);
    }

    next();
  }

  function endStream() {
    merging = false; // emit 'queueDrain' when all streams merged.

    mergedStream.emit('queueDrain');

    if (doEnd) {
      mergedStream.end();
    }
  }

  mergedStream.setMaxListeners(0);
  mergedStream.add = addStream;
  mergedStream.on('unpipe', function (stream) {
    stream.emit('merge2UnpipeEnd');
  });

  if (args.length) {
    addStream.apply(null, args);
  }

  return mergedStream;
} // check and pause streams for pipe.


function pauseStreams(streams, options) {
  if (!Array.isArray(streams)) {
    // Backwards-compat with old-style streams
    if (!streams._readableState && streams.pipe) {
      streams = streams.pipe(PassThrough(options));
    }

    if (!streams._readableState || !streams.pause || !streams.pipe) {
      throw new Error('Only readable stream can be merged.');
    }

    streams.pause();
  } else {
    for (let i = 0, len = streams.length; i < len; i++) {
      streams[i] = pauseStreams(streams[i], options);
    }
  }

  return streams;
}

var array = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitWhen = exports.flatten = void 0;

function flatten(items) {
  return items.reduce((collection, item) => [].concat(collection, item), []);
}

exports.flatten = flatten;

function splitWhen(items, predicate) {
  const result = [[]];
  let groupIndex = 0;

  for (const item of items) {
    if (predicate(item)) {
      groupIndex++;
      result[groupIndex] = [];
    } else {
      result[groupIndex].push(item);
    }
  }

  return result;
}

exports.splitWhen = splitWhen;
});

var errno = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEnoentCodeError = void 0;

function isEnoentCodeError(error) {
  return error.code === 'ENOENT';
}

exports.isEnoentCodeError = isEnoentCodeError;
});

var fs$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDirentFromStats = void 0;

class DirentFromStats {
  constructor(name, stats) {
    this.name = name;
    this.isBlockDevice = stats.isBlockDevice.bind(stats);
    this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
    this.isDirectory = stats.isDirectory.bind(stats);
    this.isFIFO = stats.isFIFO.bind(stats);
    this.isFile = stats.isFile.bind(stats);
    this.isSocket = stats.isSocket.bind(stats);
    this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
  }

}

function createDirentFromStats(name, stats) {
  return new DirentFromStats(name, stats);
}

exports.createDirentFromStats = createDirentFromStats;
});

var path_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeLeadingDotSegment = exports.escape = exports.makeAbsolute = exports.unixify = void 0;



const LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2; // ./ or .\\

const UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
/**
 * Designed to work only with simple paths: `dir\\file`.
 */

function unixify(filepath) {
  return filepath.replace(/\\/g, '/');
}

exports.unixify = unixify;

function makeAbsolute(cwd, filepath) {
  return path__default['default'].resolve(cwd, filepath);
}

exports.makeAbsolute = makeAbsolute;

function escape(pattern) {
  return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, '\\$2');
}

exports.escape = escape;

function removeLeadingDotSegment(entry) {
  // We do not use `startsWith` because this is 10x slower than current implementation for some cases.
  // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
  if (entry.charAt(0) === '.') {
    const secondCharactery = entry.charAt(1);

    if (secondCharactery === '/' || secondCharactery === '\\') {
      return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
    }
  }

  return entry;
}

exports.removeLeadingDotSegment = removeLeadingDotSegment;
});

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtglob = function isExtglob(str) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  var match;

  while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
    if (match[2]) return true;
    str = str.slice(match.index + match[0].length);
  }

  return false;
};

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

var chars = {
  '{': '}',
  '(': ')',
  '[': ']'
};
var strictRegex = /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
var relaxedRegex = /\\(.)|(^!|[*?{}()[\]]|\(\?)/;

var isGlob = function isGlob(str, options) {
  if (typeof str !== 'string' || str === '') {
    return false;
  }

  if (isExtglob(str)) {
    return true;
  }

  var regex = strictRegex;
  var match; // optionally relax regex

  if (options && options.strict === false) {
    regex = relaxedRegex;
  }

  while (match = regex.exec(str)) {
    if (match[2]) return true;
    var idx = match.index + match[0].length; // if an open bracket/brace/paren is escaped,
    // set the index to the next closing character

    var open = match[1];
    var close = open ? chars[open] : null;

    if (open && close) {
      var n = str.indexOf(close, idx);

      if (n !== -1) {
        idx = n + 1;
      }
    }

    str = str.slice(idx);
  }

  return false;
};

var pathPosixDirname = path__default['default'].posix.dirname;

var isWin32 = require$$1__default['default'].platform() === 'win32';
var slash$1 = '/';
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby$1 = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 * @returns {string}
 */

var globParent = function globParent(str, opts) {
  var options = Object.assign({
    flipBackslashes: true
  }, opts); // flip windows path separators

  if (options.flipBackslashes && isWin32 && str.indexOf(slash$1) < 0) {
    str = str.replace(backslash, slash$1);
  } // special case for strings ending in enclosure containing path separator


  if (enclosure.test(str)) {
    str += slash$1;
  } // preserves full path in case of trailing path separator


  str += 'a'; // remove path parts that are globby

  do {
    str = pathPosixDirname(str);
  } while (isGlob(str) || globby$1.test(str)); // remove escape chars and return result


  return str.replace(escaped, '$1');
};

var utils$3 = createCommonjsModule(function (module, exports) {

exports.isInteger = num => {
  if (typeof num === 'number') {
    return Number.isInteger(num);
  }

  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isInteger(Number(num));
  }

  return false;
};
/**
 * Find a node of the given type
 */


exports.find = (node, type) => node.nodes.find(node => node.type === type);
/**
 * Find a node of the given type
 */


exports.exceedsLimit = (min, max, step = 1, limit) => {
  if (limit === false) return false;
  if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
  return (Number(max) - Number(min)) / Number(step) >= limit;
};
/**
 * Escape the given node with '\\' before node.value
 */


exports.escapeNode = (block, n = 0, type) => {
  let node = block.nodes[n];
  if (!node) return;

  if (type && node.type === type || node.type === 'open' || node.type === 'close') {
    if (node.escaped !== true) {
      node.value = '\\' + node.value;
      node.escaped = true;
    }
  }
};
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */


exports.encloseBrace = node => {
  if (node.type !== 'brace') return false;

  if (node.commas >> 0 + node.ranges >> 0 === 0) {
    node.invalid = true;
    return true;
  }

  return false;
};
/**
 * Returns true if a brace node is invalid.
 */


exports.isInvalidBrace = block => {
  if (block.type !== 'brace') return false;
  if (block.invalid === true || block.dollar) return true;

  if (block.commas >> 0 + block.ranges >> 0 === 0) {
    block.invalid = true;
    return true;
  }

  if (block.open !== true || block.close !== true) {
    block.invalid = true;
    return true;
  }

  return false;
};
/**
 * Returns true if a node is an open or close node
 */


exports.isOpenOrClose = node => {
  if (node.type === 'open' || node.type === 'close') {
    return true;
  }

  return node.open === true || node.close === true;
};
/**
 * Reduce an array of text nodes.
 */


exports.reduce = nodes => nodes.reduce((acc, node) => {
  if (node.type === 'text') acc.push(node.value);
  if (node.type === 'range') node.type = 'text';
  return acc;
}, []);
/**
 * Flatten an array
 */


exports.flatten = (...args) => {
  const result = [];

  const flat = arr => {
    for (let i = 0; i < arr.length; i++) {
      let ele = arr[i];
      Array.isArray(ele) ? flat(ele) : ele !== void 0 && result.push(ele);
    }

    return result;
  };

  flat(args);
  return result;
};
});

var stringify$1 = (ast, options = {}) => {
  let stringify = (node, parent = {}) => {
    let invalidBlock = options.escapeInvalid && utils$3.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let output = '';

    if (node.value) {
      if ((invalidBlock || invalidNode) && utils$3.isOpenOrClose(node)) {
        return '\\' + node.value;
      }

      return node.value;
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes) {
      for (let child of node.nodes) {
        output += stringify(child);
      }
    }

    return output;
  };

  return stringify(ast);
};

/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */

var isNumber$1 = function (num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }

  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }

  return false;
};

/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */



const toRegexRange = (min, max, options) => {
  if (isNumber$1(min) === false) {
    throw new TypeError('toRegexRange: expected the first argument to be a number');
  }

  if (max === void 0 || min === max) {
    return String(min);
  }

  if (isNumber$1(max) === false) {
    throw new TypeError('toRegexRange: expected the second argument to be a number.');
  }

  let opts = {
    relaxZeros: true,
    ...options
  };

  if (typeof opts.strictZeros === 'boolean') {
    opts.relaxZeros = opts.strictZeros === false;
  }

  let relax = String(opts.relaxZeros);
  let shorthand = String(opts.shorthand);
  let capture = String(opts.capture);
  let wrap = String(opts.wrap);
  let cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;

  if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
    return toRegexRange.cache[cacheKey].result;
  }

  let a = Math.min(min, max);
  let b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    let result = min + '|' + max;

    if (opts.capture) {
      return `(${result})`;
    }

    if (opts.wrap === false) {
      return result;
    }

    return `(?:${result})`;
  }

  let isPadded = hasPadding(min) || hasPadding(max);
  let state = {
    min,
    max,
    a,
    b
  };
  let positives = [];
  let negatives = [];

  if (isPadded) {
    state.isPadded = isPadded;
    state.maxLen = String(state.max).length;
  }

  if (a < 0) {
    let newMin = b < 0 ? Math.abs(b) : 1;
    negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
    a = state.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, state, opts);
  }

  state.negatives = negatives;
  state.positives = positives;
  state.result = collatePatterns(negatives, positives);

  if (opts.capture === true) {
    state.result = `(${state.result})`;
  } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
    state.result = `(?:${state.result})`;
  }

  toRegexRange.cache[cacheKey] = state;
  return state.result;
};

function collatePatterns(neg, pos, options) {
  let onlyNegative = filterPatterns(neg, pos, '-', false) || [];
  let onlyPositive = filterPatterns(pos, neg, '', false) || [];
  let intersected = filterPatterns(neg, pos, '-?', true) || [];
  let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  let nines = 1;
  let zeros = 1;
  let stop = countNines(min, nines);
  let stops = new Set([max]);

  while (min <= stop && stop <= max) {
    stops.add(stop);
    nines += 1;
    stop = countNines(min, nines);
  }

  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops.add(stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops = [...stops];
  stops.sort(compare);
  return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */


function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return {
      pattern: start,
      count: [],
      digits: 0
    };
  }

  let zipped = zip(start, stop);
  let digits = zipped.length;
  let pattern = '';
  let count = 0;

  for (let i = 0; i < digits; i++) {
    let [startDigit, stopDigit] = zipped[i];

    if (startDigit === stopDigit) {
      pattern += startDigit;
    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit);
    } else {
      count++;
    }
  }

  if (count) {
    pattern += options.shorthand === true ? '\\d' : '[0-9]';
  }

  return {
    pattern,
    count: [count],
    digits
  };
}

function splitToPatterns(min, max, tok, options) {
  let ranges = splitToRanges(min, max);
  let tokens = [];
  let start = min;
  let prev;

  for (let i = 0; i < ranges.length; i++) {
    let max = ranges[i];
    let obj = rangeToPattern(String(start), String(max), options);
    let zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.count.length > 1) {
        prev.count.pop();
      }

      prev.count.push(obj.count[0]);
      prev.string = prev.pattern + toQuantifier(prev.count);
      start = max + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(max, tok, options);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.count);
    tokens.push(obj);
    start = max + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  let result = [];

  for (let ele of arr) {
    let {
      string
    } = ele; // only push if _both_ are negative...

    if (!intersection && !contains(comparison, 'string', string)) {
      result.push(prefix + string);
    } // or _both_ are positive


    if (intersection && contains(comparison, 'string', string)) {
      result.push(prefix + string);
    }
  }

  return result;
}
/**
 * Zip strings
 */


function zip(a, b) {
  let arr = [];

  for (let i = 0; i < a.length; i++) arr.push([a[i], b[i]]);

  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function contains(arr, key, val) {
  return arr.some(ele => ele[key] === val);
}

function countNines(min, len) {
  return Number(String(min).slice(0, -len) + '9'.repeat(len));
}

function countZeros(integer, zeros) {
  return integer - integer % Math.pow(10, zeros);
}

function toQuantifier(digits) {
  let [start = 0, stop = ''] = digits;

  if (stop || start > 1) {
    return `{${start + (stop ? ',' + stop : '')}}`;
  }

  return '';
}

function toCharacterClass(a, b, options) {
  return `[${a}${b - a === 1 ? '' : '-'}${b}]`;
}

function hasPadding(str) {
  return /^-?(0+)\d/.test(str);
}

function padZeros(value, tok, options) {
  if (!tok.isPadded) {
    return value;
  }

  let diff = Math.abs(tok.maxLen - String(value).length);
  let relax = options.relaxZeros !== false;

  switch (diff) {
    case 0:
      return '';

    case 1:
      return relax ? '0?' : '0';

    case 2:
      return relax ? '0{0,2}' : '00';

    default:
      {
        return relax ? `0{0,${diff}}` : `0{${diff}}`;
      }
  }
}
/**
 * Cache
 */


toRegexRange.cache = {};

toRegexRange.clearCache = () => toRegexRange.cache = {};
/**
 * Expose `toRegexRange`
 */


var toRegexRange_1 = toRegexRange;

/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */





const isObject$1 = val => val !== null && typeof val === 'object' && !Array.isArray(val);

const transform = toNumber => {
  return value => toNumber === true ? Number(value) : String(value);
};

const isValidValue = value => {
  return typeof value === 'number' || typeof value === 'string' && value !== '';
};

const isNumber = num => Number.isInteger(+num);

const zeros = input => {
  let value = `${input}`;
  let index = -1;
  if (value[0] === '-') value = value.slice(1);
  if (value === '0') return false;

  while (value[++index] === '0');

  return index > 0;
};

const stringify = (start, end, options) => {
  if (typeof start === 'string' || typeof end === 'string') {
    return true;
  }

  return options.stringify === true;
};

const pad = (input, maxLength, toNumber) => {
  if (maxLength > 0) {
    let dash = input[0] === '-' ? '-' : '';
    if (dash) input = input.slice(1);
    input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
  }

  if (toNumber === false) {
    return String(input);
  }

  return input;
};

const toMaxLen = (input, maxLength) => {
  let negative = input[0] === '-' ? '-' : '';

  if (negative) {
    input = input.slice(1);
    maxLength--;
  }

  while (input.length < maxLength) input = '0' + input;

  return negative ? '-' + input : input;
};

const toSequence = (parts, options) => {
  parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  let prefix = options.capture ? '' : '?:';
  let positives = '';
  let negatives = '';
  let result;

  if (parts.positives.length) {
    positives = parts.positives.join('|');
  }

  if (parts.negatives.length) {
    negatives = `-(${prefix}${parts.negatives.join('|')})`;
  }

  if (positives && negatives) {
    result = `${positives}|${negatives}`;
  } else {
    result = positives || negatives;
  }

  if (options.wrap) {
    return `(${prefix}${result})`;
  }

  return result;
};

const toRange = (a, b, isNumbers, options) => {
  if (isNumbers) {
    return toRegexRange_1(a, b, {
      wrap: false,
      ...options
    });
  }

  let start = String.fromCharCode(a);
  if (a === b) return start;
  let stop = String.fromCharCode(b);
  return `[${start}-${stop}]`;
};

const toRegex = (start, end, options) => {
  if (Array.isArray(start)) {
    let wrap = options.wrap === true;
    let prefix = options.capture ? '' : '?:';
    return wrap ? `(${prefix}${start.join('|')})` : start.join('|');
  }

  return toRegexRange_1(start, end, options);
};

const rangeError = (...args) => {
  return new RangeError('Invalid range arguments: ' + util__default['default'].inspect(...args));
};

const invalidRange = (start, end, options) => {
  if (options.strictRanges === true) throw rangeError([start, end]);
  return [];
};

const invalidStep = (step, options) => {
  if (options.strictRanges === true) {
    throw new TypeError(`Expected step "${step}" to be a number`);
  }

  return [];
};

const fillNumbers = (start, end, step = 1, options = {}) => {
  let a = Number(start);
  let b = Number(end);

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    if (options.strictRanges === true) throw rangeError([start, end]);
    return [];
  } // fix negative zero


  if (a === 0) a = 0;
  if (b === 0) b = 0;
  let descending = a > b;
  let startString = String(start);
  let endString = String(end);
  let stepString = String(step);
  step = Math.max(Math.abs(step), 1);
  let padded = zeros(startString) || zeros(endString) || zeros(stepString);
  let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
  let toNumber = padded === false && stringify(start, end, options) === false;
  let format = options.transform || transform(toNumber);

  if (options.toRegex && step === 1) {
    return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
  }

  let parts = {
    negatives: [],
    positives: []
  };

  let push = num => parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));

  let range = [];
  let index = 0;

  while (descending ? a >= b : a <= b) {
    if (options.toRegex === true && step > 1) {
      push(a);
    } else {
      range.push(pad(format(a, index), maxLen, toNumber));
    }

    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return step > 1 ? toSequence(parts, options) : toRegex(range, null, {
      wrap: false,
      ...options
    });
  }

  return range;
};

const fillLetters = (start, end, step = 1, options = {}) => {
  if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
    return invalidRange(start, end, options);
  }

  let format = options.transform || (val => String.fromCharCode(val));

  let a = `${start}`.charCodeAt(0);
  let b = `${end}`.charCodeAt(0);
  let descending = a > b;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  if (options.toRegex && step === 1) {
    return toRange(min, max, false, options);
  }

  let range = [];
  let index = 0;

  while (descending ? a >= b : a <= b) {
    range.push(format(a, index));
    a = descending ? a - step : a + step;
    index++;
  }

  if (options.toRegex === true) {
    return toRegex(range, null, {
      wrap: false,
      options
    });
  }

  return range;
};

const fill = (start, end, step, options = {}) => {
  if (end == null && isValidValue(start)) {
    return [start];
  }

  if (!isValidValue(start) || !isValidValue(end)) {
    return invalidRange(start, end, options);
  }

  if (typeof step === 'function') {
    return fill(start, end, 1, {
      transform: step
    });
  }

  if (isObject$1(step)) {
    return fill(start, end, 0, step);
  }

  let opts = { ...options
  };
  if (opts.capture === true) opts.wrap = true;
  step = step || opts.step || 1;

  if (!isNumber(step)) {
    if (step != null && !isObject$1(step)) return invalidStep(step, opts);
    return fill(start, end, 1, step);
  }

  if (isNumber(start) && isNumber(end)) {
    return fillNumbers(start, end, step, opts);
  }

  return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};

var fillRange = fill;

const compile = (ast, options = {}) => {
  let walk = (node, parent = {}) => {
    let invalidBlock = utils$3.isInvalidBrace(parent);
    let invalidNode = node.invalid === true && options.escapeInvalid === true;
    let invalid = invalidBlock === true || invalidNode === true;
    let prefix = options.escapeInvalid === true ? '\\' : '';
    let output = '';

    if (node.isOpen === true) {
      return prefix + node.value;
    }

    if (node.isClose === true) {
      return prefix + node.value;
    }

    if (node.type === 'open') {
      return invalid ? prefix + node.value : '(';
    }

    if (node.type === 'close') {
      return invalid ? prefix + node.value : ')';
    }

    if (node.type === 'comma') {
      return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
    }

    if (node.value) {
      return node.value;
    }

    if (node.nodes && node.ranges > 0) {
      let args = utils$3.reduce(node.nodes);
      let range = fillRange(...args, { ...options,
        wrap: false,
        toRegex: true
      });

      if (range.length !== 0) {
        return args.length > 1 && range.length > 1 ? `(${range})` : range;
      }
    }

    if (node.nodes) {
      for (let child of node.nodes) {
        output += walk(child, node);
      }
    }

    return output;
  };

  return walk(ast);
};

var compile_1 = compile;

const append = (queue = '', stash = '', enclose = false) => {
  let result = [];
  queue = [].concat(queue);
  stash = [].concat(stash);
  if (!stash.length) return queue;

  if (!queue.length) {
    return enclose ? utils$3.flatten(stash).map(ele => `{${ele}}`) : stash;
  }

  for (let item of queue) {
    if (Array.isArray(item)) {
      for (let value of item) {
        result.push(append(value, stash, enclose));
      }
    } else {
      for (let ele of stash) {
        if (enclose === true && typeof ele === 'string') ele = `{${ele}}`;
        result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
      }
    }
  }

  return utils$3.flatten(result);
};

const expand = (ast, options = {}) => {
  let rangeLimit = options.rangeLimit === void 0 ? 1000 : options.rangeLimit;

  let walk = (node, parent = {}) => {
    node.queue = [];
    let p = parent;
    let q = parent.queue;

    while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
      p = p.parent;
      q = p.queue;
    }

    if (node.invalid || node.dollar) {
      q.push(append(q.pop(), stringify$1(node, options)));
      return;
    }

    if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
      q.push(append(q.pop(), ['{}']));
      return;
    }

    if (node.nodes && node.ranges > 0) {
      let args = utils$3.reduce(node.nodes);

      if (utils$3.exceedsLimit(...args, options.step, rangeLimit)) {
        throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
      }

      let range = fillRange(...args, options);

      if (range.length === 0) {
        range = stringify$1(node, options);
      }

      q.push(append(q.pop(), range));
      node.nodes = [];
      return;
    }

    let enclose = utils$3.encloseBrace(node);
    let queue = node.queue;
    let block = node;

    while (block.type !== 'brace' && block.type !== 'root' && block.parent) {
      block = block.parent;
      queue = block.queue;
    }

    for (let i = 0; i < node.nodes.length; i++) {
      let child = node.nodes[i];

      if (child.type === 'comma' && node.type === 'brace') {
        if (i === 1) queue.push('');
        queue.push('');
        continue;
      }

      if (child.type === 'close') {
        q.push(append(q.pop(), queue, enclose));
        continue;
      }

      if (child.value && child.type !== 'open') {
        queue.push(append(queue.pop(), child.value));
        continue;
      }

      if (child.nodes) {
        walk(child, node);
      }
    }

    return queue;
  };

  return utils$3.flatten(walk(ast));
};

var expand_1 = expand;

var constants$2 = {
  MAX_LENGTH: 1024 * 64,
  // Digits
  CHAR_0: '0',

  /* 0 */
  CHAR_9: '9',

  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 'A',

  /* A */
  CHAR_LOWERCASE_A: 'a',

  /* a */
  CHAR_UPPERCASE_Z: 'Z',

  /* Z */
  CHAR_LOWERCASE_Z: 'z',

  /* z */
  CHAR_LEFT_PARENTHESES: '(',

  /* ( */
  CHAR_RIGHT_PARENTHESES: ')',

  /* ) */
  CHAR_ASTERISK: '*',

  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: '&',

  /* & */
  CHAR_AT: '@',

  /* @ */
  CHAR_BACKSLASH: '\\',

  /* \ */
  CHAR_BACKTICK: '`',

  /* ` */
  CHAR_CARRIAGE_RETURN: '\r',

  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: '^',

  /* ^ */
  CHAR_COLON: ':',

  /* : */
  CHAR_COMMA: ',',

  /* , */
  CHAR_DOLLAR: '$',

  /* . */
  CHAR_DOT: '.',

  /* . */
  CHAR_DOUBLE_QUOTE: '"',

  /* " */
  CHAR_EQUAL: '=',

  /* = */
  CHAR_EXCLAMATION_MARK: '!',

  /* ! */
  CHAR_FORM_FEED: '\f',

  /* \f */
  CHAR_FORWARD_SLASH: '/',

  /* / */
  CHAR_HASH: '#',

  /* # */
  CHAR_HYPHEN_MINUS: '-',

  /* - */
  CHAR_LEFT_ANGLE_BRACKET: '<',

  /* < */
  CHAR_LEFT_CURLY_BRACE: '{',

  /* { */
  CHAR_LEFT_SQUARE_BRACKET: '[',

  /* [ */
  CHAR_LINE_FEED: '\n',

  /* \n */
  CHAR_NO_BREAK_SPACE: '\u00A0',

  /* \u00A0 */
  CHAR_PERCENT: '%',

  /* % */
  CHAR_PLUS: '+',

  /* + */
  CHAR_QUESTION_MARK: '?',

  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: '>',

  /* > */
  CHAR_RIGHT_CURLY_BRACE: '}',

  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: ']',

  /* ] */
  CHAR_SEMICOLON: ';',

  /* ; */
  CHAR_SINGLE_QUOTE: '\'',

  /* ' */
  CHAR_SPACE: ' ',

  /*   */
  CHAR_TAB: '\t',

  /* \t */
  CHAR_UNDERSCORE: '_',

  /* _ */
  CHAR_VERTICAL_LINE: '|',

  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF'
  /* \uFEFF */

};

/**
 * Constants
 */


const {
  MAX_LENGTH: MAX_LENGTH$1,
  CHAR_BACKSLASH,

  /* \ */
  CHAR_BACKTICK,

  /* ` */
  CHAR_COMMA: CHAR_COMMA$1,

  /* , */
  CHAR_DOT: CHAR_DOT$1,

  /* . */
  CHAR_LEFT_PARENTHESES: CHAR_LEFT_PARENTHESES$1,

  /* ( */
  CHAR_RIGHT_PARENTHESES: CHAR_RIGHT_PARENTHESES$1,

  /* ) */
  CHAR_LEFT_CURLY_BRACE: CHAR_LEFT_CURLY_BRACE$1,

  /* { */
  CHAR_RIGHT_CURLY_BRACE: CHAR_RIGHT_CURLY_BRACE$1,

  /* } */
  CHAR_LEFT_SQUARE_BRACKET: CHAR_LEFT_SQUARE_BRACKET$1,

  /* [ */
  CHAR_RIGHT_SQUARE_BRACKET: CHAR_RIGHT_SQUARE_BRACKET$1,

  /* ] */
  CHAR_DOUBLE_QUOTE,

  /* " */
  CHAR_SINGLE_QUOTE,

  /* ' */
  CHAR_NO_BREAK_SPACE,
  CHAR_ZERO_WIDTH_NOBREAK_SPACE
} = constants$2;
/**
 * parse
 */


const parse$1 = (input, options = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  let opts = options || {};
  let max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH$1, opts.maxLength) : MAX_LENGTH$1;

  if (input.length > max) {
    throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
  }

  let ast = {
    type: 'root',
    input,
    nodes: []
  };
  let stack = [ast];
  let block = ast;
  let prev = ast;
  let brackets = 0;
  let length = input.length;
  let index = 0;
  let depth = 0;
  let value;
  /**
   * Helpers
   */

  const advance = () => input[index++];

  const push = node => {
    if (node.type === 'text' && prev.type === 'dot') {
      prev.type = 'text';
    }

    if (prev && prev.type === 'text' && node.type === 'text') {
      prev.value += node.value;
      return;
    }

    block.nodes.push(node);
    node.parent = block;
    node.prev = prev;
    prev = node;
    return node;
  };

  push({
    type: 'bos'
  });

  while (index < length) {
    block = stack[stack.length - 1];
    value = advance();
    /**
     * Invalid chars
     */

    if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
      continue;
    }
    /**
     * Escaped chars
     */


    if (value === CHAR_BACKSLASH) {
      push({
        type: 'text',
        value: (options.keepEscaping ? value : '') + advance()
      });
      continue;
    }
    /**
     * Right square bracket (literal): ']'
     */


    if (value === CHAR_RIGHT_SQUARE_BRACKET$1) {
      push({
        type: 'text',
        value: '\\' + value
      });
      continue;
    }
    /**
     * Left square bracket: '['
     */


    if (value === CHAR_LEFT_SQUARE_BRACKET$1) {
      brackets++;
      let next;

      while (index < length && (next = advance())) {
        value += next;

        if (next === CHAR_LEFT_SQUARE_BRACKET$1) {
          brackets++;
          continue;
        }

        if (next === CHAR_BACKSLASH) {
          value += advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET$1) {
          brackets--;

          if (brackets === 0) {
            break;
          }
        }
      }

      push({
        type: 'text',
        value
      });
      continue;
    }
    /**
     * Parentheses
     */


    if (value === CHAR_LEFT_PARENTHESES$1) {
      block = push({
        type: 'paren',
        nodes: []
      });
      stack.push(block);
      push({
        type: 'text',
        value
      });
      continue;
    }

    if (value === CHAR_RIGHT_PARENTHESES$1) {
      if (block.type !== 'paren') {
        push({
          type: 'text',
          value
        });
        continue;
      }

      block = stack.pop();
      push({
        type: 'text',
        value
      });
      block = stack[stack.length - 1];
      continue;
    }
    /**
     * Quotes: '|"|`
     */


    if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
      let open = value;
      let next;

      if (options.keepQuotes !== true) {
        value = '';
      }

      while (index < length && (next = advance())) {
        if (next === CHAR_BACKSLASH) {
          value += next + advance();
          continue;
        }

        if (next === open) {
          if (options.keepQuotes === true) value += next;
          break;
        }

        value += next;
      }

      push({
        type: 'text',
        value
      });
      continue;
    }
    /**
     * Left curly brace: '{'
     */


    if (value === CHAR_LEFT_CURLY_BRACE$1) {
      depth++;
      let dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
      let brace = {
        type: 'brace',
        open: true,
        close: false,
        dollar,
        depth,
        commas: 0,
        ranges: 0,
        nodes: []
      };
      block = push(brace);
      stack.push(block);
      push({
        type: 'open',
        value
      });
      continue;
    }
    /**
     * Right curly brace: '}'
     */


    if (value === CHAR_RIGHT_CURLY_BRACE$1) {
      if (block.type !== 'brace') {
        push({
          type: 'text',
          value
        });
        continue;
      }

      let type = 'close';
      block = stack.pop();
      block.close = true;
      push({
        type,
        value
      });
      depth--;
      block = stack[stack.length - 1];
      continue;
    }
    /**
     * Comma: ','
     */


    if (value === CHAR_COMMA$1 && depth > 0) {
      if (block.ranges > 0) {
        block.ranges = 0;
        let open = block.nodes.shift();
        block.nodes = [open, {
          type: 'text',
          value: stringify$1(block)
        }];
      }

      push({
        type: 'comma',
        value
      });
      block.commas++;
      continue;
    }
    /**
     * Dot: '.'
     */


    if (value === CHAR_DOT$1 && depth > 0 && block.commas === 0) {
      let siblings = block.nodes;

      if (depth === 0 || siblings.length === 0) {
        push({
          type: 'text',
          value
        });
        continue;
      }

      if (prev.type === 'dot') {
        block.range = [];
        prev.value += value;
        prev.type = 'range';

        if (block.nodes.length !== 3 && block.nodes.length !== 5) {
          block.invalid = true;
          block.ranges = 0;
          prev.type = 'text';
          continue;
        }

        block.ranges++;
        block.args = [];
        continue;
      }

      if (prev.type === 'range') {
        siblings.pop();
        let before = siblings[siblings.length - 1];
        before.value += prev.value + value;
        prev = before;
        block.ranges--;
        continue;
      }

      push({
        type: 'dot',
        value
      });
      continue;
    }
    /**
     * Text
     */


    push({
      type: 'text',
      value
    });
  } // Mark imbalanced braces and brackets as invalid


  do {
    block = stack.pop();

    if (block.type !== 'root') {
      block.nodes.forEach(node => {
        if (!node.nodes) {
          if (node.type === 'open') node.isOpen = true;
          if (node.type === 'close') node.isClose = true;
          if (!node.nodes) node.type = 'text';
          node.invalid = true;
        }
      }); // get the location of the block on parent.nodes (block's siblings)

      let parent = stack[stack.length - 1];
      let index = parent.nodes.indexOf(block); // replace the (invalid) block with it's nodes

      parent.nodes.splice(index, 1, ...block.nodes);
    }
  } while (stack.length > 0);

  push({
    type: 'eos'
  });
  return ast;
};

var parse_1$1 = parse$1;

/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */


const braces = (input, options = {}) => {
  let output = [];

  if (Array.isArray(input)) {
    for (let pattern of input) {
      let result = braces.create(pattern, options);

      if (Array.isArray(result)) {
        output.push(...result);
      } else {
        output.push(result);
      }
    }
  } else {
    output = [].concat(braces.create(input, options));
  }

  if (options && options.expand === true && options.nodupes === true) {
    output = [...new Set(output)];
  }

  return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */


braces.parse = (input, options = {}) => parse_1$1(input, options);
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.stringify = (input, options = {}) => {
  if (typeof input === 'string') {
    return stringify$1(braces.parse(input, options), options);
  }

  return stringify$1(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.compile = (input, options = {}) => {
  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }

  return compile_1(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.expand = (input, options = {}) => {
  if (typeof input === 'string') {
    input = braces.parse(input, options);
  }

  let result = expand_1(input, options); // filter out empty strings if specified

  if (options.noempty === true) {
    result = result.filter(Boolean);
  } // filter out duplicates if specified


  if (options.nodupes === true) {
    result = [...new Set(result)];
  }

  return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */


braces.create = (input, options = {}) => {
  if (input === '' || input.length < 3) {
    return [input];
  }

  return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
};
/**
 * Expose "braces"
 */


var braces_1 = braces;

const WIN_SLASH = '\\\\/';
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
/**
 * Posix glob regex
 */

const DOT_LITERAL = '\\.';
const PLUS_LITERAL = '\\+';
const QMARK_LITERAL = '\\?';
const SLASH_LITERAL = '\\/';
const ONE_CHAR = '(?=.)';
const QMARK = '[^/]';
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const POSIX_CHARS = {
  DOT_LITERAL,
  PLUS_LITERAL,
  QMARK_LITERAL,
  SLASH_LITERAL,
  ONE_CHAR,
  QMARK,
  END_ANCHOR,
  DOTS_SLASH,
  NO_DOT,
  NO_DOTS,
  NO_DOT_SLASH,
  NO_DOTS_SLASH,
  QMARK_NO_DOT,
  STAR,
  START_ANCHOR
};
/**
 * Windows glob regex
 */

const WINDOWS_CHARS = { ...POSIX_CHARS,
  SLASH_LITERAL: `[${WIN_SLASH}]`,
  QMARK: WIN_NO_SLASH,
  STAR: `${WIN_NO_SLASH}*?`,
  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
  NO_DOT: `(?!${DOT_LITERAL})`,
  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
/**
 * POSIX Bracket Regex
 */

const POSIX_REGEX_SOURCE$1 = {
  alnum: 'a-zA-Z0-9',
  alpha: 'a-zA-Z',
  ascii: '\\x00-\\x7F',
  blank: ' \\t',
  cntrl: '\\x00-\\x1F\\x7F',
  digit: '0-9',
  graph: '\\x21-\\x7E',
  lower: 'a-z',
  print: '\\x20-\\x7E ',
  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
  space: ' \\t\\r\\n\\v\\f',
  upper: 'A-Z',
  word: 'A-Za-z0-9_',
  xdigit: 'A-Fa-f0-9'
};
var constants$1 = {
  MAX_LENGTH: 1024 * 64,
  POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
  // regular expressions
  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
  // Replace globs with equivalent patterns to reduce parsing time.
  REPLACEMENTS: {
    '***': '*',
    '**/**': '**',
    '**/**/**': '**'
  },
  // Digits
  CHAR_0: 48,

  /* 0 */
  CHAR_9: 57,

  /* 9 */
  // Alphabet chars.
  CHAR_UPPERCASE_A: 65,

  /* A */
  CHAR_LOWERCASE_A: 97,

  /* a */
  CHAR_UPPERCASE_Z: 90,

  /* Z */
  CHAR_LOWERCASE_Z: 122,

  /* z */
  CHAR_LEFT_PARENTHESES: 40,

  /* ( */
  CHAR_RIGHT_PARENTHESES: 41,

  /* ) */
  CHAR_ASTERISK: 42,

  /* * */
  // Non-alphabetic chars.
  CHAR_AMPERSAND: 38,

  /* & */
  CHAR_AT: 64,

  /* @ */
  CHAR_BACKWARD_SLASH: 92,

  /* \ */
  CHAR_CARRIAGE_RETURN: 13,

  /* \r */
  CHAR_CIRCUMFLEX_ACCENT: 94,

  /* ^ */
  CHAR_COLON: 58,

  /* : */
  CHAR_COMMA: 44,

  /* , */
  CHAR_DOT: 46,

  /* . */
  CHAR_DOUBLE_QUOTE: 34,

  /* " */
  CHAR_EQUAL: 61,

  /* = */
  CHAR_EXCLAMATION_MARK: 33,

  /* ! */
  CHAR_FORM_FEED: 12,

  /* \f */
  CHAR_FORWARD_SLASH: 47,

  /* / */
  CHAR_GRAVE_ACCENT: 96,

  /* ` */
  CHAR_HASH: 35,

  /* # */
  CHAR_HYPHEN_MINUS: 45,

  /* - */
  CHAR_LEFT_ANGLE_BRACKET: 60,

  /* < */
  CHAR_LEFT_CURLY_BRACE: 123,

  /* { */
  CHAR_LEFT_SQUARE_BRACKET: 91,

  /* [ */
  CHAR_LINE_FEED: 10,

  /* \n */
  CHAR_NO_BREAK_SPACE: 160,

  /* \u00A0 */
  CHAR_PERCENT: 37,

  /* % */
  CHAR_PLUS: 43,

  /* + */
  CHAR_QUESTION_MARK: 63,

  /* ? */
  CHAR_RIGHT_ANGLE_BRACKET: 62,

  /* > */
  CHAR_RIGHT_CURLY_BRACE: 125,

  /* } */
  CHAR_RIGHT_SQUARE_BRACKET: 93,

  /* ] */
  CHAR_SEMICOLON: 59,

  /* ; */
  CHAR_SINGLE_QUOTE: 39,

  /* ' */
  CHAR_SPACE: 32,

  /*   */
  CHAR_TAB: 9,

  /* \t */
  CHAR_UNDERSCORE: 95,

  /* _ */
  CHAR_VERTICAL_LINE: 124,

  /* | */
  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,

  /* \uFEFF */
  SEP: path__default['default'].sep,

  /**
   * Create EXTGLOB_CHARS
   */
  extglobChars(chars) {
    return {
      '!': {
        type: 'negate',
        open: '(?:(?!(?:',
        close: `))${chars.STAR})`
      },
      '?': {
        type: 'qmark',
        open: '(?:',
        close: ')?'
      },
      '+': {
        type: 'plus',
        open: '(?:',
        close: ')+'
      },
      '*': {
        type: 'star',
        open: '(?:',
        close: ')*'
      },
      '@': {
        type: 'at',
        open: '(?:',
        close: ')'
      }
    };
  },

  /**
   * Create GLOB_CHARS
   */
  globChars(win32) {
    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
  }

};

var utils$2 = createCommonjsModule(function (module, exports) {



const win32 = process.platform === 'win32';

const {
  REGEX_BACKSLASH,
  REGEX_REMOVE_BACKSLASH,
  REGEX_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_GLOBAL
} = constants$1;

exports.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);

exports.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);

exports.isRegexChar = str => str.length === 1 && exports.hasRegexChars(str);

exports.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');

exports.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

exports.removeBackslashes = str => {
  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
    return match === '\\' ? '' : match;
  });
};

exports.supportsLookbehinds = () => {
  const segs = process.version.slice(1).split('.').map(Number);

  if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
    return true;
  }

  return false;
};

exports.isWindows = options => {
  if (options && typeof options.windows === 'boolean') {
    return options.windows;
  }

  return win32 === true || path__default['default'].sep === '\\';
};

exports.escapeLast = (input, char, lastIdx) => {
  const idx = input.lastIndexOf(char, lastIdx);
  if (idx === -1) return input;
  if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};

exports.removePrefix = (input, state = {}) => {
  let output = input;

  if (output.startsWith('./')) {
    output = output.slice(2);
    state.prefix = './';
  }

  return output;
};

exports.wrapOutput = (input, state = {}, options = {}) => {
  const prepend = options.contains ? '' : '^';
  const append = options.contains ? '' : '$';
  let output = `${prepend}(?:${input})${append}`;

  if (state.negated === true) {
    output = `(?:^(?!${output}).*$)`;
  }

  return output;
};
});

const {
  CHAR_ASTERISK,

  /* * */
  CHAR_AT,

  /* @ */
  CHAR_BACKWARD_SLASH,

  /* \ */
  CHAR_COMMA,

  /* , */
  CHAR_DOT,

  /* . */
  CHAR_EXCLAMATION_MARK,

  /* ! */
  CHAR_FORWARD_SLASH,

  /* / */
  CHAR_LEFT_CURLY_BRACE,

  /* { */
  CHAR_LEFT_PARENTHESES,

  /* ( */
  CHAR_LEFT_SQUARE_BRACKET,

  /* [ */
  CHAR_PLUS,

  /* + */
  CHAR_QUESTION_MARK,

  /* ? */
  CHAR_RIGHT_CURLY_BRACE,

  /* } */
  CHAR_RIGHT_PARENTHESES,

  /* ) */
  CHAR_RIGHT_SQUARE_BRACKET
  /* ] */

} = constants$1;

const isPathSeparator = code => {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};

const depth = token => {
  if (token.isPrefix !== true) {
    token.depth = token.isGlobstar ? Infinity : 1;
  }
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), and `negated` (true if the path starts with `!`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */


const scan = (input, options) => {
  const opts = options || {};
  const length = input.length - 1;
  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
  const slashes = [];
  const tokens = [];
  const parts = [];
  let str = input;
  let index = -1;
  let start = 0;
  let lastIndex = 0;
  let isBrace = false;
  let isBracket = false;
  let isGlob = false;
  let isExtglob = false;
  let isGlobstar = false;
  let braceEscaped = false;
  let backslashes = false;
  let negated = false;
  let finished = false;
  let braces = 0;
  let prev;
  let code;
  let token = {
    value: '',
    depth: 0,
    isGlob: false
  };

  const eos = () => index >= length;

  const peek = () => str.charCodeAt(index + 1);

  const advance = () => {
    prev = code;
    return str.charCodeAt(++index);
  };

  while (index < length) {
    code = advance();
    let next;

    if (code === CHAR_BACKWARD_SLASH) {
      backslashes = token.backslashes = true;
      code = advance();

      if (code === CHAR_LEFT_CURLY_BRACE) {
        braceEscaped = true;
      }

      continue;
    }

    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
      braces++;

      while (eos() !== true && (code = advance())) {
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          continue;
        }

        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (braceEscaped !== true && code === CHAR_COMMA) {
          isBrace = token.isBrace = true;
          isGlob = token.isGlob = true;
          finished = true;

          if (scanToEnd === true) {
            continue;
          }

          break;
        }

        if (code === CHAR_RIGHT_CURLY_BRACE) {
          braces--;

          if (braces === 0) {
            braceEscaped = false;
            isBrace = token.isBrace = true;
            finished = true;
            break;
          }
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_FORWARD_SLASH) {
      slashes.push(index);
      tokens.push(token);
      token = {
        value: '',
        depth: 0,
        isGlob: false
      };
      if (finished === true) continue;

      if (prev === CHAR_DOT && index === start + 1) {
        start += 2;
        continue;
      }

      lastIndex = index + 1;
      continue;
    }

    if (opts.noext !== true) {
      const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;

      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
        isGlob = token.isGlob = true;
        isExtglob = token.isExtglob = true;
        finished = true;

        if (scanToEnd === true) {
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              code = advance();
              continue;
            }

            if (code === CHAR_RIGHT_PARENTHESES) {
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }

          continue;
        }

        break;
      }
    }

    if (code === CHAR_ASTERISK) {
      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_QUESTION_MARK) {
      isGlob = token.isGlob = true;
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (code === CHAR_LEFT_SQUARE_BRACKET) {
      while (eos() !== true && (next = advance())) {
        if (next === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          advance();
          continue;
        }

        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
          isBracket = token.isBracket = true;
          isGlob = token.isGlob = true;
          finished = true;
          break;
        }
      }

      if (scanToEnd === true) {
        continue;
      }

      break;
    }

    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
      negated = token.negated = true;
      start++;
      continue;
    }

    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
      isGlob = token.isGlob = true;

      if (scanToEnd === true) {
        while (eos() !== true && (code = advance())) {
          if (code === CHAR_LEFT_PARENTHESES) {
            backslashes = token.backslashes = true;
            code = advance();
            continue;
          }

          if (code === CHAR_RIGHT_PARENTHESES) {
            finished = true;
            break;
          }
        }

        continue;
      }

      break;
    }

    if (isGlob === true) {
      finished = true;

      if (scanToEnd === true) {
        continue;
      }

      break;
    }
  }

  if (opts.noext === true) {
    isExtglob = false;
    isGlob = false;
  }

  let base = str;
  let prefix = '';
  let glob = '';

  if (start > 0) {
    prefix = str.slice(0, start);
    str = str.slice(start);
    lastIndex -= start;
  }

  if (base && isGlob === true && lastIndex > 0) {
    base = str.slice(0, lastIndex);
    glob = str.slice(lastIndex);
  } else if (isGlob === true) {
    base = '';
    glob = str;
  } else {
    base = str;
  }

  if (base && base !== '' && base !== '/' && base !== str) {
    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
      base = base.slice(0, -1);
    }
  }

  if (opts.unescape === true) {
    if (glob) glob = utils$2.removeBackslashes(glob);

    if (base && backslashes === true) {
      base = utils$2.removeBackslashes(base);
    }
  }

  const state = {
    prefix,
    input,
    start,
    base,
    glob,
    isBrace,
    isBracket,
    isGlob,
    isExtglob,
    isGlobstar,
    negated
  };

  if (opts.tokens === true) {
    state.maxDepth = 0;

    if (!isPathSeparator(code)) {
      tokens.push(token);
    }

    state.tokens = tokens;
  }

  if (opts.parts === true || opts.tokens === true) {
    let prevIndex;

    for (let idx = 0; idx < slashes.length; idx++) {
      const n = prevIndex ? prevIndex + 1 : start;
      const i = slashes[idx];
      const value = input.slice(n, i);

      if (opts.tokens) {
        if (idx === 0 && start !== 0) {
          tokens[idx].isPrefix = true;
          tokens[idx].value = prefix;
        } else {
          tokens[idx].value = value;
        }

        depth(tokens[idx]);
        state.maxDepth += tokens[idx].depth;
      }

      if (idx !== 0 || value !== '') {
        parts.push(value);
      }

      prevIndex = i;
    }

    if (prevIndex && prevIndex + 1 < input.length) {
      const value = input.slice(prevIndex + 1);
      parts.push(value);

      if (opts.tokens) {
        tokens[tokens.length - 1].value = value;
        depth(tokens[tokens.length - 1]);
        state.maxDepth += tokens[tokens.length - 1].depth;
      }
    }

    state.slashes = slashes;
    state.parts = parts;
  }

  return state;
};

var scan_1 = scan;

/**
 * Constants
 */


const {
  MAX_LENGTH,
  POSIX_REGEX_SOURCE,
  REGEX_NON_SPECIAL_CHARS,
  REGEX_SPECIAL_CHARS_BACKREF,
  REPLACEMENTS
} = constants$1;
/**
 * Helpers
 */

const expandRange = (args, options) => {
  if (typeof options.expandRange === 'function') {
    return options.expandRange(...args, options);
  }

  args.sort();
  const value = `[${args.join('-')}]`;

  try {
    /* eslint-disable-next-line no-new */
    new RegExp(value);
  } catch (ex) {
    return args.map(v => utils$2.escapeRegex(v)).join('..');
  }

  return value;
};
/**
 * Create the message for a syntax error
 */


const syntaxError = (type, char) => {
  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */


const parse = (input, options) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string');
  }

  input = REPLACEMENTS[input] || input;
  const opts = { ...options
  };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  let len = input.length;

  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  const bos = {
    type: 'bos',
    value: '',
    output: opts.prepend || ''
  };
  const tokens = [bos];
  const capture = opts.capture ? '' : '?:';
  const win32 = utils$2.isWindows(options); // create constants based on platform, for windows or posix

  const PLATFORM_CHARS = constants$1.globChars(win32);
  const EXTGLOB_CHARS = constants$1.extglobChars(PLATFORM_CHARS);
  const {
    DOT_LITERAL,
    PLUS_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
  } = PLATFORM_CHARS;

  const globstar = opts => {
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const nodot = opts.dot ? '' : NO_DOT;
  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
  let star = opts.bash === true ? globstar(opts) : STAR;

  if (opts.capture) {
    star = `(${star})`;
  } // minimatch options support


  if (typeof opts.noext === 'boolean') {
    opts.noextglob = opts.noext;
  }

  const state = {
    input,
    index: -1,
    start: 0,
    dot: opts.dot === true,
    consumed: '',
    output: '',
    prefix: '',
    backtrack: false,
    negated: false,
    brackets: 0,
    braces: 0,
    parens: 0,
    quotes: 0,
    globstar: false,
    tokens
  };
  input = utils$2.removePrefix(input, state);
  len = input.length;
  const extglobs = [];
  const braces = [];
  const stack = [];
  let prev = bos;
  let value;
  /**
   * Tokenizing helpers
   */

  const eos = () => state.index === len - 1;

  const peek = state.peek = (n = 1) => input[state.index + n];

  const advance = state.advance = () => input[++state.index];

  const remaining = () => input.slice(state.index + 1);

  const consume = (value = '', num = 0) => {
    state.consumed += value;
    state.index += num;
  };

  const append = token => {
    state.output += token.output != null ? token.output : token.value;
    consume(token.value);
  };

  const negate = () => {
    let count = 1;

    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
      advance();
      state.start++;
      count++;
    }

    if (count % 2 === 0) {
      return false;
    }

    state.negated = true;
    state.start++;
    return true;
  };

  const increment = type => {
    state[type]++;
    stack.push(type);
  };

  const decrement = type => {
    state[type]--;
    stack.pop();
  };
  /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */


  const push = tok => {
    if (prev.type === 'globstar') {
      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
      const isExtglob = tok.extglob === true || extglobs.length && (tok.type === 'pipe' || tok.type === 'paren');

      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
        state.output = state.output.slice(0, -prev.output.length);
        prev.type = 'star';
        prev.value = '*';
        prev.output = star;
        state.output += prev.output;
      }
    }

    if (extglobs.length && tok.type !== 'paren' && !EXTGLOB_CHARS[tok.value]) {
      extglobs[extglobs.length - 1].inner += tok.value;
    }

    if (tok.value || tok.output) append(tok);

    if (prev && prev.type === 'text' && tok.type === 'text') {
      prev.value += tok.value;
      prev.output = (prev.output || '') + tok.value;
      return;
    }

    tok.prev = prev;
    tokens.push(tok);
    prev = tok;
  };

  const extglobOpen = (type, value) => {
    const token = { ...EXTGLOB_CHARS[value],
      conditions: 1,
      inner: ''
    };
    token.prev = prev;
    token.parens = state.parens;
    token.output = state.output;
    const output = (opts.capture ? '(' : '') + token.open;
    increment('parens');
    push({
      type,
      value,
      output: state.output ? '' : ONE_CHAR
    });
    push({
      type: 'paren',
      extglob: true,
      value: advance(),
      output
    });
    extglobs.push(token);
  };

  const extglobClose = token => {
    let output = token.close + (opts.capture ? ')' : '');

    if (token.type === 'negate') {
      let extglobStar = star;

      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
        extglobStar = globstar(opts);
      }

      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
        output = token.close = `)$))${extglobStar}`;
      }

      if (token.prev.type === 'bos') {
        state.negatedExtglob = true;
      }
    }

    push({
      type: 'paren',
      extglob: true,
      value,
      output
    });
    decrement('parens');
  };
  /**
   * Fast paths
   */


  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
    let backslashes = false;
    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
      if (first === '\\') {
        backslashes = true;
        return m;
      }

      if (first === '?') {
        if (esc) {
          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
        }

        if (index === 0) {
          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
        }

        return QMARK.repeat(chars.length);
      }

      if (first === '.') {
        return DOT_LITERAL.repeat(chars.length);
      }

      if (first === '*') {
        if (esc) {
          return esc + first + (rest ? star : '');
        }

        return star;
      }

      return esc ? m : `\\${m}`;
    });

    if (backslashes === true) {
      if (opts.unescape === true) {
        output = output.replace(/\\/g, '');
      } else {
        output = output.replace(/\\+/g, m => {
          return m.length % 2 === 0 ? '\\\\' : m ? '\\' : '';
        });
      }
    }

    if (output === input && opts.contains === true) {
      state.output = input;
      return state;
    }

    state.output = utils$2.wrapOutput(output, state, options);
    return state;
  }
  /**
   * Tokenize input until we reach end-of-string
   */


  while (!eos()) {
    value = advance();

    if (value === '\u0000') {
      continue;
    }
    /**
     * Escaped characters
     */


    if (value === '\\') {
      const next = peek();

      if (next === '/' && opts.bash !== true) {
        continue;
      }

      if (next === '.' || next === ';') {
        continue;
      }

      if (!next) {
        value += '\\';
        push({
          type: 'text',
          value
        });
        continue;
      } // collapse slashes to reduce potential for exploits


      const match = /^\\+/.exec(remaining());
      let slashes = 0;

      if (match && match[0].length > 2) {
        slashes = match[0].length;
        state.index += slashes;

        if (slashes % 2 !== 0) {
          value += '\\';
        }
      }

      if (opts.unescape === true) {
        value = advance() || '';
      } else {
        value += advance() || '';
      }

      if (state.brackets === 0) {
        push({
          type: 'text',
          value
        });
        continue;
      }
    }
    /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */


    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
      if (opts.posix !== false && value === ':') {
        const inner = prev.value.slice(1);

        if (inner.includes('[')) {
          prev.posix = true;

          if (inner.includes(':')) {
            const idx = prev.value.lastIndexOf('[');
            const pre = prev.value.slice(0, idx);
            const rest = prev.value.slice(idx + 2);
            const posix = POSIX_REGEX_SOURCE[rest];

            if (posix) {
              prev.value = pre + posix;
              state.backtrack = true;
              advance();

              if (!bos.output && tokens.indexOf(prev) === 1) {
                bos.output = ONE_CHAR;
              }

              continue;
            }
          }
        }
      }

      if (value === '[' && peek() !== ':' || value === '-' && peek() === ']') {
        value = `\\${value}`;
      }

      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
        value = `\\${value}`;
      }

      if (opts.posix === true && value === '!' && prev.value === '[') {
        value = '^';
      }

      prev.value += value;
      append({
        value
      });
      continue;
    }
    /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */


    if (state.quotes === 1 && value !== '"') {
      value = utils$2.escapeRegex(value);
      prev.value += value;
      append({
        value
      });
      continue;
    }
    /**
     * Double quotes
     */


    if (value === '"') {
      state.quotes = state.quotes === 1 ? 0 : 1;

      if (opts.keepQuotes === true) {
        push({
          type: 'text',
          value
        });
      }

      continue;
    }
    /**
     * Parentheses
     */


    if (value === '(') {
      increment('parens');
      push({
        type: 'paren',
        value
      });
      continue;
    }

    if (value === ')') {
      if (state.parens === 0 && opts.strictBrackets === true) {
        throw new SyntaxError(syntaxError('opening', '('));
      }

      const extglob = extglobs[extglobs.length - 1];

      if (extglob && state.parens === extglob.parens + 1) {
        extglobClose(extglobs.pop());
        continue;
      }

      push({
        type: 'paren',
        value,
        output: state.parens ? ')' : '\\)'
      });
      decrement('parens');
      continue;
    }
    /**
     * Square brackets
     */


    if (value === '[') {
      if (opts.nobracket === true || !remaining().includes(']')) {
        if (opts.nobracket !== true && opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('closing', ']'));
        }

        value = `\\${value}`;
      } else {
        increment('brackets');
      }

      push({
        type: 'bracket',
        value
      });
      continue;
    }

    if (value === ']') {
      if (opts.nobracket === true || prev && prev.type === 'bracket' && prev.value.length === 1) {
        push({
          type: 'text',
          value,
          output: `\\${value}`
        });
        continue;
      }

      if (state.brackets === 0) {
        if (opts.strictBrackets === true) {
          throw new SyntaxError(syntaxError('opening', '['));
        }

        push({
          type: 'text',
          value,
          output: `\\${value}`
        });
        continue;
      }

      decrement('brackets');
      const prevValue = prev.value.slice(1);

      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
        value = `/${value}`;
      }

      prev.value += value;
      append({
        value
      }); // when literal brackets are explicitly disabled
      // assume we should match with a regex character class

      if (opts.literalBrackets === false || utils$2.hasRegexChars(prevValue)) {
        continue;
      }

      const escaped = utils$2.escapeRegex(prev.value);
      state.output = state.output.slice(0, -prev.value.length); // when literal brackets are explicitly enabled
      // assume we should escape the brackets to match literal characters

      if (opts.literalBrackets === true) {
        state.output += escaped;
        prev.value = escaped;
        continue;
      } // when the user specifies nothing, try to match both


      prev.value = `(${capture}${escaped}|${prev.value})`;
      state.output += prev.value;
      continue;
    }
    /**
     * Braces
     */


    if (value === '{' && opts.nobrace !== true) {
      increment('braces');
      const open = {
        type: 'brace',
        value,
        output: '(',
        outputIndex: state.output.length,
        tokensIndex: state.tokens.length
      };
      braces.push(open);
      push(open);
      continue;
    }

    if (value === '}') {
      const brace = braces[braces.length - 1];

      if (opts.nobrace === true || !brace) {
        push({
          type: 'text',
          value,
          output: value
        });
        continue;
      }

      let output = ')';

      if (brace.dots === true) {
        const arr = tokens.slice();
        const range = [];

        for (let i = arr.length - 1; i >= 0; i--) {
          tokens.pop();

          if (arr[i].type === 'brace') {
            break;
          }

          if (arr[i].type !== 'dots') {
            range.unshift(arr[i].value);
          }
        }

        output = expandRange(range, opts);
        state.backtrack = true;
      }

      if (brace.comma !== true && brace.dots !== true) {
        const out = state.output.slice(0, brace.outputIndex);
        const toks = state.tokens.slice(brace.tokensIndex);
        brace.value = brace.output = '\\{';
        value = output = '\\}';
        state.output = out;

        for (const t of toks) {
          state.output += t.output || t.value;
        }
      }

      push({
        type: 'brace',
        value,
        output
      });
      decrement('braces');
      braces.pop();
      continue;
    }
    /**
     * Pipes
     */


    if (value === '|') {
      if (extglobs.length > 0) {
        extglobs[extglobs.length - 1].conditions++;
      }

      push({
        type: 'text',
        value
      });
      continue;
    }
    /**
     * Commas
     */


    if (value === ',') {
      let output = value;
      const brace = braces[braces.length - 1];

      if (brace && stack[stack.length - 1] === 'braces') {
        brace.comma = true;
        output = '|';
      }

      push({
        type: 'comma',
        value,
        output
      });
      continue;
    }
    /**
     * Slashes
     */


    if (value === '/') {
      // if the beginning of the glob is "./", advance the start
      // to the current index, and don't add the "./" characters
      // to the state. This greatly simplifies lookbehinds when
      // checking for BOS characters like "!" and "." (not "./")
      if (prev.type === 'dot' && state.index === state.start + 1) {
        state.start = state.index + 1;
        state.consumed = '';
        state.output = '';
        tokens.pop();
        prev = bos; // reset "prev" to the first token

        continue;
      }

      push({
        type: 'slash',
        value,
        output: SLASH_LITERAL
      });
      continue;
    }
    /**
     * Dots
     */


    if (value === '.') {
      if (state.braces > 0 && prev.type === 'dot') {
        if (prev.value === '.') prev.output = DOT_LITERAL;
        const brace = braces[braces.length - 1];
        prev.type = 'dots';
        prev.output += value;
        prev.value += value;
        brace.dots = true;
        continue;
      }

      if (state.braces + state.parens === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
        push({
          type: 'text',
          value,
          output: DOT_LITERAL
        });
        continue;
      }

      push({
        type: 'dot',
        value,
        output: DOT_LITERAL
      });
      continue;
    }
    /**
     * Question marks
     */


    if (value === '?') {
      const isGroup = prev && prev.value === '(';

      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('qmark', value);
        continue;
      }

      if (prev && prev.type === 'paren') {
        const next = peek();
        let output = value;

        if (next === '<' && !utils$2.supportsLookbehinds()) {
          throw new Error('Node.js v10 or higher is required for regex lookbehinds');
        }

        if (prev.value === '(' && !/[!=<:]/.test(next) || next === '<' && !/<([!=]|\w+>)/.test(remaining())) {
          output = `\\${value}`;
        }

        push({
          type: 'text',
          value,
          output
        });
        continue;
      }

      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
        push({
          type: 'qmark',
          value,
          output: QMARK_NO_DOT
        });
        continue;
      }

      push({
        type: 'qmark',
        value,
        output: QMARK
      });
      continue;
    }
    /**
     * Exclamation
     */


    if (value === '!') {
      if (opts.noextglob !== true && peek() === '(') {
        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
          extglobOpen('negate', value);
          continue;
        }
      }

      if (opts.nonegate !== true && state.index === 0) {
        negate();
        continue;
      }
    }
    /**
     * Plus
     */


    if (value === '+') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        extglobOpen('plus', value);
        continue;
      }

      if (prev && prev.value === '(' || opts.regex === false) {
        push({
          type: 'plus',
          value,
          output: PLUS_LITERAL
        });
        continue;
      }

      if (prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace') || state.parens > 0) {
        push({
          type: 'plus',
          value
        });
        continue;
      }

      push({
        type: 'plus',
        value: PLUS_LITERAL
      });
      continue;
    }
    /**
     * Plain text
     */


    if (value === '@') {
      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
        push({
          type: 'at',
          extglob: true,
          value,
          output: ''
        });
        continue;
      }

      push({
        type: 'text',
        value
      });
      continue;
    }
    /**
     * Plain text
     */


    if (value !== '*') {
      if (value === '$' || value === '^') {
        value = `\\${value}`;
      }

      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());

      if (match) {
        value += match[0];
        state.index += match[0].length;
      }

      push({
        type: 'text',
        value
      });
      continue;
    }
    /**
     * Stars
     */


    if (prev && (prev.type === 'globstar' || prev.star === true)) {
      prev.type = 'star';
      prev.star = true;
      prev.value += value;
      prev.output = star;
      state.backtrack = true;
      state.globstar = true;
      consume(value);
      continue;
    }

    let rest = remaining();

    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
      extglobOpen('star', value);
      continue;
    }

    if (prev.type === 'star') {
      if (opts.noglobstar === true) {
        consume(value);
        continue;
      }

      const prior = prev.prev;
      const before = prior.prev;
      const isStart = prior.type === 'slash' || prior.type === 'bos';
      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

      if (opts.bash === true && (!isStart || rest[0] && rest[0] !== '/')) {
        push({
          type: 'star',
          value,
          output: ''
        });
        continue;
      }

      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');

      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
        push({
          type: 'star',
          value,
          output: ''
        });
        continue;
      } // strip consecutive `/**/`


      while (rest.slice(0, 3) === '/**') {
        const after = input[state.index + 4];

        if (after && after !== '/') {
          break;
        }

        rest = rest.slice(3);
        consume('/**', 3);
      }

      if (prior.type === 'bos' && eos()) {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = globstar(opts);
        state.output = prev.output;
        state.globstar = true;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = 'globstar';
        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
        prev.value += value;
        state.globstar = true;
        state.output += prior.output + prev.output;
        consume(value);
        continue;
      }

      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
        const end = rest[1] !== void 0 ? '|$' : '';
        state.output = state.output.slice(0, -(prior.output + prev.output).length);
        prior.output = `(?:${prior.output}`;
        prev.type = 'globstar';
        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
        prev.value += value;
        state.output += prior.output + prev.output;
        state.globstar = true;
        consume(value + advance());
        push({
          type: 'slash',
          value: '/',
          output: ''
        });
        continue;
      }

      if (prior.type === 'bos' && rest[0] === '/') {
        prev.type = 'globstar';
        prev.value += value;
        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
        state.output = prev.output;
        state.globstar = true;
        consume(value + advance());
        push({
          type: 'slash',
          value: '/',
          output: ''
        });
        continue;
      } // remove single star from output


      state.output = state.output.slice(0, -prev.output.length); // reset previous token to globstar

      prev.type = 'globstar';
      prev.output = globstar(opts);
      prev.value += value; // reset output with globstar

      state.output += prev.output;
      state.globstar = true;
      consume(value);
      continue;
    }

    const token = {
      type: 'star',
      value,
      output: star
    };

    if (opts.bash === true) {
      token.output = '.*?';

      if (prev.type === 'bos' || prev.type === 'slash') {
        token.output = nodot + token.output;
      }

      push(token);
      continue;
    }

    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
      token.output = value;
      push(token);
      continue;
    }

    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
      if (prev.type === 'dot') {
        state.output += NO_DOT_SLASH;
        prev.output += NO_DOT_SLASH;
      } else if (opts.dot === true) {
        state.output += NO_DOTS_SLASH;
        prev.output += NO_DOTS_SLASH;
      } else {
        state.output += nodot;
        prev.output += nodot;
      }

      if (peek() !== '*') {
        state.output += ONE_CHAR;
        prev.output += ONE_CHAR;
      }
    }

    push(token);
  }

  while (state.brackets > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
    state.output = utils$2.escapeLast(state.output, '[');
    decrement('brackets');
  }

  while (state.parens > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
    state.output = utils$2.escapeLast(state.output, '(');
    decrement('parens');
  }

  while (state.braces > 0) {
    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
    state.output = utils$2.escapeLast(state.output, '{');
    decrement('braces');
  }

  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
    push({
      type: 'maybe_slash',
      value: '',
      output: `${SLASH_LITERAL}?`
    });
  } // rebuild the output if we had to backtrack at any point


  if (state.backtrack === true) {
    state.output = '';

    for (const token of state.tokens) {
      state.output += token.output != null ? token.output : token.value;

      if (token.suffix) {
        state.output += token.suffix;
      }
    }
  }

  return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */


parse.fastpaths = (input, options) => {
  const opts = { ...options
  };
  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
  const len = input.length;

  if (len > max) {
    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
  }

  input = REPLACEMENTS[input] || input;
  const win32 = utils$2.isWindows(options); // create constants based on platform, for windows or posix

  const {
    DOT_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOTS_SLASH,
    STAR,
    START_ANCHOR
  } = constants$1.globChars(win32);
  const nodot = opts.dot ? NO_DOTS : NO_DOT;
  const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
  const capture = opts.capture ? '' : '?:';
  const state = {
    negated: false,
    prefix: ''
  };
  let star = opts.bash === true ? '.*?' : STAR;

  if (opts.capture) {
    star = `(${star})`;
  }

  const globstar = opts => {
    if (opts.noglobstar === true) return star;
    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
  };

  const create = str => {
    switch (str) {
      case '*':
        return `${nodot}${ONE_CHAR}${star}`;

      case '.*':
        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*.*':
        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '*/*':
        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

      case '**':
        return nodot + globstar(opts);

      case '**/*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

      case '**/*.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

      case '**/.*':
        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

      default:
        {
          const match = /^(.*?)\.(\w+)$/.exec(str);
          if (!match) return;
          const source = create(match[1]);
          if (!source) return;
          return source + DOT_LITERAL + match[2];
        }
    }
  };

  const output = utils$2.removePrefix(input, state);
  let source = create(output);

  if (source && opts.strictSlashes !== true) {
    source += `${SLASH_LITERAL}?`;
  }

  return source;
};

var parse_1 = parse;

const isObject = val => val && typeof val === 'object' && !Array.isArray(val);
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */


const picomatch$1 = (glob, options, returnState = false) => {
  if (Array.isArray(glob)) {
    const fns = glob.map(input => picomatch$1(input, options, returnState));

    const arrayMatcher = str => {
      for (const isMatch of fns) {
        const state = isMatch(str);
        if (state) return state;
      }

      return false;
    };

    return arrayMatcher;
  }

  const isState = isObject(glob) && glob.tokens && glob.input;

  if (glob === '' || typeof glob !== 'string' && !isState) {
    throw new TypeError('Expected pattern to be a non-empty string');
  }

  const opts = options || {};
  const posix = utils$2.isWindows(options);
  const regex = isState ? picomatch$1.compileRe(glob, options) : picomatch$1.makeRe(glob, options, false, true);
  const state = regex.state;
  delete regex.state;

  let isIgnored = () => false;

  if (opts.ignore) {
    const ignoreOpts = { ...options,
      ignore: null,
      onMatch: null,
      onResult: null
    };
    isIgnored = picomatch$1(opts.ignore, ignoreOpts, returnState);
  }

  const matcher = (input, returnObject = false) => {
    const {
      isMatch,
      match,
      output
    } = picomatch$1.test(input, regex, options, {
      glob,
      posix
    });
    const result = {
      glob,
      state,
      regex,
      posix,
      input,
      output,
      match,
      isMatch
    };

    if (typeof opts.onResult === 'function') {
      opts.onResult(result);
    }

    if (isMatch === false) {
      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (isIgnored(input)) {
      if (typeof opts.onIgnore === 'function') {
        opts.onIgnore(result);
      }

      result.isMatch = false;
      return returnObject ? result : false;
    }

    if (typeof opts.onMatch === 'function') {
      opts.onMatch(result);
    }

    return returnObject ? result : true;
  };

  if (returnState) {
    matcher.state = state;
  }

  return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */


picomatch$1.test = (input, regex, options, {
  glob,
  posix
} = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError('Expected input to be a string');
  }

  if (input === '') {
    return {
      isMatch: false,
      output: ''
    };
  }

  const opts = options || {};
  const format = opts.format || (posix ? utils$2.toPosixSlashes : null);
  let match = input === glob;
  let output = match && format ? format(input) : input;

  if (match === false) {
    output = format ? format(input) : input;
    match = output === glob;
  }

  if (match === false || opts.capture === true) {
    if (opts.matchBase === true || opts.basename === true) {
      match = picomatch$1.matchBase(input, regex, options, posix);
    } else {
      match = regex.exec(output);
    }
  }

  return {
    isMatch: Boolean(match),
    match,
    output
  };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */


picomatch$1.matchBase = (input, glob, options, posix = utils$2.isWindows(options)) => {
  const regex = glob instanceof RegExp ? glob : picomatch$1.makeRe(glob, options);
  return regex.test(path__default['default'].basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


picomatch$1.isMatch = (str, patterns, options) => picomatch$1(patterns, options)(str);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */


picomatch$1.parse = (pattern, options) => {
  if (Array.isArray(pattern)) return pattern.map(p => picomatch$1.parse(p, options));
  return parse_1(pattern, { ...options,
    fastpaths: false
  });
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */


picomatch$1.scan = (input, options) => scan_1(input, options);
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */


picomatch$1.compileRe = (parsed, options, returnOutput = false, returnState = false) => {
  if (returnOutput === true) {
    return parsed.output;
  }

  const opts = options || {};
  const prepend = opts.contains ? '' : '^';
  const append = opts.contains ? '' : '$';
  let source = `${prepend}(?:${parsed.output})${append}`;

  if (parsed && parsed.negated === true) {
    source = `^(?!${source}).*$`;
  }

  const regex = picomatch$1.toRegex(source, options);

  if (returnState === true) {
    regex.state = parsed;
  }

  return regex;
};

picomatch$1.makeRe = (input, options, returnOutput = false, returnState = false) => {
  if (!input || typeof input !== 'string') {
    throw new TypeError('Expected a non-empty string');
  }

  const opts = options || {};
  let parsed = {
    negated: false,
    fastpaths: true
  };
  let prefix = '';
  let output;

  if (input.startsWith('./')) {
    input = input.slice(2);
    prefix = parsed.prefix = './';
  }

  if (opts.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
    output = parse_1.fastpaths(input, options);
  }

  if (output === undefined) {
    parsed = parse_1(input, options);
    parsed.prefix = prefix + (parsed.prefix || '');
  } else {
    parsed.output = output;
  }

  return picomatch$1.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */


picomatch$1.toRegex = (source, options) => {
  try {
    const opts = options || {};
    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
  } catch (err) {
    if (options && options.debug === true) throw err;
    return /$^/;
  }
};
/**
 * Picomatch constants.
 * @return {Object}
 */


picomatch$1.constants = constants$1;
/**
 * Expose "picomatch"
 */

var picomatch_1 = picomatch$1;

var picomatch = picomatch_1;

const isEmptyString = val => val === '' || val === './';
/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} `list` List of strings to match.
 * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */


const micromatch = (list, patterns, options) => {
  patterns = [].concat(patterns);
  list = [].concat(list);
  let omit = new Set();
  let keep = new Set();
  let items = new Set();
  let negatives = 0;

  let onResult = state => {
    items.add(state.output);

    if (options && options.onResult) {
      options.onResult(state);
    }
  };

  for (let i = 0; i < patterns.length; i++) {
    let isMatch = picomatch(String(patterns[i]), { ...options,
      onResult
    }, true);
    let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
    if (negated) negatives++;

    for (let item of list) {
      let matched = isMatch(item, true);
      let match = negated ? !matched.isMatch : matched.isMatch;
      if (!match) continue;

      if (negated) {
        omit.add(matched.output);
      } else {
        omit.delete(matched.output);
        keep.add(matched.output);
      }
    }
  }

  let result = negatives === patterns.length ? [...items] : [...keep];
  let matches = result.filter(item => !omit.has(item));

  if (options && matches.length === 0) {
    if (options.failglob === true) {
      throw new Error(`No matches found for "${patterns.join(', ')}"`);
    }

    if (options.nonull === true || options.nullglob === true) {
      return options.unescape ? patterns.map(p => p.replace(/\\/g, '')) : patterns;
    }
  }

  return matches;
};
/**
 * Backwards compatibility
 */


micromatch.match = micromatch;
/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */

micromatch.matcher = (pattern, options) => picomatch(pattern, options);
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
/**
 * Backwards compatibility
 */


micromatch.any = micromatch.isMatch;
/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */

micromatch.not = (list, patterns, options = {}) => {
  patterns = [].concat(patterns).map(String);
  let result = new Set();
  let items = [];

  let onResult = state => {
    if (options.onResult) options.onResult(state);
    items.push(state.output);
  };

  let matches = micromatch(list, patterns, { ...options,
    onResult
  });

  for (let item of items) {
    if (!matches.includes(item)) {
      result.add(item);
    }
  }

  return [...result];
};
/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */


micromatch.contains = (str, pattern, options) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string: "${util__default['default'].inspect(str)}"`);
  }

  if (Array.isArray(pattern)) {
    return pattern.some(p => micromatch.contains(str, p, options));
  }

  if (typeof pattern === 'string') {
    if (isEmptyString(str) || isEmptyString(pattern)) {
      return false;
    }

    if (str.includes(pattern) || str.startsWith('./') && str.slice(2).includes(pattern)) {
      return true;
    }
  }

  return micromatch.isMatch(str, pattern, { ...options,
    contains: true
  });
};
/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */


micromatch.matchKeys = (obj, patterns, options) => {
  if (!utils$2.isObject(obj)) {
    throw new TypeError('Expected the first argument to be an object');
  }

  let keys = micromatch(Object.keys(obj), patterns, options);
  let res = {};

  for (let key of keys) res[key] = obj[key];

  return res;
};
/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */


micromatch.some = (list, patterns, options) => {
  let items = [].concat(list);

  for (let pattern of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern), options);

    if (items.some(item => isMatch(item))) {
      return true;
    }
  }

  return false;
};
/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */


micromatch.every = (list, patterns, options) => {
  let items = [].concat(list);

  for (let pattern of [].concat(patterns)) {
    let isMatch = picomatch(String(pattern), options);

    if (!items.every(item => isMatch(item))) {
      return false;
    }
  }

  return true;
};
/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */


micromatch.all = (str, patterns, options) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string: "${util__default['default'].inspect(str)}"`);
  }

  return [].concat(patterns).every(p => picomatch(p, options)(str));
};
/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */


micromatch.capture = (glob, input, options) => {
  let posix = utils$2.isWindows(options);
  let regex = picomatch.makeRe(String(glob), { ...options,
    capture: true
  });
  let match = regex.exec(posix ? utils$2.toPosixSlashes(input) : input);

  if (match) {
    return match.slice(1).map(v => v === void 0 ? '' : v);
  }
};
/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */


micromatch.makeRe = (...args) => picomatch.makeRe(...args);
/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */


micromatch.scan = (...args) => picomatch.scan(...args);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */


micromatch.parse = (patterns, options) => {
  let res = [];

  for (let pattern of [].concat(patterns || [])) {
    for (let str of braces_1(String(pattern), options)) {
      res.push(picomatch.parse(str, options));
    }
  }

  return res;
};
/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */


micromatch.braces = (pattern, options) => {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');

  if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
    return [pattern];
  }

  return braces_1(pattern, options);
};
/**
 * Expand braces
 */


micromatch.braceExpand = (pattern, options) => {
  if (typeof pattern !== 'string') throw new TypeError('Expected a string');
  return micromatch.braces(pattern, { ...options,
    expand: true
  });
};
/**
 * Expose micromatch
 */


var micromatch_1 = micromatch;

var pattern = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;









const GLOBSTAR = '**';
const ESCAPE_SYMBOL = '\\';
const COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
const REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[.*]/;
const REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\(.*\|.*\)/;
const GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\(.*\)/;
const BRACE_EXPANSIONS_SYMBOLS_RE = /{.*(?:,|\.\.).*}/;

function isStaticPattern(pattern, options = {}) {
  return !isDynamicPattern(pattern, options);
}

exports.isStaticPattern = isStaticPattern;

function isDynamicPattern(pattern, options = {}) {
  /**
   * A special case with an empty string is necessary for matching patterns that start with a forward slash.
   * An empty string cannot be a dynamic pattern.
   * For example, the pattern `/lib/*` will be spread into parts: '', 'lib', '*'.
   */
  if (pattern === '') {
    return false;
  }
  /**
   * When the `caseSensitiveMatch` option is disabled, all patterns must be marked as dynamic, because we cannot check
   * filepath directly (without read directory).
   */


  if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
    return true;
  }

  if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
    return true;
  }

  if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
    return true;
  }

  if (options.braceExpansion !== false && BRACE_EXPANSIONS_SYMBOLS_RE.test(pattern)) {
    return true;
  }

  return false;
}

exports.isDynamicPattern = isDynamicPattern;

function convertToPositivePattern(pattern) {
  return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
}

exports.convertToPositivePattern = convertToPositivePattern;

function convertToNegativePattern(pattern) {
  return '!' + pattern;
}

exports.convertToNegativePattern = convertToNegativePattern;

function isNegativePattern(pattern) {
  return pattern.startsWith('!') && pattern[1] !== '(';
}

exports.isNegativePattern = isNegativePattern;

function isPositivePattern(pattern) {
  return !isNegativePattern(pattern);
}

exports.isPositivePattern = isPositivePattern;

function getNegativePatterns(patterns) {
  return patterns.filter(isNegativePattern);
}

exports.getNegativePatterns = getNegativePatterns;

function getPositivePatterns(patterns) {
  return patterns.filter(isPositivePattern);
}

exports.getPositivePatterns = getPositivePatterns;

function getBaseDirectory(pattern) {
  return globParent(pattern, {
    flipBackslashes: false
  });
}

exports.getBaseDirectory = getBaseDirectory;

function hasGlobStar(pattern) {
  return pattern.includes(GLOBSTAR);
}

exports.hasGlobStar = hasGlobStar;

function endsWithSlashGlobStar(pattern) {
  return pattern.endsWith('/' + GLOBSTAR);
}

exports.endsWithSlashGlobStar = endsWithSlashGlobStar;

function isAffectDepthOfReadingPattern(pattern) {
  const basename = path__default['default'].basename(pattern);
  return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
}

exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;

function expandPatternsWithBraceExpansion(patterns) {
  return patterns.reduce((collection, pattern) => {
    return collection.concat(expandBraceExpansion(pattern));
  }, []);
}

exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;

function expandBraceExpansion(pattern) {
  return micromatch_1.braces(pattern, {
    expand: true,
    nodupes: true
  });
}

exports.expandBraceExpansion = expandBraceExpansion;

function getPatternParts(pattern, options) {
  let {
    parts
  } = picomatch.scan(pattern, Object.assign(Object.assign({}, options), {
    parts: true
  }));
  /**
   * The scan method returns an empty array in some cases.
   * See micromatch/picomatch#58 for more details.
   */

  if (parts.length === 0) {
    parts = [pattern];
  }
  /**
   * The scan method does not return an empty part for the pattern with a forward slash.
   * This is another part of micromatch/picomatch#58.
   */


  if (parts[0].startsWith('/')) {
    parts[0] = parts[0].slice(1);
    parts.unshift('');
  }

  return parts;
}

exports.getPatternParts = getPatternParts;

function makeRe(pattern, options) {
  return micromatch_1.makeRe(pattern, options);
}

exports.makeRe = makeRe;

function convertPatternsToRe(patterns, options) {
  return patterns.map(pattern => makeRe(pattern, options));
}

exports.convertPatternsToRe = convertPatternsToRe;

function matchAny(entry, patternsRe) {
  return patternsRe.some(patternRe => patternRe.test(entry));
}

exports.matchAny = matchAny;
});

var stream$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = void 0;



function merge(streams) {
  const mergedStream = merge2_1(streams);
  streams.forEach(stream => {
    stream.once('error', error => mergedStream.emit('error', error));
  });
  mergedStream.once('close', () => propagateCloseEventToSources(streams));
  mergedStream.once('end', () => propagateCloseEventToSources(streams));
  return mergedStream;
}

exports.merge = merge;

function propagateCloseEventToSources(streams) {
  streams.forEach(stream => stream.emit('close'));
}
});

var string = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = exports.isString = void 0;

function isString(input) {
  return typeof input === 'string';
}

exports.isString = isString;

function isEmpty(input) {
  return input === '';
}

exports.isEmpty = isEmpty;
});

var utils$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;



exports.array = array;



exports.errno = errno;



exports.fs = fs$1;



exports.path = path_1;



exports.pattern = pattern;



exports.stream = stream$4;



exports.string = string;
});

var tasks = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;



function generate(patterns, settings) {
  const positivePatterns = getPositivePatterns(patterns);
  const negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
  const staticPatterns = positivePatterns.filter(pattern => utils$1.pattern.isStaticPattern(pattern, settings));
  const dynamicPatterns = positivePatterns.filter(pattern => utils$1.pattern.isDynamicPattern(pattern, settings));
  const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns,
  /* dynamic */
  false);
  const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns,
  /* dynamic */
  true);
  return staticTasks.concat(dynamicTasks);
}

exports.generate = generate;

function convertPatternsToTasks(positive, negative, dynamic) {
  const positivePatternsGroup = groupPatternsByBaseDirectory(positive); // When we have a global group – there is no reason to divide the patterns into independent tasks.
  // In this case, the global task covers the rest.

  if ('.' in positivePatternsGroup) {
    const task = convertPatternGroupToTask('.', positive, negative, dynamic);
    return [task];
  }

  return convertPatternGroupsToTasks(positivePatternsGroup, negative, dynamic);
}

exports.convertPatternsToTasks = convertPatternsToTasks;

function getPositivePatterns(patterns) {
  return utils$1.pattern.getPositivePatterns(patterns);
}

exports.getPositivePatterns = getPositivePatterns;

function getNegativePatternsAsPositive(patterns, ignore) {
  const negative = utils$1.pattern.getNegativePatterns(patterns).concat(ignore);
  const positive = negative.map(utils$1.pattern.convertToPositivePattern);
  return positive;
}

exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;

function groupPatternsByBaseDirectory(patterns) {
  const group = {};
  return patterns.reduce((collection, pattern) => {
    const base = utils$1.pattern.getBaseDirectory(pattern);

    if (base in collection) {
      collection[base].push(pattern);
    } else {
      collection[base] = [pattern];
    }

    return collection;
  }, group);
}

exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;

function convertPatternGroupsToTasks(positive, negative, dynamic) {
  return Object.keys(positive).map(base => {
    return convertPatternGroupToTask(base, positive[base], negative, dynamic);
  });
}

exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;

function convertPatternGroupToTask(base, positive, negative, dynamic) {
  return {
    dynamic,
    positive,
    negative,
    base,
    patterns: [].concat(positive, negative.map(utils$1.pattern.convertToNegativePattern))
  };
}

exports.convertPatternGroupToTask = convertPatternGroupToTask;
});

var async$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = void 0;

function read(path, settings, callback) {
  settings.fs.lstat(path, (lstatError, lstat) => {
    if (lstatError !== null) {
      return callFailureCallback(callback, lstatError);
    }

    if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
      return callSuccessCallback(callback, lstat);
    }

    settings.fs.stat(path, (statError, stat) => {
      if (statError !== null) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          return callFailureCallback(callback, statError);
        }

        return callSuccessCallback(callback, lstat);
      }

      if (settings.markSymbolicLink) {
        stat.isSymbolicLink = () => true;
      }

      callSuccessCallback(callback, stat);
    });
  });
}

exports.read = read;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, result) {
  callback(null, result);
}
});

var sync$8 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = void 0;

function read(path, settings) {
  const lstat = settings.fs.lstatSync(path);

  if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
    return lstat;
  }

  try {
    const stat = settings.fs.statSync(path);

    if (settings.markSymbolicLink) {
      stat.isSymbolicLink = () => true;
    }

    return stat;
  } catch (error) {
    if (!settings.throwErrorOnBrokenSymbolicLink) {
      return lstat;
    }

    throw error;
  }
}

exports.read = read;
});

var fs_1$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;



exports.FILE_SYSTEM_ADAPTER = {
  lstat: fs__default['default'].lstat,
  stat: fs__default['default'].stat,
  lstatSync: fs__default['default'].lstatSync,
  statSync: fs__default['default'].statSync
};

function createFileSystemAdapter(fsMethods) {
  if (fsMethods === undefined) {
    return exports.FILE_SYSTEM_ADAPTER;
  }

  return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}

exports.createFileSystemAdapter = createFileSystemAdapter;
});

class Settings$2 {
  constructor(_options = {}) {
    this._options = _options;
    this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
    this.fs = fs_1$1.createFileSystemAdapter(this._options.fs);
    this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
  }

  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }

}

var _default$l = Settings$2;

var settings$3 = /*#__PURE__*/Object.defineProperty({
	default: _default$l
}, '__esModule', {value: true});

var out$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statSync = exports.stat = exports.Settings = void 0;







exports.Settings = settings$3.default;

function stat(path, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    return async$4.read(path, getSettings(), optionsOrSettingsOrCallback);
  }

  async$4.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}

exports.stat = stat;

function statSync(path, optionsOrSettings) {
  const settings = getSettings(optionsOrSettings);
  return sync$8.read(path, settings);
}

exports.statSync = statSync;

function getSettings(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings$3.default) {
    return settingsOrOptions;
  }

  return new settings$3.default(settingsOrOptions);
}
});

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

let promise$1;
var queueMicrotask_1 = typeof queueMicrotask === 'function' ? queueMicrotask.bind(typeof window !== 'undefined' ? window : commonjsGlobal) // reuse resolved promise, and allocate it lazily
: cb => (promise$1 || (promise$1 = Promise.resolve())).then(cb).catch(err => setTimeout(() => {
  throw err;
}, 0));

/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */

var runParallel_1 = runParallel;



function runParallel(tasks, cb) {
  let results, pending, keys;
  let isSync = true;

  if (Array.isArray(tasks)) {
    results = [];
    pending = tasks.length;
  } else {
    keys = Object.keys(tasks);
    results = {};
    pending = keys.length;
  }

  function done(err) {
    function end() {
      if (cb) cb(err, results);
      cb = null;
    }

    if (isSync) queueMicrotask_1(end);else end();
  }

  function each(i, err, result) {
    results[i] = result;

    if (--pending === 0 || err) {
      done(err);
    }
  }

  if (!pending) {
    // empty
    done(null);
  } else if (keys) {
    // object
    keys.forEach(function (key) {
      tasks[key](function (err, result) {
        each(key, err, result);
      });
    });
  } else {
    // array
    tasks.forEach(function (task, i) {
      task(function (err, result) {
        each(i, err, result);
      });
    });
  }

  isSync = false;
}

var constants = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
const NODE_PROCESS_VERSION_PARTS = process.versions.node.split('.');
const MAJOR_VERSION = parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
const MINOR_VERSION = parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
const SUPPORTED_MAJOR_VERSION = 10;
const SUPPORTED_MINOR_VERSION = 10;
const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
/**
 * IS `true` for Node.js 10.10 and greater.
 */

exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
});

var fs = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDirentFromStats = void 0;

class DirentFromStats {
  constructor(name, stats) {
    this.name = name;
    this.isBlockDevice = stats.isBlockDevice.bind(stats);
    this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
    this.isDirectory = stats.isDirectory.bind(stats);
    this.isFIFO = stats.isFIFO.bind(stats);
    this.isFile = stats.isFile.bind(stats);
    this.isSocket = stats.isSocket.bind(stats);
    this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
  }

}

function createDirentFromStats(name, stats) {
  return new DirentFromStats(name, stats);
}

exports.createDirentFromStats = createDirentFromStats;
});

var utils = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fs = void 0;



exports.fs = fs;
});

var common$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinPathSegments = void 0;

function joinPathSegments(a, b, separator) {
  /**
   * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
   */
  if (a.endsWith(separator)) {
    return a + b;
  }

  return a + separator + b;
}

exports.joinPathSegments = joinPathSegments;
});

var async$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;











function read(directory, settings, callback) {
  if (!settings.stats && constants.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    return readdirWithFileTypes(directory, settings, callback);
  }

  return readdir(directory, settings, callback);
}

exports.read = read;

function readdirWithFileTypes(directory, settings, callback) {
  settings.fs.readdir(directory, {
    withFileTypes: true
  }, (readdirError, dirents) => {
    if (readdirError !== null) {
      return callFailureCallback(callback, readdirError);
    }

    const entries = dirents.map(dirent => ({
      dirent,
      name: dirent.name,
      path: common$1.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
    }));

    if (!settings.followSymbolicLinks) {
      return callSuccessCallback(callback, entries);
    }

    const tasks = entries.map(entry => makeRplTaskEntry(entry, settings));
    runParallel_1(tasks, (rplError, rplEntries) => {
      if (rplError !== null) {
        return callFailureCallback(callback, rplError);
      }

      callSuccessCallback(callback, rplEntries);
    });
  });
}

exports.readdirWithFileTypes = readdirWithFileTypes;

function makeRplTaskEntry(entry, settings) {
  return done => {
    if (!entry.dirent.isSymbolicLink()) {
      return done(null, entry);
    }

    settings.fs.stat(entry.path, (statError, stats) => {
      if (statError !== null) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          return done(statError);
        }

        return done(null, entry);
      }

      entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
      return done(null, entry);
    });
  };
}

function readdir(directory, settings, callback) {
  settings.fs.readdir(directory, (readdirError, names) => {
    if (readdirError !== null) {
      return callFailureCallback(callback, readdirError);
    }

    const filepaths = names.map(name => common$1.joinPathSegments(directory, name, settings.pathSegmentSeparator));
    const tasks = filepaths.map(filepath => {
      return done => out$3.stat(filepath, settings.fsStatSettings, done);
    });
    runParallel_1(tasks, (rplError, results) => {
      if (rplError !== null) {
        return callFailureCallback(callback, rplError);
      }

      const entries = [];
      names.forEach((name, index) => {
        const stats = results[index];
        const entry = {
          name,
          path: filepaths[index],
          dirent: utils.fs.createDirentFromStats(name, stats)
        };

        if (settings.stats) {
          entry.stats = stats;
        }

        entries.push(entry);
      });
      callSuccessCallback(callback, entries);
    });
  });
}

exports.readdir = readdir;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, result) {
  callback(null, result);
}
});

var sync$7 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;









function read(directory, settings) {
  if (!settings.stats && constants.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
    return readdirWithFileTypes(directory, settings);
  }

  return readdir(directory, settings);
}

exports.read = read;

function readdirWithFileTypes(directory, settings) {
  const dirents = settings.fs.readdirSync(directory, {
    withFileTypes: true
  });
  return dirents.map(dirent => {
    const entry = {
      dirent,
      name: dirent.name,
      path: common$1.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
    };

    if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
      try {
        const stats = settings.fs.statSync(entry.path);
        entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
      } catch (error) {
        if (settings.throwErrorOnBrokenSymbolicLink) {
          throw error;
        }
      }
    }

    return entry;
  });
}

exports.readdirWithFileTypes = readdirWithFileTypes;

function readdir(directory, settings) {
  const names = settings.fs.readdirSync(directory);
  return names.map(name => {
    const entryPath = common$1.joinPathSegments(directory, name, settings.pathSegmentSeparator);
    const stats = out$3.statSync(entryPath, settings.fsStatSettings);
    const entry = {
      name,
      path: entryPath,
      dirent: utils.fs.createDirentFromStats(name, stats)
    };

    if (settings.stats) {
      entry.stats = stats;
    }

    return entry;
  });
}

exports.readdir = readdir;
});

var fs_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;



exports.FILE_SYSTEM_ADAPTER = {
  lstat: fs__default['default'].lstat,
  stat: fs__default['default'].stat,
  lstatSync: fs__default['default'].lstatSync,
  statSync: fs__default['default'].statSync,
  readdir: fs__default['default'].readdir,
  readdirSync: fs__default['default'].readdirSync
};

function createFileSystemAdapter(fsMethods) {
  if (fsMethods === undefined) {
    return exports.FILE_SYSTEM_ADAPTER;
  }

  return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}

exports.createFileSystemAdapter = createFileSystemAdapter;
});

class Settings$1 {
  constructor(_options = {}) {
    this._options = _options;
    this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
    this.fs = fs_1.createFileSystemAdapter(this._options.fs);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path__default['default'].sep);
    this.stats = this._getValue(this._options.stats, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    this.fsStatSettings = new out$3.Settings({
      followSymbolicLink: this.followSymbolicLinks,
      fs: this.fs,
      throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
    });
  }

  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }

}

var _default$k = Settings$1;

var settings$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$k
}, '__esModule', {value: true});

var out$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = exports.scandirSync = exports.scandir = void 0;







exports.Settings = settings$2.default;

function scandir(path, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    return async$3.read(path, getSettings(), optionsOrSettingsOrCallback);
  }

  async$3.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}

exports.scandir = scandir;

function scandirSync(path, optionsOrSettings) {
  const settings = getSettings(optionsOrSettings);
  return sync$7.read(path, settings);
}

exports.scandirSync = scandirSync;

function getSettings(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings$2.default) {
    return settingsOrOptions;
  }

  return new settings$2.default(settingsOrOptions);
}
});

function reusify(Constructor) {
  var head = new Constructor();
  var tail = head;

  function get() {
    var current = head;

    if (current.next) {
      head = current.next;
    } else {
      head = new Constructor();
      tail = head;
    }

    current.next = null;
    return current;
  }

  function release(obj) {
    tail.next = obj;
    tail = obj;
  }

  return {
    get: get,
    release: release
  };
}

var reusify_1 = reusify;

function fastqueue(context, worker, concurrency) {
  if (typeof context === 'function') {
    concurrency = worker;
    worker = context;
    context = null;
  }

  if (concurrency < 1) {
    throw new Error('fastqueue concurrency must be greater than 1');
  }

  var cache = reusify_1(Task);
  var queueHead = null;
  var queueTail = null;
  var _running = 0;
  var errorHandler = null;
  var self = {
    push: push,
    drain: noop,
    saturated: noop,
    pause: pause,
    paused: false,
    concurrency: concurrency,
    running: running,
    resume: resume,
    idle: idle,
    length: length,
    getQueue: getQueue,
    unshift: unshift,
    empty: noop,
    kill: kill,
    killAndDrain: killAndDrain,
    error: error
  };
  return self;

  function running() {
    return _running;
  }

  function pause() {
    self.paused = true;
  }

  function length() {
    var current = queueHead;
    var counter = 0;

    while (current) {
      current = current.next;
      counter++;
    }

    return counter;
  }

  function getQueue() {
    var current = queueHead;
    var tasks = [];

    while (current) {
      tasks.push(current.value);
      current = current.next;
    }

    return tasks;
  }

  function resume() {
    if (!self.paused) return;
    self.paused = false;

    for (var i = 0; i < self.concurrency; i++) {
      _running++;
      release();
    }
  }

  function idle() {
    return _running === 0 && self.length() === 0;
  }

  function push(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;
    current.errorHandler = errorHandler;

    if (_running === self.concurrency || self.paused) {
      if (queueTail) {
        queueTail.next = current;
        queueTail = current;
      } else {
        queueHead = current;
        queueTail = current;
        self.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }

  function unshift(value, done) {
    var current = cache.get();
    current.context = context;
    current.release = release;
    current.value = value;
    current.callback = done || noop;

    if (_running === self.concurrency || self.paused) {
      if (queueHead) {
        current.next = queueHead;
        queueHead = current;
      } else {
        queueHead = current;
        queueTail = current;
        self.saturated();
      }
    } else {
      _running++;
      worker.call(context, current.value, current.worked);
    }
  }

  function release(holder) {
    if (holder) {
      cache.release(holder);
    }

    var next = queueHead;

    if (next) {
      if (!self.paused) {
        if (queueTail === queueHead) {
          queueTail = null;
        }

        queueHead = next.next;
        next.next = null;
        worker.call(context, next.value, next.worked);

        if (queueTail === null) {
          self.empty();
        }
      } else {
        _running--;
      }
    } else if (--_running === 0) {
      self.drain();
    }
  }

  function kill() {
    queueHead = null;
    queueTail = null;
    self.drain = noop;
  }

  function killAndDrain() {
    queueHead = null;
    queueTail = null;
    self.drain();
    self.drain = noop;
  }

  function error(handler) {
    errorHandler = handler;
  }
}

function noop() {}

function Task() {
  this.value = null;
  this.callback = noop;
  this.next = null;
  this.release = noop;
  this.context = null;
  this.errorHandler = null;
  var self = this;

  this.worked = function worked(err, result) {
    var callback = self.callback;
    var errorHandler = self.errorHandler;
    var val = self.value;
    self.value = null;
    self.callback = noop;

    if (self.errorHandler) {
      errorHandler(err, val);
    }

    callback.call(self.context, err, result);
    self.release(self);
  };
}

function queueAsPromised(context, worker, concurrency) {
  if (typeof context === 'function') {
    concurrency = worker;
    worker = context;
    context = null;
  }

  function asyncWrapper(arg, cb) {
    worker.call(this, arg).then(function (res) {
      cb(null, res);
    }, cb);
  }

  var queue = fastqueue(context, asyncWrapper, concurrency);
  var pushCb = queue.push;
  var unshiftCb = queue.unshift;
  queue.push = push;
  queue.unshift = unshift;
  return queue;

  function push(value) {
    return new Promise(function (resolve, reject) {
      pushCb(value, function (err, result) {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }

  function unshift(value) {
    return new Promise(function (resolve, reject) {
      unshiftCb(value, function (err, result) {
        if (err) {
          reject(err);
          return;
        }

        resolve(result);
      });
    });
  }
}

var queue = fastqueue;
var promise = queueAsPromised;
queue.promise = promise;

var common = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;

function isFatalError(settings, error) {
  if (settings.errorFilter === null) {
    return true;
  }

  return !settings.errorFilter(error);
}

exports.isFatalError = isFatalError;

function isAppliedFilter(filter, value) {
  return filter === null || filter(value);
}

exports.isAppliedFilter = isAppliedFilter;

function replacePathSegmentSeparator(filepath, separator) {
  return filepath.split(/[/\\]/).join(separator);
}

exports.replacePathSegmentSeparator = replacePathSegmentSeparator;

function joinPathSegments(a, b, separator) {
  if (a === '') {
    return b;
  }
  /**
   * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
   */


  if (a.endsWith(separator)) {
    return a + b;
  }

  return a + separator + b;
}

exports.joinPathSegments = joinPathSegments;
});

class Reader$1 {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
  }

}

var _default$j = Reader$1;

var reader$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$j
}, '__esModule', {value: true});

class AsyncReader extends reader$1.default {
  constructor(_root, _settings) {
    super(_root, _settings);
    this._settings = _settings;
    this._scandir = out$2.scandir;
    this._emitter = new events_1__default['default'].EventEmitter();
    this._queue = queue(this._worker.bind(this), this._settings.concurrency);
    this._isFatalError = false;
    this._isDestroyed = false;

    this._queue.drain = () => {
      if (!this._isFatalError) {
        this._emitter.emit('end');
      }
    };
  }

  read() {
    this._isFatalError = false;
    this._isDestroyed = false;
    setImmediate(() => {
      this._pushToQueue(this._root, this._settings.basePath);
    });
    return this._emitter;
  }

  get isDestroyed() {
    return this._isDestroyed;
  }

  destroy() {
    if (this._isDestroyed) {
      throw new Error('The reader is already destroyed');
    }

    this._isDestroyed = true;

    this._queue.killAndDrain();
  }

  onEntry(callback) {
    this._emitter.on('entry', callback);
  }

  onError(callback) {
    this._emitter.once('error', callback);
  }

  onEnd(callback) {
    this._emitter.once('end', callback);
  }

  _pushToQueue(directory, base) {
    const queueItem = {
      directory,
      base
    };

    this._queue.push(queueItem, error => {
      if (error !== null) {
        this._handleError(error);
      }
    });
  }

  _worker(item, done) {
    this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
      if (error !== null) {
        return done(error, undefined);
      }

      for (const entry of entries) {
        this._handleEntry(entry, item.base);
      }

      done(null, undefined);
    });
  }

  _handleError(error) {
    if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
      return;
    }

    this._isFatalError = true;
    this._isDestroyed = true;

    this._emitter.emit('error', error);
  }

  _handleEntry(entry, base) {
    if (this._isDestroyed || this._isFatalError) {
      return;
    }

    const fullpath = entry.path;

    if (base !== undefined) {
      entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
    }

    if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
      this._emitEntry(entry);
    }

    if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
      this._pushToQueue(fullpath, entry.path);
    }
  }

  _emitEntry(entry) {
    this._emitter.emit('entry', entry);
  }

}

var _default$i = AsyncReader;

var async$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$i
}, '__esModule', {value: true});

class AsyncProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new async$2.default(this._root, this._settings);
    this._storage = new Set();
  }

  read(callback) {
    this._reader.onError(error => {
      callFailureCallback(callback, error);
    });

    this._reader.onEntry(entry => {
      this._storage.add(entry);
    });

    this._reader.onEnd(() => {
      callSuccessCallback(callback, [...this._storage]);
    });

    this._reader.read();
  }

}

var _default$h = AsyncProvider;

function callFailureCallback(callback, error) {
  callback(error);
}

function callSuccessCallback(callback, entries) {
  callback(null, entries);
}

var async$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$h
}, '__esModule', {value: true});

class StreamProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new async$2.default(this._root, this._settings);
    this._stream = new stream_1__default['default'].Readable({
      objectMode: true,
      read: () => {},
      destroy: () => {
        if (!this._reader.isDestroyed) {
          this._reader.destroy();
        }
      }
    });
  }

  read() {
    this._reader.onError(error => {
      this._stream.emit('error', error);
    });

    this._reader.onEntry(entry => {
      this._stream.push(entry);
    });

    this._reader.onEnd(() => {
      this._stream.push(null);
    });

    this._reader.read();

    return this._stream;
  }

}

var _default$g = StreamProvider;

var stream$3 = /*#__PURE__*/Object.defineProperty({
	default: _default$g
}, '__esModule', {value: true});

class SyncReader extends reader$1.default {
  constructor() {
    super(...arguments);
    this._scandir = out$2.scandirSync;
    this._storage = new Set();
    this._queue = new Set();
  }

  read() {
    this._pushToQueue(this._root, this._settings.basePath);

    this._handleQueue();

    return [...this._storage];
  }

  _pushToQueue(directory, base) {
    this._queue.add({
      directory,
      base
    });
  }

  _handleQueue() {
    for (const item of this._queue.values()) {
      this._handleDirectory(item.directory, item.base);
    }
  }

  _handleDirectory(directory, base) {
    try {
      const entries = this._scandir(directory, this._settings.fsScandirSettings);

      for (const entry of entries) {
        this._handleEntry(entry, base);
      }
    } catch (error) {
      this._handleError(error);
    }
  }

  _handleError(error) {
    if (!common.isFatalError(this._settings, error)) {
      return;
    }

    throw error;
  }

  _handleEntry(entry, base) {
    const fullpath = entry.path;

    if (base !== undefined) {
      entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
    }

    if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
      this._pushToStorage(entry);
    }

    if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
      this._pushToQueue(fullpath, entry.path);
    }
  }

  _pushToStorage(entry) {
    this._storage.add(entry);
  }

}

var _default$f = SyncReader;

var sync$6 = /*#__PURE__*/Object.defineProperty({
	default: _default$f
}, '__esModule', {value: true});

class SyncProvider {
  constructor(_root, _settings) {
    this._root = _root;
    this._settings = _settings;
    this._reader = new sync$6.default(this._root, this._settings);
  }

  read() {
    return this._reader.read();
  }

}

var _default$e = SyncProvider;

var sync$5 = /*#__PURE__*/Object.defineProperty({
	default: _default$e
}, '__esModule', {value: true});

class Settings {
  constructor(_options = {}) {
    this._options = _options;
    this.basePath = this._getValue(this._options.basePath, undefined);
    this.concurrency = this._getValue(this._options.concurrency, Infinity);
    this.deepFilter = this._getValue(this._options.deepFilter, null);
    this.entryFilter = this._getValue(this._options.entryFilter, null);
    this.errorFilter = this._getValue(this._options.errorFilter, null);
    this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path__default['default'].sep);
    this.fsScandirSettings = new out$2.Settings({
      followSymbolicLinks: this._options.followSymbolicLinks,
      fs: this._options.fs,
      pathSegmentSeparator: this._options.pathSegmentSeparator,
      stats: this._options.stats,
      throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
    });
  }

  _getValue(option, value) {
    return option !== null && option !== void 0 ? option : value;
  }

}

var _default$d = Settings;

var settings$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$d
}, '__esModule', {value: true});

var out$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;









exports.Settings = settings$1.default;

function walk(directory, optionsOrSettingsOrCallback, callback) {
  if (typeof optionsOrSettingsOrCallback === 'function') {
    return new async$1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
  }

  new async$1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
}

exports.walk = walk;

function walkSync(directory, optionsOrSettings) {
  const settings = getSettings(optionsOrSettings);
  const provider = new sync$5.default(directory, settings);
  return provider.read();
}

exports.walkSync = walkSync;

function walkStream(directory, optionsOrSettings) {
  const settings = getSettings(optionsOrSettings);
  const provider = new stream$3.default(directory, settings);
  return provider.read();
}

exports.walkStream = walkStream;

function getSettings(settingsOrOptions = {}) {
  if (settingsOrOptions instanceof settings$1.default) {
    return settingsOrOptions;
  }

  return new settings$1.default(settingsOrOptions);
}
});

class Reader {
  constructor(_settings) {
    this._settings = _settings;
    this._fsStatSettings = new out$3.Settings({
      followSymbolicLink: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
    });
  }

  _getFullEntryPath(filepath) {
    return path__default['default'].resolve(this._settings.cwd, filepath);
  }

  _makeEntry(stats, pattern) {
    const entry = {
      name: pattern,
      path: pattern,
      dirent: utils$1.fs.createDirentFromStats(pattern, stats)
    };

    if (this._settings.stats) {
      entry.stats = stats;
    }

    return entry;
  }

  _isFatalError(error) {
    return !utils$1.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
  }

}

var _default$c = Reader;

var reader = /*#__PURE__*/Object.defineProperty({
	default: _default$c
}, '__esModule', {value: true});

class ReaderStream extends reader.default {
  constructor() {
    super(...arguments);
    this._walkStream = out$1.walkStream;
    this._stat = out$3.stat;
  }

  dynamic(root, options) {
    return this._walkStream(root, options);
  }

  static(patterns, options) {
    const filepaths = patterns.map(this._getFullEntryPath, this);
    const stream = new stream_1__default['default'].PassThrough({
      objectMode: true
    });

    stream._write = (index, _enc, done) => {
      return this._getEntry(filepaths[index], patterns[index], options).then(entry => {
        if (entry !== null && options.entryFilter(entry)) {
          stream.push(entry);
        }

        if (index === filepaths.length - 1) {
          stream.end();
        }

        done();
      }).catch(done);
    };

    for (let i = 0; i < filepaths.length; i++) {
      stream.write(i);
    }

    return stream;
  }

  _getEntry(filepath, pattern, options) {
    return this._getStat(filepath).then(stats => this._makeEntry(stats, pattern)).catch(error => {
      if (options.errorFilter(error)) {
        return null;
      }

      throw error;
    });
  }

  _getStat(filepath) {
    return new Promise((resolve, reject) => {
      this._stat(filepath, this._fsStatSettings, (error, stats) => {
        return error === null ? resolve(stats) : reject(error);
      });
    });
  }

}

var _default$b = ReaderStream;

var stream$2 = /*#__PURE__*/Object.defineProperty({
	default: _default$b
}, '__esModule', {value: true});

class Matcher {
  constructor(_patterns, _settings, _micromatchOptions) {
    this._patterns = _patterns;
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this._storage = [];

    this._fillStorage();
  }

  _fillStorage() {
    /**
     * The original pattern may include `{,*,**,a/*}`, which will lead to problems with matching (unresolved level).
     * So, before expand patterns with brace expansion into separated patterns.
     */
    const patterns = utils$1.pattern.expandPatternsWithBraceExpansion(this._patterns);

    for (const pattern of patterns) {
      const segments = this._getPatternSegments(pattern);

      const sections = this._splitSegmentsIntoSections(segments);

      this._storage.push({
        complete: sections.length <= 1,
        pattern,
        segments,
        sections
      });
    }
  }

  _getPatternSegments(pattern) {
    const parts = utils$1.pattern.getPatternParts(pattern, this._micromatchOptions);
    return parts.map(part => {
      const dynamic = utils$1.pattern.isDynamicPattern(part, this._settings);

      if (!dynamic) {
        return {
          dynamic: false,
          pattern: part
        };
      }

      return {
        dynamic: true,
        pattern: part,
        patternRe: utils$1.pattern.makeRe(part, this._micromatchOptions)
      };
    });
  }

  _splitSegmentsIntoSections(segments) {
    return utils$1.array.splitWhen(segments, segment => segment.dynamic && utils$1.pattern.hasGlobStar(segment.pattern));
  }

}

var _default$a = Matcher;

var matcher = /*#__PURE__*/Object.defineProperty({
	default: _default$a
}, '__esModule', {value: true});

class PartialMatcher extends matcher.default {
  match(filepath) {
    const parts = filepath.split('/');
    const levels = parts.length;

    const patterns = this._storage.filter(info => !info.complete || info.segments.length > levels);

    for (const pattern of patterns) {
      const section = pattern.sections[0];
      /**
       * In this case, the pattern has a globstar and we must read all directories unconditionally,
       * but only if the level has reached the end of the first group.
       *
       * fixtures/{a,b}/**
       *  ^ true/false  ^ always true
      */

      if (!pattern.complete && levels > section.length) {
        return true;
      }

      const match = parts.every((part, index) => {
        const segment = pattern.segments[index];

        if (segment.dynamic && segment.patternRe.test(part)) {
          return true;
        }

        if (!segment.dynamic && segment.pattern === part) {
          return true;
        }

        return false;
      });

      if (match) {
        return true;
      }
    }

    return false;
  }

}

var _default$9 = PartialMatcher;

var partial = /*#__PURE__*/Object.defineProperty({
	default: _default$9
}, '__esModule', {value: true});

class DeepFilter {
  constructor(_settings, _micromatchOptions) {
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
  }

  getFilter(basePath, positive, negative) {
    const matcher = this._getMatcher(positive);

    const negativeRe = this._getNegativePatternsRe(negative);

    return entry => this._filter(basePath, entry, matcher, negativeRe);
  }

  _getMatcher(patterns) {
    return new partial.default(patterns, this._settings, this._micromatchOptions);
  }

  _getNegativePatternsRe(patterns) {
    const affectDepthOfReadingPatterns = patterns.filter(utils$1.pattern.isAffectDepthOfReadingPattern);
    return utils$1.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
  }

  _filter(basePath, entry, matcher, negativeRe) {
    if (this._isSkippedByDeep(basePath, entry.path)) {
      return false;
    }

    if (this._isSkippedSymbolicLink(entry)) {
      return false;
    }

    const filepath = utils$1.path.removeLeadingDotSegment(entry.path);

    if (this._isSkippedByPositivePatterns(filepath, matcher)) {
      return false;
    }

    return this._isSkippedByNegativePatterns(filepath, negativeRe);
  }

  _isSkippedByDeep(basePath, entryPath) {
    /**
     * Avoid unnecessary depth calculations when it doesn't matter.
     */
    if (this._settings.deep === Infinity) {
      return false;
    }

    return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
  }

  _getEntryLevel(basePath, entryPath) {
    const entryPathDepth = entryPath.split('/').length;

    if (basePath === '') {
      return entryPathDepth;
    }

    const basePathDepth = basePath.split('/').length;
    return entryPathDepth - basePathDepth;
  }

  _isSkippedSymbolicLink(entry) {
    return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
  }

  _isSkippedByPositivePatterns(entryPath, matcher) {
    return !this._settings.baseNameMatch && !matcher.match(entryPath);
  }

  _isSkippedByNegativePatterns(entryPath, patternsRe) {
    return !utils$1.pattern.matchAny(entryPath, patternsRe);
  }

}

var _default$8 = DeepFilter;

var deep = /*#__PURE__*/Object.defineProperty({
	default: _default$8
}, '__esModule', {value: true});

class EntryFilter {
  constructor(_settings, _micromatchOptions) {
    this._settings = _settings;
    this._micromatchOptions = _micromatchOptions;
    this.index = new Map();
  }

  getFilter(positive, negative) {
    const positiveRe = utils$1.pattern.convertPatternsToRe(positive, this._micromatchOptions);
    const negativeRe = utils$1.pattern.convertPatternsToRe(negative, this._micromatchOptions);
    return entry => this._filter(entry, positiveRe, negativeRe);
  }

  _filter(entry, positiveRe, negativeRe) {
    if (this._settings.unique && this._isDuplicateEntry(entry)) {
      return false;
    }

    if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
      return false;
    }

    if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
      return false;
    }

    const filepath = this._settings.baseNameMatch ? entry.name : entry.path;
    const isMatched = this._isMatchToPatterns(filepath, positiveRe) && !this._isMatchToPatterns(entry.path, negativeRe);

    if (this._settings.unique && isMatched) {
      this._createIndexRecord(entry);
    }

    return isMatched;
  }

  _isDuplicateEntry(entry) {
    return this.index.has(entry.path);
  }

  _createIndexRecord(entry) {
    this.index.set(entry.path, undefined);
  }

  _onlyFileFilter(entry) {
    return this._settings.onlyFiles && !entry.dirent.isFile();
  }

  _onlyDirectoryFilter(entry) {
    return this._settings.onlyDirectories && !entry.dirent.isDirectory();
  }

  _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
    if (!this._settings.absolute) {
      return false;
    }

    const fullpath = utils$1.path.makeAbsolute(this._settings.cwd, entryPath);
    return utils$1.pattern.matchAny(fullpath, patternsRe);
  }

  _isMatchToPatterns(entryPath, patternsRe) {
    const filepath = utils$1.path.removeLeadingDotSegment(entryPath);
    return utils$1.pattern.matchAny(filepath, patternsRe);
  }

}

var _default$7 = EntryFilter;

var entry$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$7
}, '__esModule', {value: true});

class ErrorFilter {
  constructor(_settings) {
    this._settings = _settings;
  }

  getFilter() {
    return error => this._isNonFatalError(error);
  }

  _isNonFatalError(error) {
    return utils$1.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
  }

}

var _default$6 = ErrorFilter;

var error = /*#__PURE__*/Object.defineProperty({
	default: _default$6
}, '__esModule', {value: true});

class EntryTransformer {
  constructor(_settings) {
    this._settings = _settings;
  }

  getTransformer() {
    return entry => this._transform(entry);
  }

  _transform(entry) {
    let filepath = entry.path;

    if (this._settings.absolute) {
      filepath = utils$1.path.makeAbsolute(this._settings.cwd, filepath);
      filepath = utils$1.path.unixify(filepath);
    }

    if (this._settings.markDirectories && entry.dirent.isDirectory()) {
      filepath += '/';
    }

    if (!this._settings.objectMode) {
      return filepath;
    }

    return Object.assign(Object.assign({}, entry), {
      path: filepath
    });
  }

}

var _default$5 = EntryTransformer;

var entry = /*#__PURE__*/Object.defineProperty({
	default: _default$5
}, '__esModule', {value: true});

class Provider {
  constructor(_settings) {
    this._settings = _settings;
    this.errorFilter = new error.default(this._settings);
    this.entryFilter = new entry$1.default(this._settings, this._getMicromatchOptions());
    this.deepFilter = new deep.default(this._settings, this._getMicromatchOptions());
    this.entryTransformer = new entry.default(this._settings);
  }

  _getRootDirectory(task) {
    return path__default['default'].resolve(this._settings.cwd, task.base);
  }

  _getReaderOptions(task) {
    const basePath = task.base === '.' ? '' : task.base;
    return {
      basePath,
      pathSegmentSeparator: '/',
      concurrency: this._settings.concurrency,
      deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
      entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
      errorFilter: this.errorFilter.getFilter(),
      followSymbolicLinks: this._settings.followSymbolicLinks,
      fs: this._settings.fs,
      stats: this._settings.stats,
      throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
      transform: this.entryTransformer.getTransformer()
    };
  }

  _getMicromatchOptions() {
    return {
      dot: this._settings.dot,
      matchBase: this._settings.baseNameMatch,
      nobrace: !this._settings.braceExpansion,
      nocase: !this._settings.caseSensitiveMatch,
      noext: !this._settings.extglob,
      noglobstar: !this._settings.globstar,
      posix: true,
      strictSlashes: false
    };
  }

}

var _default$4 = Provider;

var provider = /*#__PURE__*/Object.defineProperty({
	default: _default$4
}, '__esModule', {value: true});

class ProviderAsync extends provider.default {
  constructor() {
    super(...arguments);
    this._reader = new stream$2.default(this._settings);
  }

  read(task) {
    const root = this._getRootDirectory(task);

    const options = this._getReaderOptions(task);

    const entries = [];
    return new Promise((resolve, reject) => {
      const stream = this.api(root, task, options);
      stream.once('error', reject);
      stream.on('data', entry => entries.push(options.transform(entry)));
      stream.once('end', () => resolve(entries));
    });
  }

  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }

    return this._reader.static(task.patterns, options);
  }

}

var _default$3 = ProviderAsync;

var async = /*#__PURE__*/Object.defineProperty({
	default: _default$3
}, '__esModule', {value: true});

class ProviderStream extends provider.default {
  constructor() {
    super(...arguments);
    this._reader = new stream$2.default(this._settings);
  }

  read(task) {
    const root = this._getRootDirectory(task);

    const options = this._getReaderOptions(task);

    const source = this.api(root, task, options);
    const destination = new stream_1__default['default'].Readable({
      objectMode: true,
      read: () => {}
    });
    source.once('error', error => destination.emit('error', error)).on('data', entry => destination.emit('data', options.transform(entry))).once('end', () => destination.emit('end'));
    destination.once('close', () => source.destroy());
    return destination;
  }

  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }

    return this._reader.static(task.patterns, options);
  }

}

var _default$2 = ProviderStream;

var stream$1 = /*#__PURE__*/Object.defineProperty({
	default: _default$2
}, '__esModule', {value: true});

class ReaderSync extends reader.default {
  constructor() {
    super(...arguments);
    this._walkSync = out$1.walkSync;
    this._statSync = out$3.statSync;
  }

  dynamic(root, options) {
    return this._walkSync(root, options);
  }

  static(patterns, options) {
    const entries = [];

    for (const pattern of patterns) {
      const filepath = this._getFullEntryPath(pattern);

      const entry = this._getEntry(filepath, pattern, options);

      if (entry === null || !options.entryFilter(entry)) {
        continue;
      }

      entries.push(entry);
    }

    return entries;
  }

  _getEntry(filepath, pattern, options) {
    try {
      const stats = this._getStat(filepath);

      return this._makeEntry(stats, pattern);
    } catch (error) {
      if (options.errorFilter(error)) {
        return null;
      }

      throw error;
    }
  }

  _getStat(filepath) {
    return this._statSync(filepath, this._fsStatSettings);
  }

}

var _default$1 = ReaderSync;

var sync$4 = /*#__PURE__*/Object.defineProperty({
	default: _default$1
}, '__esModule', {value: true});

class ProviderSync extends provider.default {
  constructor() {
    super(...arguments);
    this._reader = new sync$4.default(this._settings);
  }

  read(task) {
    const root = this._getRootDirectory(task);

    const options = this._getReaderOptions(task);

    const entries = this.api(root, task, options);
    return entries.map(options.transform);
  }

  api(root, task, options) {
    if (task.dynamic) {
      return this._reader.dynamic(root, options);
    }

    return this._reader.static(task.patterns, options);
  }

}

var _default = ProviderSync;

var sync$3 = /*#__PURE__*/Object.defineProperty({
	default: _default
}, '__esModule', {value: true});

var settings = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;




/**
 * The `os.cpus` method can return zero. We expect the number of cores to be greater than zero.
 * https://github.com/nodejs/node/blob/7faeddf23a98c53896f8b574a6e66589e8fb1eb8/lib/os.js#L106-L107
 */


const CPU_COUNT = Math.max(require$$1__default['default'].cpus().length, 1);
exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
  lstat: fs__default['default'].lstat,
  lstatSync: fs__default['default'].lstatSync,
  stat: fs__default['default'].stat,
  statSync: fs__default['default'].statSync,
  readdir: fs__default['default'].readdir,
  readdirSync: fs__default['default'].readdirSync
};

class Settings {
  constructor(_options = {}) {
    this._options = _options;
    this.absolute = this._getValue(this._options.absolute, false);
    this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
    this.braceExpansion = this._getValue(this._options.braceExpansion, true);
    this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
    this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
    this.cwd = this._getValue(this._options.cwd, process.cwd());
    this.deep = this._getValue(this._options.deep, Infinity);
    this.dot = this._getValue(this._options.dot, false);
    this.extglob = this._getValue(this._options.extglob, true);
    this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
    this.fs = this._getFileSystemMethods(this._options.fs);
    this.globstar = this._getValue(this._options.globstar, true);
    this.ignore = this._getValue(this._options.ignore, []);
    this.markDirectories = this._getValue(this._options.markDirectories, false);
    this.objectMode = this._getValue(this._options.objectMode, false);
    this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
    this.onlyFiles = this._getValue(this._options.onlyFiles, true);
    this.stats = this._getValue(this._options.stats, false);
    this.suppressErrors = this._getValue(this._options.suppressErrors, false);
    this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
    this.unique = this._getValue(this._options.unique, true);

    if (this.onlyDirectories) {
      this.onlyFiles = false;
    }

    if (this.stats) {
      this.objectMode = true;
    }
  }

  _getValue(option, value) {
    return option === undefined ? value : option;
  }

  _getFileSystemMethods(methods = {}) {
    return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
  }

}

exports.default = Settings;
});

async function FastGlob(source, options) {
  assertPatternsInput$1(source);
  const works = getWorks(source, async.default, options);
  const result = await Promise.all(works);
  return utils$1.array.flatten(result);
} // https://github.com/typescript-eslint/typescript-eslint/issues/60
// eslint-disable-next-line no-redeclare


(function (FastGlob) {
  function sync(source, options) {
    assertPatternsInput$1(source);
    const works = getWorks(source, sync$3.default, options);
    return utils$1.array.flatten(works);
  }

  FastGlob.sync = sync;

  function stream(source, options) {
    assertPatternsInput$1(source);
    const works = getWorks(source, stream$1.default, options);
    /**
     * The stream returned by the provider cannot work with an asynchronous iterator.
     * To support asynchronous iterators, regardless of the number of tasks, we always multiplex streams.
     * This affects performance (+25%). I don't see best solution right now.
     */

    return utils$1.stream.merge(works);
  }

  FastGlob.stream = stream;

  function generateTasks(source, options) {
    assertPatternsInput$1(source);
    const patterns = [].concat(source);
    const settings$1 = new settings.default(options);
    return tasks.generate(patterns, settings$1);
  }

  FastGlob.generateTasks = generateTasks;

  function isDynamicPattern(source, options) {
    assertPatternsInput$1(source);
    const settings$1 = new settings.default(options);
    return utils$1.pattern.isDynamicPattern(source, settings$1);
  }

  FastGlob.isDynamicPattern = isDynamicPattern;

  function escapePath(source) {
    assertPatternsInput$1(source);
    return utils$1.path.escape(source);
  }

  FastGlob.escapePath = escapePath;
})(FastGlob || (FastGlob = {}));

function getWorks(source, _Provider, options) {
  const patterns = [].concat(source);
  const settings$1 = new settings.default(options);
  const tasks$1 = tasks.generate(patterns, settings$1);
  const provider = new _Provider(settings$1);
  return tasks$1.map(provider.read, provider);
}

function assertPatternsInput$1(input) {
  const source = [].concat(input);
  const isValidSource = source.every(item => utils$1.string.isString(item) && !utils$1.string.isEmpty(item));

  if (!isValidSource) {
    throw new TypeError('Patterns must be a string (non empty) or an array of strings');
  }
}

var out = FastGlob;

const {
  promisify: promisify$1
} = util__default['default'];



async function isType(fsStatType, statsMethodName, filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof filePath}`);
  }

  try {
    const stats = await promisify$1(fs__default['default'][fsStatType])(filePath);
    return stats[statsMethodName]();
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }

    throw error;
  }
}

function isTypeSync(fsStatType, statsMethodName, filePath) {
  if (typeof filePath !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof filePath}`);
  }

  try {
    return fs__default['default'][fsStatType](filePath)[statsMethodName]();
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }

    throw error;
  }
}

var isFile = isType.bind(null, 'stat', 'isFile');
var isDirectory = isType.bind(null, 'stat', 'isDirectory');
var isSymlink = isType.bind(null, 'lstat', 'isSymbolicLink');
var isFileSync = isTypeSync.bind(null, 'statSync', 'isFile');
var isDirectorySync = isTypeSync.bind(null, 'statSync', 'isDirectory');
var isSymlinkSync = isTypeSync.bind(null, 'lstatSync', 'isSymbolicLink');

var pathType = {
	isFile: isFile,
	isDirectory: isDirectory,
	isSymlink: isSymlink,
	isFileSync: isFileSync,
	isDirectorySync: isDirectorySync,
	isSymlinkSync: isSymlinkSync
};

const getExtensions = extensions => extensions.length > 1 ? `{${extensions.join(',')}}` : extensions[0];

const getPath = (filepath, cwd) => {
  const pth = filepath[0] === '!' ? filepath.slice(1) : filepath;
  return path__default['default'].isAbsolute(pth) ? pth : path__default['default'].join(cwd, pth);
};

const addExtensions = (file, extensions) => {
  if (path__default['default'].extname(file)) {
    return `**/${file}`;
  }

  return `**/${file}.${getExtensions(extensions)}`;
};

const getGlob = (directory, options) => {
  if (options.files && !Array.isArray(options.files)) {
    throw new TypeError(`Expected \`files\` to be of type \`Array\` but received type \`${typeof options.files}\``);
  }

  if (options.extensions && !Array.isArray(options.extensions)) {
    throw new TypeError(`Expected \`extensions\` to be of type \`Array\` but received type \`${typeof options.extensions}\``);
  }

  if (options.files && options.extensions) {
    return options.files.map(x => path__default['default'].posix.join(directory, addExtensions(x, options.extensions)));
  }

  if (options.files) {
    return options.files.map(x => path__default['default'].posix.join(directory, `**/${x}`));
  }

  if (options.extensions) {
    return [path__default['default'].posix.join(directory, `**/*.${getExtensions(options.extensions)}`)];
  }

  return [path__default['default'].posix.join(directory, '**')];
};

var dirGlob = async (input, options) => {
  options = {
    cwd: process.cwd(),
    ...options
  };

  if (typeof options.cwd !== 'string') {
    throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
  }

  const globs = await Promise.all([].concat(input).map(async x => {
    const isDirectory = await pathType.isDirectory(getPath(x, options.cwd));
    return isDirectory ? getGlob(x, options) : x;
  }));
  return [].concat.apply([], globs); // eslint-disable-line prefer-spread
};

var sync$2 = (input, options) => {
  options = {
    cwd: process.cwd(),
    ...options
  };

  if (typeof options.cwd !== 'string') {
    throw new TypeError(`Expected \`cwd\` to be of type \`string\` but received type \`${typeof options.cwd}\``);
  }

  const globs = [].concat(input).map(x => pathType.isDirectorySync(getPath(x, options.cwd)) ? getGlob(x, options) : x);
  return [].concat.apply([], globs); // eslint-disable-line prefer-spread
};
dirGlob.sync = sync$2;

// A simple implementation of make-array
function makeArray(subject) {
  return Array.isArray(subject) ? subject : [subject];
}

const EMPTY = '';
const SPACE = ' ';
const ESCAPE = '\\';
const REGEX_TEST_BLANK_LINE = /^\s+$/;
const REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
const REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
const REGEX_SPLITALL_CRLF = /\r?\n/g; // /foo,
// ./foo,
// ../foo,
// .
// ..

const REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
const SLASH = '/';
const KEY_IGNORE = typeof Symbol !== 'undefined' ? Symbol.for('node-ignore')
/* istanbul ignore next */
: 'node-ignore';

const define = (object, key, value) => Object.defineProperty(object, key, {
  value
});

const REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g; // Sanitize the range of a regular expression
// The cases are complicated, see test cases for details

const sanitizeRange = range => range.replace(REGEX_REGEXP_RANGE, (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match // Invalid range (out of order) which is ok for gitignore rules but
//   fatal for JavaScript regular expression, so eliminate it.
: EMPTY); // See fixtures #59


const cleanRangeBackSlash = slashes => {
  const {
    length
  } = slashes;
  return slashes.slice(0, length - length % 2);
}; // > If the pattern ends with a slash,
// > it is removed for the purpose of the following description,
// > but it would only find a match with a directory.
// > In other words, foo/ will match a directory foo and paths underneath it,
// > but will not match a regular file or a symbolic link foo
// >  (this is consistent with the way how pathspec works in general in Git).
// '`foo/`' will not match regular file '`foo`' or symbolic link '`foo`'
// -> ignore-rules will not deal with it, because it costs extra `fs.stat` call
//      you could use option `mark: true` with `glob`
// '`foo/`' should not continue with the '`..`'


const REPLACERS = [// > Trailing spaces are ignored unless they are quoted with backslash ("\")
[// (a\ ) -> (a )
// (a  ) -> (a)
// (a \ ) -> (a  )
/\\?\s+$/, match => match.indexOf('\\') === 0 ? SPACE : EMPTY], // replace (\ ) with ' '
[/\\\s/g, () => SPACE], // Escape metacharacters
// which is written down by users but means special for regular expressions.
// > There are 12 characters with special meanings:
// > - the backslash \,
// > - the caret ^,
// > - the dollar sign $,
// > - the period or dot .,
// > - the vertical bar or pipe symbol |,
// > - the question mark ?,
// > - the asterisk or star *,
// > - the plus sign +,
// > - the opening parenthesis (,
// > - the closing parenthesis ),
// > - and the opening square bracket [,
// > - the opening curly brace {,
// > These special characters are often called "metacharacters".
[/[\\$.|*+(){^]/g, match => `\\${match}`], [// > a question mark (?) matches a single character
/(?!\\)\?/g, () => '[^/]'], // leading slash
[// > A leading slash matches the beginning of the pathname.
// > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
// A leading slash matches the beginning of the pathname
/^\//, () => '^'], // replace special metacharacter slash after the leading slash
[/\//g, () => '\\/'], [// > A leading "**" followed by a slash means match in all directories.
// > For example, "**/foo" matches file or directory "foo" anywhere,
// > the same as pattern "foo".
// > "**/foo/bar" matches file or directory "bar" anywhere that is directly
// >   under directory "foo".
// Notice that the '*'s have been replaced as '\\*'
/^\^*\\\*\\\*\\\//, // '**/foo' <-> 'foo'
() => '^(?:.*\\/)?'], // starting
[// there will be no leading '/'
//   (which has been replaced by section "leading slash")
// If starts with '**', adding a '^' to the regular expression also works
/^(?=[^^])/, function startingReplacer() {
  // If has a slash `/` at the beginning or middle
  return !/\/(?!$)/.test(this) // > Prior to 2.22.1
  // > If the pattern does not contain a slash /,
  // >   Git treats it as a shell glob pattern
  // Actually, if there is only a trailing slash,
  //   git also treats it as a shell glob pattern
  // After 2.22.1 (compatible but clearer)
  // > If there is a separator at the beginning or middle (or both)
  // > of the pattern, then the pattern is relative to the directory
  // > level of the particular .gitignore file itself.
  // > Otherwise the pattern may also match at any level below
  // > the .gitignore level.
  ? '(?:^|\\/)' // > Otherwise, Git treats the pattern as a shell glob suitable for
  // >   consumption by fnmatch(3)
  : '^';
}], // two globstars
[// Use lookahead assertions so that we could match more than one `'/**'`
/\\\/\\\*\\\*(?=\\\/|$)/g, // Zero, one or several directories
// should not use '*', or it will be replaced by the next replacer
// Check if it is not the last `'/**'`
(_, index, str) => index + 6 < str.length // case: /**/
// > A slash followed by two consecutive asterisks then a slash matches
// >   zero or more directories.
// > For example, "a/**/b" matches "a/b", "a/x/b", "a/x/y/b" and so on.
// '/**/'
? '(?:\\/[^\\/]+)*' // case: /**
// > A trailing `"/**"` matches everything inside.
// #21: everything inside but it should not include the current folder
: '\\/.+'], // intermediate wildcards
[// Never replace escaped '*'
// ignore rule '\*' will match the path '*'
// 'abc.*/' -> go
// 'abc.*'  -> skip this rule
/(^|[^\\]+)\\\*(?=.+)/g, // '*.js' matches '.js'
// '*.js' doesn't match 'abc'
(_, p1) => `${p1}[^\\/]*`], [// unescape, revert step 3 except for back slash
// For example, if a user escape a '\\*',
// after step 3, the result will be '\\\\\\*'
/\\\\\\(?=[$.|*+(){^])/g, () => ESCAPE], [// '\\\\' -> '\\'
/\\\\/g, () => ESCAPE], [// > The range notation, e.g. [a-zA-Z],
// > can be used to match one of the characters in a range.
// `\` is escaped by step 3
/(\\)?\[([^\]/]*?)(\\*)($|\])/g, (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE // '\\[bar]' -> '\\\\[bar\\]'
? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === ']' ? endEscape.length % 2 === 0 // A normal case, and it is a range notation
// '[bar]'
// '[bar\\\\]'
? `[${sanitizeRange(range)}${endEscape}]` // Invalid range notaton
// '[bar\\]' -> '[bar\\\\]'
: '[]' : '[]'], // ending
[// 'js' will not match 'js.'
// 'ab' will not match 'abc'
/(?:[^*])$/, // WTF!
// https://git-scm.com/docs/gitignore
// changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
// which re-fixes #24, #38
// > If there is a separator at the end of the pattern then the pattern
// > will only match directories, otherwise the pattern can match both
// > files and directories.
// 'js*' will not match 'a.js'
// 'js/' will not match 'a.js'
// 'js' will match 'a.js' and 'a.js/'
match => /\/$/.test(match) // foo/ will not match 'foo'
? `${match}$` // foo matches 'foo' and 'foo/'
: `${match}(?=$|\\/$)`], // trailing wildcard
[/(\^|\\\/)?\\\*$/, (_, p1) => {
  const prefix = p1 // '\^':
  // '/*' does not match EMPTY
  // '/*' does not match everything
  // '\\\/':
  // 'abc/*' does not match 'abc/'
  ? `${p1}[^/]+` // 'a*' matches 'a'
  // 'a*' matches 'aa'
  : '[^/]*';
  return `${prefix}(?=$|\\/$)`;
}]]; // A simple cache, because an ignore rule only has only one certain meaning

const regexCache = Object.create(null); // @param {pattern}

const makeRegex = (pattern, negative, ignorecase) => {
  const r = regexCache[pattern];

  if (r) {
    return r;
  } // const replacers = negative
  //   ? NEGATIVE_REPLACERS
  //   : POSITIVE_REPLACERS


  const source = REPLACERS.reduce((prev, current) => prev.replace(current[0], current[1].bind(pattern)), pattern);
  return regexCache[pattern] = ignorecase ? new RegExp(source, 'i') : new RegExp(source);
};

const isString = subject => typeof subject === 'string'; // > A blank line matches no files, so it can serve as a separator for readability.


const checkPattern = pattern => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) // > A line starting with # serves as a comment.
&& pattern.indexOf('#') !== 0;

const splitPattern = pattern => pattern.split(REGEX_SPLITALL_CRLF);

class IgnoreRule {
  constructor(origin, pattern, negative, regex) {
    this.origin = origin;
    this.pattern = pattern;
    this.negative = negative;
    this.regex = regex;
  }

}

const createRule = (pattern, ignorecase) => {
  const origin = pattern;
  let negative = false; // > An optional prefix "!" which negates the pattern;

  if (pattern.indexOf('!') === 0) {
    negative = true;
    pattern = pattern.substr(1);
  }

  pattern = pattern // > Put a backslash ("\") in front of the first "!" for patterns that
  // >   begin with a literal "!", for example, `"\!important!.txt"`.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, '!') // > Put a backslash ("\") in front of the first hash for patterns that
  // >   begin with a hash.
  .replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, '#');
  const regex = makeRegex(pattern, negative, ignorecase);
  return new IgnoreRule(origin, pattern, negative, regex);
};

const throwError = (message, Ctor) => {
  throw new Ctor(message);
};

const checkPath = (path, originalPath, doThrow) => {
  if (!isString(path)) {
    return doThrow(`path must be a string, but got \`${originalPath}\``, TypeError);
  } // We don't know if we should ignore EMPTY, so throw


  if (!path) {
    return doThrow(`path must not be empty`, TypeError);
  } // Check if it is a relative path


  if (checkPath.isNotRelative(path)) {
    const r = '`path.relative()`d';
    return doThrow(`path should be a ${r} string, but got "${originalPath}"`, RangeError);
  }

  return true;
};

const isNotRelative = path => REGEX_TEST_INVALID_PATH.test(path);

checkPath.isNotRelative = isNotRelative;

checkPath.convert = p => p;

class Ignore {
  constructor({
    ignorecase = true
  } = {}) {
    this._rules = [];
    this._ignorecase = ignorecase;
    define(this, KEY_IGNORE, true);

    this._initCache();
  }

  _initCache() {
    this._ignoreCache = Object.create(null);
    this._testCache = Object.create(null);
  }

  _addPattern(pattern) {
    // #32
    if (pattern && pattern[KEY_IGNORE]) {
      this._rules = this._rules.concat(pattern._rules);
      this._added = true;
      return;
    }

    if (checkPattern(pattern)) {
      const rule = createRule(pattern, this._ignorecase);
      this._added = true;

      this._rules.push(rule);
    }
  } // @param {Array<string> | string | Ignore} pattern


  add(pattern) {
    this._added = false;
    makeArray(isString(pattern) ? splitPattern(pattern) : pattern).forEach(this._addPattern, this); // Some rules have just added to the ignore,
    // making the behavior changed.

    if (this._added) {
      this._initCache();
    }

    return this;
  } // legacy


  addPattern(pattern) {
    return this.add(pattern);
  } //          |           ignored : unignored
  // negative |   0:0   |   0:1   |   1:0   |   1:1
  // -------- | ------- | ------- | ------- | --------
  //     0    |  TEST   |  TEST   |  SKIP   |    X
  //     1    |  TESTIF |  SKIP   |  TEST   |    X
  // - SKIP: always skip
  // - TEST: always test
  // - TESTIF: only test if checkUnignored
  // - X: that never happen
  // @param {boolean} whether should check if the path is unignored,
  //   setting `checkUnignored` to `false` could reduce additional
  //   path matching.
  // @returns {TestResult} true if a file is ignored


  _testOne(path, checkUnignored) {
    let ignored = false;
    let unignored = false;

    this._rules.forEach(rule => {
      const {
        negative
      } = rule;

      if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
        return;
      }

      const matched = rule.regex.test(path);

      if (matched) {
        ignored = !negative;
        unignored = negative;
      }
    });

    return {
      ignored,
      unignored
    };
  } // @returns {TestResult}


  _test(originalPath, cache, checkUnignored, slices) {
    const path = originalPath // Supports nullable path
    && checkPath.convert(originalPath);
    checkPath(path, originalPath, throwError);
    return this._t(path, cache, checkUnignored, slices);
  }

  _t(path, cache, checkUnignored, slices) {
    if (path in cache) {
      return cache[path];
    }

    if (!slices) {
      // path/to/a.js
      // ['path', 'to', 'a.js']
      slices = path.split(SLASH);
    }

    slices.pop(); // If the path has no parent directory, just test it

    if (!slices.length) {
      return cache[path] = this._testOne(path, checkUnignored);
    }

    const parent = this._t(slices.join(SLASH) + SLASH, cache, checkUnignored, slices); // If the path contains a parent directory, check the parent first


    return cache[path] = parent.ignored // > It is not possible to re-include a file if a parent directory of
    // >   that file is excluded.
    ? parent : this._testOne(path, checkUnignored);
  }

  ignores(path) {
    return this._test(path, this._ignoreCache, false).ignored;
  }

  createFilter() {
    return path => !this.ignores(path);
  }

  filter(paths) {
    return makeArray(paths).filter(this.createFilter());
  } // @returns {TestResult}


  test(path) {
    return this._test(path, this._testCache, true);
  }

}

const factory = options => new Ignore(options);

const returnFalse = () => false;

const isPathValid = path => checkPath(path && checkPath.convert(path), path, returnFalse);

factory.isPathValid = isPathValid; // Fixes typescript

factory.default = factory;
var ignore = factory; // Windows
// --------------------------------------------------------------

/* istanbul ignore if  */

if ( // Detect `process` so that it can run in browsers.
typeof process !== 'undefined' && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === 'win32')) {
  /* eslint no-control-regex: "off" */
  const makePosix = str => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, '/');

  checkPath.convert = makePosix; // 'C:\\foo'     <- 'C:\\foo' has been converted to 'C:/'
  // 'd:\\foo'

  const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;

  checkPath.isNotRelative = path => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path) || isNotRelative(path);
}

var slash = path => {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(path); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return path;
  }

  return path.replace(/\\/g, '/');
};

const {
  promisify
} = util__default['default'];











const DEFAULT_IGNORE = ['**/node_modules/**', '**/flow-typed/**', '**/coverage/**', '**/.git'];
const readFileP = promisify(fs__default['default'].readFile);

const mapGitIgnorePatternTo = base => ignore => {
  if (ignore.startsWith('!')) {
    return '!' + path__default['default'].posix.join(base, ignore.slice(1));
  }

  return path__default['default'].posix.join(base, ignore);
};

const parseGitIgnore = (content, options) => {
  const base = slash(path__default['default'].relative(options.cwd, path__default['default'].dirname(options.fileName)));
  return content.split(/\r?\n/).filter(Boolean).filter(line => !line.startsWith('#')).map(mapGitIgnorePatternTo(base));
};

const reduceIgnore = files => {
  const ignores = ignore();

  for (const file of files) {
    ignores.add(parseGitIgnore(file.content, {
      cwd: file.cwd,
      fileName: file.filePath
    }));
  }

  return ignores;
};

const ensureAbsolutePathForCwd = (cwd, p) => {
  cwd = slash(cwd);

  if (path__default['default'].isAbsolute(p)) {
    if (slash(p).startsWith(cwd)) {
      return p;
    }

    throw new Error(`Path ${p} is not in cwd ${cwd}`);
  }

  return path__default['default'].join(cwd, p);
};

const getIsIgnoredPredecate = (ignores, cwd) => {
  return p => ignores.ignores(slash(path__default['default'].relative(cwd, ensureAbsolutePathForCwd(cwd, p.path || p))));
};

const getFile = async (file, cwd) => {
  const filePath = path__default['default'].join(cwd, file);
  const content = await readFileP(filePath, 'utf8');
  return {
    cwd,
    filePath,
    content
  };
};

const getFileSync = (file, cwd) => {
  const filePath = path__default['default'].join(cwd, file);
  const content = fs__default['default'].readFileSync(filePath, 'utf8');
  return {
    cwd,
    filePath,
    content
  };
};

const normalizeOptions = ({
  ignore = [],
  cwd = slash(process.cwd())
} = {}) => {
  return {
    ignore,
    cwd
  };
};

var gitignore = async options => {
  options = normalizeOptions(options);
  const paths = await out('**/.gitignore', {
    ignore: DEFAULT_IGNORE.concat(options.ignore),
    cwd: options.cwd
  });
  const files = await Promise.all(paths.map(file => getFile(file, options.cwd)));
  const ignores = reduceIgnore(files);
  return getIsIgnoredPredecate(ignores, options.cwd);
};

var sync$1 = options => {
  options = normalizeOptions(options);
  const paths = out.sync('**/.gitignore', {
    ignore: DEFAULT_IGNORE.concat(options.ignore),
    cwd: options.cwd
  });
  const files = paths.map(file => getFileSync(file, options.cwd));
  const ignores = reduceIgnore(files);
  return getIsIgnoredPredecate(ignores, options.cwd);
};
gitignore.sync = sync$1;

const {
  Transform
} = stream_1__default['default'];

class ObjectTransform extends Transform {
  constructor() {
    super({
      objectMode: true
    });
  }

}

class FilterStream$1 extends ObjectTransform {
  constructor(filter) {
    super();
    this._filter = filter;
  }

  _transform(data, encoding, callback) {
    if (this._filter(data)) {
      this.push(data);
    }

    callback();
  }

}

class UniqueStream$1 extends ObjectTransform {
  constructor() {
    super();
    this._pushed = new Set();
  }

  _transform(data, encoding, callback) {
    if (!this._pushed.has(data)) {
      this.push(data);

      this._pushed.add(data);
    }

    callback();
  }

}

var streamUtils = {
  FilterStream: FilterStream$1,
  UniqueStream: UniqueStream$1
};

const {
  FilterStream,
  UniqueStream
} = streamUtils;

const DEFAULT_FILTER = () => false;

const isNegative = pattern => pattern[0] === '!';

const assertPatternsInput = patterns => {
  if (!patterns.every(pattern => typeof pattern === 'string')) {
    throw new TypeError('Patterns must be a string or an array of strings');
  }
};

const checkCwdOption = (options = {}) => {
  if (!options.cwd) {
    return;
  }

  let stat;

  try {
    stat = fs__default['default'].statSync(options.cwd);
  } catch {
    return;
  }

  if (!stat.isDirectory()) {
    throw new Error('The `cwd` option must be a path to a directory');
  }
};

const getPathString = p => p.stats instanceof fs__default['default'].Stats ? p.path : p;

const generateGlobTasks = (patterns, taskOptions) => {
  patterns = arrayUnion([].concat(patterns));
  assertPatternsInput(patterns);
  checkCwdOption(taskOptions);
  const globTasks = [];
  taskOptions = {
    ignore: [],
    expandDirectories: true,
    ...taskOptions
  };

  for (const [index, pattern] of patterns.entries()) {
    if (isNegative(pattern)) {
      continue;
    }

    const ignore = patterns.slice(index).filter(pattern => isNegative(pattern)).map(pattern => pattern.slice(1));
    const options = { ...taskOptions,
      ignore: taskOptions.ignore.concat(ignore)
    };
    globTasks.push({
      pattern,
      options
    });
  }

  return globTasks;
};

const globDirs = (task, fn) => {
  let options = {};

  if (task.options.cwd) {
    options.cwd = task.options.cwd;
  }

  if (Array.isArray(task.options.expandDirectories)) {
    options = { ...options,
      files: task.options.expandDirectories
    };
  } else if (typeof task.options.expandDirectories === 'object') {
    options = { ...options,
      ...task.options.expandDirectories
    };
  }

  return fn(task.pattern, options);
};

const getPattern = (task, fn) => task.options.expandDirectories ? globDirs(task, fn) : [task.pattern];

const getFilterSync = options => {
  return options && options.gitignore ? gitignore.sync({
    cwd: options.cwd,
    ignore: options.ignore
  }) : DEFAULT_FILTER;
};

const globToTask = task => glob => {
  const {
    options
  } = task;

  if (options.ignore && Array.isArray(options.ignore) && options.expandDirectories) {
    options.ignore = dirGlob.sync(options.ignore);
  }

  return {
    pattern: glob,
    options
  };
};

var globby = async (patterns, options) => {
  const globTasks = generateGlobTasks(patterns, options);

  const getFilter = async () => {
    return options && options.gitignore ? gitignore({
      cwd: options.cwd,
      ignore: options.ignore
    }) : DEFAULT_FILTER;
  };

  const getTasks = async () => {
    const tasks = await Promise.all(globTasks.map(async task => {
      const globs = await getPattern(task, dirGlob);
      return Promise.all(globs.map(globToTask(task)));
    }));
    return arrayUnion(...tasks);
  };

  const [filter, tasks] = await Promise.all([getFilter(), getTasks()]);
  const paths = await Promise.all(tasks.map(task => out(task.pattern, task.options)));
  return arrayUnion(...paths).filter(path_ => !filter(getPathString(path_)));
};

var sync = (patterns, options) => {
  const globTasks = generateGlobTasks(patterns, options);
  const tasks = [];

  for (const task of globTasks) {
    const newTask = getPattern(task, dirGlob.sync).map(globToTask(task));
    tasks.push(...newTask);
  }

  const filter = getFilterSync(options);
  let matches = [];

  for (const task of tasks) {
    matches = arrayUnion(matches, out.sync(task.pattern, task.options));
  }

  return matches.filter(path_ => !filter(path_));
};

var stream = (patterns, options) => {
  const globTasks = generateGlobTasks(patterns, options);
  const tasks = [];

  for (const task of globTasks) {
    const newTask = getPattern(task, dirGlob.sync).map(globToTask(task));
    tasks.push(...newTask);
  }

  const filter = getFilterSync(options);
  const filterStream = new FilterStream(p => !filter(p));
  const uniqueStream = new UniqueStream();
  return merge2_1(tasks.map(task => out.stream(task.pattern, task.options))).pipe(filterStream).pipe(uniqueStream);
};

var generateGlobTasks_1 = generateGlobTasks;

var hasMagic = (patterns, options) => [].concat(patterns).some(pattern => out.isDynamicPattern(pattern, options));

var gitignore_1 = gitignore;
globby.sync = sync;
globby.stream = stream;
globby.generateGlobTasks = generateGlobTasks_1;
globby.hasMagic = hasMagic;
globby.gitignore = gitignore_1;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}

var DeveloperConsole =
/** @class */
function () {
  function DeveloperConsole(options) {
    if (options === void 0) {
      options = {};
    }

    this.name = options.name;
    this.styleSheet = "\n      background-color: " + (options.backgroundColor || 'darkgrey') + ";\n      border-radius: 2px;\n      color: " + (options.color || 'white') + ";\n      line-height: 1.5;\n      padding: 1px 4px;\n      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);\n    ";
  }

  DeveloperConsole.prototype.__console__ = function (type) {
    var _a;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    if (!(atom === null || atom === void 0 ? void 0 : atom.inDevMode())) return;
    args.unshift("%c" + this.name + "%c", this.styleSheet, '');

    (_a = window.console)[type].apply(_a, args);
  };

  DeveloperConsole.prototype.debug = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['debug'], data));
  };

  DeveloperConsole.prototype.error = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['error'], data));
  };

  DeveloperConsole.prototype.info = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['info'], data));
  };

  DeveloperConsole.prototype.log = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['log'], data));
  };

  DeveloperConsole.prototype.trace = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['trace'], data));
  };

  DeveloperConsole.prototype.warn = function () {
    var data = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      data[_i] = arguments[_i];
    }

    this.__console__.apply(this, __spreadArray(['warn'], data));
  };

  return DeveloperConsole;
}();

var Logger = new DeveloperConsole({
  name: meta.name,
  backgroundColor: 'sienna'
});

var Signal = {
  busySignal: null,
  serviceName: 'busy-signal',
  // eslint-disable-next-line
  consumer: function (registry) {
    var _this = this;

    this.busySignal = registry.create();
    return new atom$1.Disposable(function () {
      _this.busySignal = null;
    });
  },
  add: function (message) {
    try {
      this.busySignal.add(message);
    } catch (error) {
      Logger.log('Busy Signal has failed', error);
    }
  },
  remove: function (message) {
    if (message === void 0) {
      message = '';
    }

    try {
      this.busySignal.remove(message);
    } catch (error) {
      Logger.log('Busy Signal has failed', error);
    }
  },
  clear: function () {
    try {
      this.busySignal.clear();
    } catch (error) {
      Logger.log('Busy Signal has failed', error);
    }
  },
  dispose: function () {
    try {
      this.busySignal.dispose();
    } catch (error) {
      Logger.log('Busy Signal has failed', error);
    }
  }
};

function deleteOutdatedData() {
  return __awaiter(this, void 0, void 0, function () {
    var developer, dotApmFolder, globbyOptions;

    var _this = this;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          developer = getConfig('developer');

          if (atom.inDevMode() && developer['autoOpenConsole']) {
            atom.openDevTools();
          }

          if (atom.inDevMode() && developer['autoClearConsole']) {
            console.clear();
          }

          Signal.add('Deleting .apm data');
          return [4
          /*yield*/
          , getDotApmFolder()];

        case 1:
          dotApmFolder = _a.sent();
          globbyOptions = {
            cwd: dotApmFolder,
            onlyFiles: false,
            deep: 0
          };
          return [4
          /*yield*/
          , globby('*', globbyOptions)];

        case 2:
          _a.sent().filter(function (item) {
            return !item.startsWith('.') && !item.startsWith('_') && !item.startsWith('@');
          }).map(function (item) {
            return __awaiter(_this, void 0, void 0, function () {
              var dirPath, versions, _a, _b, outdatedVersions;

              var _this = this;

              return __generator(this, function (_c) {
                switch (_c.label) {
                  case 0:
                    dirPath = path.join(dotApmFolder, item);
                    return [4
                    /*yield*/
                    , isDirectory$1(dirPath)];

                  case 1:
                    _a = _c.sent();
                    if (!_a) return [3
                    /*break*/
                    , 3];
                    return [4
                    /*yield*/
                    , fs$2.promises.readdir(dirPath)];

                  case 2:
                    _a = _c.sent();
                    _c.label = 3;

                  case 3:
                    versions = _a;

                    if (!(versions === null || versions === void 0 ? void 0 : versions.length)) {
                      Logger.log("Skipping " + item);
                      return [2
                      /*return*/
                      ];
                    }

                    _b = splitVersions(Array.from(versions)), outdatedVersions = _b[1];

                    if (!(outdatedVersions === null || outdatedVersions === void 0 ? void 0 : outdatedVersions.length)) {
                      Logger.log('Nothing deleted');
                      return [2
                      /*return*/
                      ];
                    }

                    outdatedVersions.map(function (version) {
                      return __awaiter(_this, void 0, void 0, function () {
                        var dirPath, err_1;
                        return __generator(this, function (_a) {
                          switch (_a.label) {
                            case 0:
                              dirPath = path.join(dotApmFolder, item, version);
                              return [4
                              /*yield*/
                              , isDirectory$1(dirPath)];

                            case 1:
                              if (!_a.sent()) return [3
                              /*break*/
                              , 5];
                              Logger.log("Deleting " + dirPath);
                              _a.label = 2;

                            case 2:
                              _a.trys.push([2, 4,, 5]);

                              return [4
                              /*yield*/
                              , fs$2.promises.rmdir(dirPath, {
                                maxRetries: 5,
                                recursive: true
                              })];

                            case 3:
                              _a.sent();

                              return [3
                              /*break*/
                              , 5];

                            case 4:
                              err_1 = _a.sent();
                              Logger.error(err_1);
                              return [3
                              /*break*/
                              , 5];

                            case 5:
                              return [2
                              /*return*/
                              ];
                          }
                        });
                      });
                    });
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          });

          Signal.remove('Deleting .apm data');
          return [2
          /*return*/
          ];
      }
    });
  });
}

function deleteOutdateStorageData() {
  return __awaiter(this, void 0, void 0, function () {
    var installedPackages;
    return __generator(this, function (_a) {
      installedPackages = atom.packages.getAvailablePackageNames();
      Signal.add('Deleting storage items');
      installedPackages.map(function (packageName) {
        var storageData = Object.keys(localStorage).filter(function (item) {
          return item.startsWith("installed-packages:" + packageName + ":");
        });
        var packageVersions = new Set();
        storageData.map(function (data) {
          packageVersions.add(data.split(':')[2]);
        });

        var _a = splitVersions(Array.from(packageVersions)),
            latestVersion = _a[0],
            outdatedVersions = _a[1];

        if (latestVersion && outdatedVersions) {
          outdatedVersions.map(function (outdatedVersion) {
            var storageData = Object.keys(localStorage).filter(function (item) {
              return item.startsWith("installed-packages:" + packageName + ":" + outdatedVersion);
            });
            storageData.map(function (storageItem) {
              Logger.log("Deleting storage item: " + storageItem);
              localStorage.removeItem(storageItem);
            });
          });
        }
      });
      Signal.remove('Trashman is deleting storage items');
      return [2
      /*return*/
      ];
    });
  });
}

var PackageControl = {
  config: configSchema,
  subscriptions: new atom$1.CompositeDisposable(),
  activate: function () {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;

      return __generator(this, function (_a) {
        Logger.log('Activating package'); // Register commands

        this.subscriptions.add(atom.commands.add('atom-workspace', {
          'trashman:delete-outdated-package-data': function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , deleteOutdatedData()];

                  case 1:
                    _a.sent();

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }
        }), atom.commands.add('atom-workspace', {
          'trashman:delete-outdated-storage-data': function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4
                    /*yield*/
                    , deleteOutdateStorageData()];

                  case 1:
                    _a.sent();

                    return [2
                    /*return*/
                    ];
                }
              });
            });
          }
        }));
        return [2
        /*return*/
        ];
      });
    });
  },
  deactivate: function () {
    var _a;

    Logger.log('Deactivating package');
    (_a = this.subscriptions) === null || _a === void 0 ? void 0 : _a.dispose();
  },
  consumeSignal: function (registry) {
    Logger.log('Consuming Busy Signal service');
    Signal.consumer(registry);
  }
};

module.exports = PackageControl;
//# sourceMappingURL=trashman.js.map
