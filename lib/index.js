
var sqwish = require('sqwish');
var detect = require('language-classifier');
var html = require('html-minifier');
var uglify = require('uglify-js');

/**
 * Minify a `string` of an unknown language.
 *
 * @param {String} string
 * @return {String}
 */

module.exports = exports = function minify (string) {
  var lang = detect(string);
  var fn = exports[lang];
  if (!fn) throw new Error('Unsupported language: ' + lang);
  return fn(string);
};

/**
 * Minify a Javascript `string`.
 *
 * @param {String} string
 * @return {String}
 */

exports.js =
exports.javascript = function (string) {
  return uglify.minify(string, { fromString: true }).code;
};

/**
 * Minify a CSS `string`.
 *
 * @param {String} string
 * @return {String}
 */

exports.css = function (string) {
  return sqwish.minify(string);
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