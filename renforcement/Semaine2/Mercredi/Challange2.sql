 
 CREATE TABlE role(
    id INT AUTOINCREMANT PRIMARY KEY,
    name VARCHAR(50),
 );
 
 CREATE TABLE utilisateurs (
    id INT AUTOINCREMANT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  
    note float, 
    role_id INT  NOT NULL,
    niveau VARCHAR(50),
    FOREIGN KEY(role_id) REFERENCES role(id)
);

CREATE TABLE categories (
    id  INT AUTOINCREMANT  PRIMARY KEY,
    nom VARCHAR(100) ,
    description VARCHAR(255)
);

CREATE TABLE cours(
    id INT AUTOINCREMANT PRIMARY KEY?
    titre VARCHAR(100)?
    price float,
    description VARCHAR(255),
    categorie_id INT  NOT NULL,
    formateur_id INT  NOT NULL,
    date_creation TIMESTAMP,
    FOREIGN KEY(categorie_id) REFERENCES categories(id),
    FOREIGN KEY (formateur_id) REFERENCES utilisateurs(id)
);

CREATE TABlE avis(
    id INT AUTOINCREMANT PRIMARY KEY?
    note INT,
    comment VARCHAR(255)
    cour_id INT  NOT NULL,
    apprenent_id INT  NOT NULL,
    FOREIGN KEY(cour_id) REFERENCES cours(id),
    FOREIGN KEY(apprenent_id) REFERENCES utilisateurs(id)
);

CREATE TABLE modules(
    id INT AUTOINCREMANT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    cours_id INT  NOT NULL,
    FOREIGN KEY (cours_id) REFERENCES cours(id)
 );

 CREATE TABLE lecons (
    id INT AUTOINCREMANT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    type VARCHAR(30),
    module_id INT NOT NULL,
   FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
);

CREATE TABLE inscription (
    id INT AUTOINCREMANT PRIMARY KEY,
    date_inscription TIMESTAMP,
    apprenant_id  INT NOT NULL,
    cours_id INT NOT NULL,
    FOREIGN KEY (apprenant_id) REFERENCES utilisateur(id) ON DELETE CASCADE,
    FOREIGN KEY (cours_id)     REFERENCES cours(id) ON DELETE CASCADE,
);