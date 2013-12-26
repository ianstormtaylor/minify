
# minify

  Simple, clean API for minifying Javascript, HTML or CSS.

## Installation

    $ npm install ianstormtaylor/minify

## Command Line API

```
Usage: minify [<input>] [<output>]

Options:

  -h, --help     output usage information
  -V, --version  output the version number

Examples:

  # pass an input and output file
  $ minify input.css output.css

  # use stdin and stdout
  $ cat input.css | myth | minify > output.css
```

## Node API

```javascript
var minify = require('minify');

// javascript, html or css
var js = minify.js('string');
var html = minify.html('string');
var css = minify.css('string');

// unknown string
var min = minify(string);
```

### minify(string)

  Detect the language of a `string` and use the appropriate minifier to return the minified version. Useful when someone passes in a snippet without a file extension to guess from.

### minify.css(string)

  Returns the minified version of a CSS `string`.

### minify.javascript(string)

  Return the minified version of a Javascript `string`. Aliased to `js`.

### minify.html(string)

  Returns the minified version of an HTML `string`.

## License
  
  MIT