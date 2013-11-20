
var assert = require('assert');
var minify = require('..');

describe('minify', function () {
  it('should minify javascript', function () {
    var js = minify.js('function name () {};');
    assert(js === 'function name(){}');
  });

  it('should minify css', function () {
    var css = minify.css('body { color: black; }');
    assert(css === 'body{color:black}');
  });

  it('should minify html', function () {
    var html = minify.html('<div class="thing    "></div>');
    assert(html === '<div class="thing"></div>');
  });
});

