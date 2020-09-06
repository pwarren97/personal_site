'use strict';

var { Converter } = require('showdown');
const converter = new Converter();

class Entry {
  constructor(title, markdown, tags) {
    validateConstructorParameters(title, markdown, tags=null, created = new Date(), last_edited = null);
    this._id = 0;
    this.title = title;
    this.markdown = markdown;
    this.tags = tags;
    this.created = created;
    this.last_edited = last_edited;
  }

  renderHTML() {
    this.markdown = cleanMarkdown(this.markdown);
    this._html = converter(this.markdown);
    this._html = cleanHTML(this._html);
  }
}

// not sure this set up works
// should output certain things as html entities
function cleanMarkdown(markdown) {
  return markdown;
}

// should ensure scripts don't execute
function cleanHTML(html) {
  return html;
}

function validateConstructorParameters(title, markdown, tags) {
  // Title must be string
  if (typeof title !== 'string') {
    throw 'Title parameter must be a string';
  }

  // Markdown must be string
  if (typeof markdown !== 'string') {
    throw 'Markdown parameter must be a string';
  }

  // Tags array must contain strings
  if (typeof tags !== 'array') {
    throw 'Tags parameter must be an array';
  }
  for (var c = 0; c < tags.length; c++) {
    if (tags[c] !== 'string') {
      throw `All tag items must be string, error with item ${String(tags[c])}`
    }
  }
}

module.export = Entry;
