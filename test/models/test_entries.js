'use strict';

var { expect, assert } = require('chai');
var { Entry } = require('../../app/models/entries/entry.js');

var entry = new Entry('title', 'this is good content', ['security', 'web development']);

describe('Entry', () => {
  describe('contructor', () => {
    it('Should create an entry', () => {
      // var entry = new Entry();
    });
  });
});
