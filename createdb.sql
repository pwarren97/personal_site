CREATE DATABASE personal_site;
USE personal_site;

CREATE TABLE BlogEntries(
  entryID int NOT NULL UNIQUE,
  title VARCHAR(100) NOT NULL UNIQUE,
  markdown LONGTEXT NOT NULL,
  html LONGTEXT NOT NULL,
  tags TINYTEXT NULL,
  created DATETIME NOT NULL,
  last_edited DATETIME NULL,
  PRIMARY KEY (entryID)
);

CREATE TABLE PastProjects(
  projectID int NOT NULL UNIQUE,
  title VARCHAR(100) NOT NULL UNIQUE,
  markdown LONGTEXT NOT NULL,
  html LONGTEXT NOT NULL,
  tags TINYTEXT NULL,
  created DATETIME NOT NULL,
  last_edited DATETIME NULL,
  PRIMARY KEY (projectID)
);
