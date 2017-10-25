-- \c KRISTINTAKEHARA

-- DROP DATABASE IF EXISTS message_bored;
-- DROP USER IF EXISTS bored;

-- CREATE USER bored
-- WITH ENCRYPTED PASSWORD 'password';

-- CREATE DATABASE message_bored
-- WITH OWNER bored;

-- \c message_bored;

-- CREATE TABLE Users (
-- id          INTEGER         NOT NULL DEFAULT NEXTVAL('"Users_id_seq"'::regclass),
-- name        VARCHAR(255)    NOT NULL,
-- createdAt   TIMESTAMPTZ     NOT NULL,
-- updatedAt   TIMESTAMPTZ     NOT NULL
-- );


-- DROP INDEX IF EXISTS Users_pkey;
-- DROP INDEX IF EXISTS Users_name_key;
-- -- add indexes
-- CREATE INDEX Users_pkey PRIMARY KEY
-- ON Users(id);

-- CREATE UNIQUE INDEX Users_name_key
-- ON Users(name);

-- -- -----------------------------
-- CREATE TABLE Topics(
-- id            INTEGER        NOT NULL DEFAULT NEXTVAL('"Topics_id_seq"'::regclass),
-- name          VARCHAR(255)   NOT NULL,
-- createdAt     TIMESTAMPTZ    NOT NULL,
-- updatedAt     TIMESTAMPTZ    NOT NULL,
-- created_by    INTEGER        NOT NULL
-- );

-- DROP INDEX IF EXISTS Topics_pkey;
-- DROP INDEX IF EXISTS Topics_name_key;
-- -- add indexes
-- CREATE INDEX Topics_pkey PRIMARY KEY
-- ON Topics(id);

-- CREATE UNIQUE INDEX Topics_name_key
-- ON Topics(name);

-- -- add references
-- ALTER TABLE Topics
-- CONSTRAINT Topics_created_by_fkey
-- FOREIGN KEY (created_by) REFERENCES Users(id) ON UPDATE CASCADE;

-- -- -----------------------------
-- CREATE TABLE Messages(
-- id            INTEGER       NOT NULL DEFAULT NEXTVAL(Messages_id_seq::regclass),
-- body          TEXT          NOT NULL,
-- createdAt     TIMESTAMPTZ   NOT NULL,
-- updatedAt     TIMESTAMPTZ   NOT NULL,
-- author_id     INTEGER       NOT NULL,
-- topic_id      INTEGER       NOT NULL
-- );

-- DROP INDEX IF EXISTS Messages_pkey;

-- CREATE INDEX Messages_pkey PRIMARY KEY
-- ON Messages(id);

-- -- add references
-- ALTER TABLE Messages
-- CONSTRAINT Messages_author_id_fkey
-- FOREIGN KEY (author_id) REFERENCES Users(id) ON UPDATE CASCADE;

-- ALTER TABLE Messages
-- CONSTRAINT Messages_topic_id_fkey
-- FOREIGN KEY (topic_id) REFERENCES Topics(id) ON UPDATE CASCADE;