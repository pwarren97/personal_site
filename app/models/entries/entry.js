'use strict';

class Entry {
  constructor(title, markdown, tags) {
    validateConstructorParameters(title, markdown, tags, created = new Date(), last_edited = null);
    this._id = 0;
    this.title = title;
    this.markdown = markdown;
    this.created = created;
    this.last_edited = last_edited;
  }
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
