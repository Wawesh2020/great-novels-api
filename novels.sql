CREATE DATABASE books;

CREATE USER 'books'@'localhost' IDENTIFIED BY 'bo0K$!';

GRANT ALL ON books.* TO 'books'@'localhost';

USE books;

CREATE TABLE authors (
    id INT auto_increment,
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME, 
  PRIMARY KEY(id)
);

CREATE TABLE novels (
  id INT auto_increment,
  title VARCHAR(255),
  authorId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME, 
  PRIMARY KEY(id),
  FOREIGN KEY(authorId) REFERENCES authors(id)
);

CREATE TABLE genres (
  id INT auto_increment,
  name VARCHAR(255),
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME, 
  PRIMARY KEY(id)
 );

CREATE TABLE novelsGenres (
  genreId INT,
  novelId INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME, 
  FOREIGN KEY(genreId) REFERENCES genres(id),
  FOREIGN KEY(novelId) REFERENCES novels(id)
  
 );

INSERT INTO authors (name) VALUES ("Bram Stoker");
INSERT INTO authors (name) VALUES ("Oscar Wilde");
INSERT INTO authors (name) VALUES ("Alice Walker");
INSERT INTO authors (name) VALUES ("Leo Tolstoy");
INSERT INTO authors (name) VALUES ("Charles Dickens");
INSERT INTO authors (name) VALUES ("Arthur Miller");
INSERT INTO authors (name) VALUES ("Alexandre Dumas");
INSERT INTO authors (name) VALUES ("Arthur  Doyle");
INSERT INTO authors (name) VALUES ("Robert  Stevenson");
INSERT INTO authors (name) VALUES ("Fyodor Dostoyevsky");
INSERT INTO authors (name) VALUES ("Agatha Christie");
INSERT INTO authors (name) VALUES ("Ray Bradbury");
INSERT INTO authors (name) VALUES ("George Orwell");
INSERT INTO authors (name) VALUES ("H.G. Wells");
INSERT INTO authors (name) VALUES ("Chinua Achebe");

INSERT INTO novels (title, authorId) VALUES ("Dracula", 1);
INSERT INTO novels (title, authorId) VALUES ("The Picture of Dorian Gray", 2);
INSERT INTO novels (title, authorId) VALUES ("The Color Purple","Alice Walker", 3);
INSERT INTO novels (title, authorId) VALUES ("War and Peace", 4);
INSERT INTO novels (title, authorId) VALUES ("A Tale of Two Cities", 5);
INSERT INTO novels (title, authorId) VALUES ("The Crucible", 6);
INSERT INTO novels (title, authorId) VALUES ("The Three Musketeers", 7);
INSERT INTO novels (title, authorId) VALUES ("The Hound of the Baskervilles", 8);
INSERT INTO novels (title, authorId) VALUES ("The Strange Case of Dr. Jekyll and Mr. Hyde", 9);
INSERT INTO novels (title, authorId) VALUES ("Crime and Punishment", 10);
INSERT INTO novels (title, authorId) VALUES ("Murder on the Orient Express", 11);
INSERT INTO novels (title, authorId) VALUES ("Fahrenheit 451", 12);
INSERT INTO novels (title, authorId) VALUES ("Animal Farm", 13);
INSERT INTO novels (title, authorId) VALUES ("The Time Machine", 14);
INSERT INTO novels (title, authorId) VALUES ("Things Fall Apart", 15);

INSERT INTO genres (name) VALUES ("Fiction,Horror,Fantasy");
INSERT INTO genres (name) VALUES ("Fiction,Horror,Gothic,Fantasy");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction,War,Russian Literature");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction,Adventure,French Literature");
INSERT INTO genres (name) VALUES ("Fiction,Mystery,Crime,Thriller");
INSERT INTO genres (name) VALUES ("Fiction,Mystery,Science Fiction,Horror");
INSERT INTO genres (name) VALUES ("Fiction,Russian Literature,Mystery");
INSERT INTO genres (name) VALUES ("Fiction,Mystery");
INSERT INTO genres (name) VALUES ("Fiction,Science Fiction,Dystopia");
INSERT INTO genres (name) VALUES ("Fiction,Science Fiction,Dystopia");
INSERT INTO genres (name) VALUES ("Fiction,Science Fiction,Time Travel");
INSERT INTO genres (name) VALUES ("Fiction,Historical Fiction,African Literature");

INSERT INTO novelsGenres (genreId, novelId) VALUES (1, 1);
INSERT INTO novelsGenres (genreId, novelId) VALUES (2, 2);
INSERT INTO novelsGenres (genreId, novelId) VALUES (3, 3);
INSERT INTO novelsGenres (genreId, novelId) VALUES (4,4);
INSERT INTO novelsGenres (genreId, novelId) VALUES (5,5);
INSERT INTO novelsGenres (genreId, novelId) VALUES (6,6);
INSERT INTO novelsGenres (genreId, novelId) VALUES (7,7);
INSERT INTO novelsGenres (genreId, novelId) VALUES (8,8);
INSERT INTO novelsGenres (genreId, novelId) VALUES (9,9);
INSERT INTO novelsGenres (genreId, novelId) VALUES (10,10);
INSERT INTO novelsGenres (genreId, novelId) VALUES (11,11);
INSERT INTO novelsGenres (genreId, novelId) VALUES (12,12);
INSERT INTO novelsGenres (genreId, novelId) VALUES (13,13);
INSERT INTO novelsGenres (genreId, novelId) VALUES (14,14);
INSERT INTO novelsGenres (genreId, novelId) VALUES (15,15);
