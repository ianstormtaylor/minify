
# minify

  Simple, clean API for minifying Javascript, HTML or CSS.

## Installation

    $ npm install segmentio/minify

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

  (The MIT License)

  Copyright (c) 2013 segmentio &lt;friends@segment.io&gt;

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.