
var assert = require('assert');
var exec = require('child_process').exec;
var fs = require('fs');
var minify = require('..');
var path = require('path');

/**
 * Languages.
 */

var langs = [
  'css',
  'javascript',
  'html'
];

/**
 * Node API.
 */

describe('minify', function () {
  langs.forEach(function (lang) {
    var min = fixture(lang + '.min');
    var max = fixture(lang + '.max');

    it(lang, function () {
      assert.equal(min, minify[lang](max));
    });

    it(lang + ' (unknown)', function() {
      assert.equal(min, minify(max));
    });
  });
});

/**
 * CLI.
 */

describe('cli', function () {
  afterEach(function (done) {
    exec('rm -rf output', done);
  });

  langs.forEach(function (lang) {
    it(lang, function (done) {
      var min = fixture(lang + '.min');
      exec('bin/minify < test/fixtures/' + lang + '.max', function (err, stdout) {
        if (err) return done(err);
        assert(stdout == min);
        done();
      });
    });
  });
});

/**
 * Read a fixture by name.
 *
 * @param {String} name
 */

function fixture (name) {
  var filename = path.resolve(__dirname, 'fixtures', name);
  return fs.readFileSync(filename, 'utf8');
}