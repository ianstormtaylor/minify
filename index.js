
var js = require('uglify-js');
var css = require('sqwish');
var html = require('html-minifier');

/**
 * Minify a Javascript `string`.
 *
 * @param {String} string
 * @return {String}
 */

exports.js =
exports.javascript = function (string) {
  return js.minify(string, { fromString: true }).code;
};

/**
 * Minify a CSS `string`.
 *
 * @param {String} string
 * @return {String}
 */

exports.css = function (string) {
  return css.minify(string);
};

/**
 * Minify an HTML `string`.
 *
 * @param {String} string
 * @return {String}
 */

exports.html = function (string) {
  return html.minify(string);
};