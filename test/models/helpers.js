'use strict';
var { expect, assert } = require('chai');
var { Entry } = require('../../app/models/entries/entry.js')

var now = new Date();

var validMarkdown = 'This is a paragraph';
var validTags = ['security', 'web development'];

// list of valid entries to test
var valid = {
  entry1: new Entry(
                'Valid Entries have titles',
                validMarkdown,
                validTags
               ),
  entry2: new Entry(
                'Titles can contain \'\!\@\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\|',
                validParagraph,
                created = now,
                last_edited = now
               )
};

// list of invalid entries to test
var invalid = {
  entry1: new Entry(
                'Titles can\'t contain \#',
                validMarkdown,
                created = now,
                last_edited = now
               ),
  entry2: new Entry(
                'Entry created date must be before or equal to the last_edited',
                validMarkdown,
                created = now,
                last_edited = new Date(1) // Creates a datetime stamp 1 millisecond after epoch
               ),
  entry3: new Entry(
                'Entry that does stuff',
                validMarkdown
               )
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
