'use strict';

const assert = require('assert');

exports.warn = msg => {
  assert.fail(`\n\n\x1B[31mvue-router-invoke-webpack-plugin:${msg} \x1b[39m\n`);
};

exports.tips = msg => {
  // eslint-disable-next-line
  console.log(`\n\n\x1B[31mvue-router-invoke-webpack-plugin:${msg} \x1b[39m\n`);
};

exports.firstLowerCase = ([first, ...rest]) => {
  if (first === '_') {
    return first + rest.shift().toLowerCase() + rest.join('');
  } else {
    return first.toLowerCase() + rest.join('');
  }
};

exports.replaceAlias = (str, dir) => {
  return str.replace(new RegExp(dir, 'i'), '');
};

exports.replaceVue = str => str.replace(/\.vue/g, '');

exports.camelize = str =>
  str.replace(/[-](\w)/g, (_, c, i) => {
    return i === 0 ? `:${c}` : `_${c}`;
  });

exports.makeMap = str => {
  const map = Object.create(null);
  const list = str.split(',');
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return val => map[val];
};

exports.replaceArtificialDynamic = str => str.replace(/:/g, '');

exports.diff = (a, b) => {
  const aSet = new Set(a);
  return b.filter(v => !aSet.has(v));
};
