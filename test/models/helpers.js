'use strict';
var { expect, assert } = require('chai');

var now = new Date();

var valid = {
  _entry1Title = 'Valid Entries have titles',
  entry1 = {
    id: 999,
    title: this._entry1Title,
    markdown: 'This is a paragragh',
    html: `<h1>${this._entry1Title}</h1>\n<p>This is a paragraph</p>`,
    tags: null,
    created: now,
    last_edited: null
  },

  _entry2Title = 'Titles can contain \'\!\@\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\|',
  entry2 = {
    id: 1000,
    title: this._entry2Title,
    markdown: 'This is a paragraph',
    html: `<h1>${this._entry2Title}</h1>\n<p>This is a paragraph</p>`,
    tags: null,
    created: now,
    last_edited: now
  }
};

var invalid = {
  _entry1Title = 'Titles can\'t contain \#',
  entry1 = {
    id: 1001,
    title: this._entry1Title,
    markdown: 'This is a paragraph',
    html: `<h1>${this._entry1Title}</h1>\n<p>This is a paragraph</p>`,
    tags: null,
    created: now,
    last_edited: now
  },

  _entry2Title = 'Entry created date must be before or equal to the last_edited',
  entry2 = {
    id: 1002,
    title: this._entry2Title,
    markdown: 'This is a paragraph',
    html: `<h1>${this._entry2Title}</h1>\n<p>This is a paragraph</p>`,
    tags: null,
    created: now,
    last_edited: new Date(1) // Creates a datetime stamp 1 millisecond after epoch
  },

  _entry3Title = 'Entry ',
  entry3 = {
    id: 1003,
    title: this._entry3Title,
    markdown: 'This is a paragraph',
    html: `<h1>${this._entry3Title}</h1>\n<p>This is a paragraph</p>`,
    tags: null,
    created: now,
    last_edited: null;
  }
};

module.exports = {
  validateBlogEntryTest: function(blogEntry) {
    it('Should return true if the blog entry is valid and false if it isn\'t', (blogEntry) => {


    });
    // if(typeof blogEntry.title != 'undefined' && blogEntry.markdown != 'undefined') {
    //
    // }
  },

  validateProjectEntryTest: function() {
    it('Should return true if the project entry is valid and false if it isn\'t', () => {

    });
  }
}
