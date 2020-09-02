var { expect, assert } = require('chai');

module.exports = {
  validateBlogEntryTest: function(blogEntry) {
    it('Should return true if the blog entry is valid and false if it isn\'t', (blogEntry) => {
      validEntry1title = 'Valid Entries have this as a title'
      validEntry1 = {
        title: validEntry1Title,
        markdown: 'This is a paragragh',
        html: '<h1>${validEntry1Title}</h1>\n<p>This is a paragraph</p>',
        tags: null,
      };
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
