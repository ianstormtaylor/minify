
# minify

  Simple, clean API for minifying Javascript, HTML or CSS.

## Installation

    $ npm install ianstormtaylor/minify

## Example

```javascript
var minify = require('minify');

// javascript, html or css
var js = minify.js('string');
var html = minify.html('string');
var css = minify.css('string');
```

## API

### minify.js(string)

  Returns the minified Javascript from the source `string`. Aliased to `.javascript` too.

### minify.html(string)

  Returns the minified HTML from the source `string`.

### minify.css(string)

  Returns the minified CSS from the source `string`.

## License
  
  MIT