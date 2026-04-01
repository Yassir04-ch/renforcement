CREATE TABlE utilisateurs(){
    id INT AUTO_INCREMANT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
}

CREATE TABLE posts(
    id INT AUTO_INCREMANT PRIMARY KEY,
    date_publication DATETIME,
    contenu TEXT,
    utilisateur_id INT NOT NULL,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
)

CREATE TABLE commentaire (
  id INT AUTO_INCREMENT PRIMARY KEY,
  contenu TEXT NOT NULL,
  utilisateur_id INT NOT NULL,
  publication_id INT NOT NULL,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id),
  FOREIGN KEY (publication_id) REFERENCES posts(id),
);

CREATE TABLE likes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  utilisateur_id INT NOT NULL,
  publication_id INT NOT NULL,
  FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)
  FOREIGN KEY (publication_id) REFERENCES posts(id)
 );

CREATE TABLE hashtags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
 );

CREATE TABLE publication_hashtag(
  publication_id INT NOT NULL,
  hashtag_id INT NOT NULL,
  FOREIGN KEY (publication_id) REFERENCES publication(id)
  FOREIGN KEY (hashtag_id) REFERENCES hashtag(id)
 );

