DROP DATABASE IF EXISTS watchbuddy;

CREATE DATABASE watchbuddy;

USE watchbuddy;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(190) UNIQUE, -- set username to be unique
  password varchar(64),
  salt varchar(64),
  showtitle int,
  season int,
  episode int,
  start DATE,
  deadline DATE,
  monday int DEFAULT 0,
  tuesday int DEFAULT 0,
  wednesday int DEFAULT 0,
  thursday int DEFAULT 0,
  friday int DEFAULT 0,
  saturday int DEFAULT 0,
  sunday int DEFAULT 0,
  hours int,
  PRIMARY KEY (ID)
);

CREATE TABLE clicks (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  movie_id varchar(60) NOT NULL,
  time timestamp NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE favorites (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  movie_id varchar(60) NOT NULL,
  time timestamp NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE userProfile (
  user_id int NOT NULL,
  description varchar(5000) NOT NULL,
  PRIMARY KEY (user_id)
);

-- CREATE TABLE shows (
--   show_id int NOT NULL AUTO_INCREMENT,
--   title varchar(255),
--   season int,
--   episode int,
--   user_id int,
--   FOREIGN KEY (user_id) REFERENCES user(id)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
