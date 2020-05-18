# import-sort-style-jf

Sorting imports the way Josh likes them :)

## Usage
- Install [import-sort](https://github.com/renke/import-sort) in one of the provided ways (Code, Vim, Atom, CLI)
- Install this package: `npm install -D @chuckhendo/import-sort-style-jf` 
- Add a key to package.json or to a .importsortrc file
```json
"importSort": {
  ".js, .jsx, .es6, .es, .mjs, .ts, .tsx": {
    "style": "jf"
  }
}
```
- Rejoice in sorted imports

## Example sort
```javascript
import "foo";
import * as bar from "bar";
import * as foo from "foo";
import bar2 from "bar2";
import foo2 from "foo2";
import { bar3, baz } from "barbaz";
import { foo3 } from "foo3";
```