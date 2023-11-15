CREATE DATABASE songs_dev;

\c songs_dev

DROP TABLE songs ;
CREATE TABLE songs
(
     id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT, 
 is_favorite BOOLEAN);