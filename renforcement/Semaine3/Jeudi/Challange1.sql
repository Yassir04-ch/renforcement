CREATE TABLE gares (
    id  INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    ville VARCHAR(100),
    region VARCHAR(100)
);

CREATE TABLE lignes (
    id   INT PRIMARY KEY AUTO_INCREMENT,
    nom  VARCHAR(100),
    type ENUM('TGV', 'TER', 'Intercités')
);

CREATE TABLE arrets (
    id            INT PRIMARY KEY AUTO_INCREMENT,
    ligne_id      INT,
    gare_id       INT,
    ordre         INT,
    heure_passage TIME,
    FOREIGN KEY (ligne_id) REFERENCES lignes(id),
    FOREIGN KEY (gare_id)  REFERENCES gares(id)
);

CREATE TABLE voyageurs (
    id  INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100)
);

CREATE TABLE billets (
    id  INT PRIMARY KEY AUTO_INCREMENT,
    voyageur_id  INT,
    ligne_id  INT,
    gare_depart_id INT,
    gare_arrivee_id INT,
    date_voyage  DATE,
    prix  FLOAT,
    FOREIGN KEY (voyageur_id)  REFERENCES voyageurs(id),
    FOREIGN KEY (ligne_id)  REFERENCES lignes(id),
    FOREIGN KEY (gare_depart_id)  REFERENCES gares(id),
    FOREIGN KEY (gare_arrivee_id) REFERENCES gares(id)
);


INSERT INTO gares (nom, ville, region) VALUES
('Gare de Lyon', 'Paris', 'ile-de-France'),
('gare youssoufia', 'youssoufia',   'asfi'),
('agadir gare',  'agadir',    'sousse'),
('gare Nore',  'asfi',   'asfi'),
('casa gare',     'casablanca','casablanca'),
('Gare eljadida',  'eljadida','dokala');



INSERT INTO lignes (nom, type) VALUES
('TGV Paris-Lyon', 'TGV'),
('TGV casa-tanger',  'TGV'),
('TER youssoufia-marakeche','TER'),
('Intercités eljadida-casa', 'Intercités');



INSERT INTO arrets (ligne_id, gare_id, ordre, heure_passage) VALUES
(1, 1, 1, '08:00:00'),
(1, 2, 2, '10:00:00'),
(2, 2, 1, '11:00:00'),
(2, 4, 2, '13:30:00'),
(3, 1, 1, '09:00:00'),
(3, 5, 2, '13:00:00'),
(3, 4, 3, '15:00:00');


INSERT INTO voyageurs (nom) VALUES
('yassir'), ('anas'), ('Sara'), ('Karim');


INSERT INTO billets (voyageur_id, ligne_id, gare_depart_id, gare_arrivee_id, date_voyage, prix) VALUES
(1, 1, 1, 2, '2024-01-10', 85.00),
(1, 1, 1, 2, '2024-01-15', 85.00),
(2, 2, 2, 4, '2024-01-12', 45.00),
(3, 3, 1, 4, '2024-01-18', 120.00),
(4, 1, 1, 2, '2024-01-20', 85.00),
(2, 1, 1, 2, '2024-01-22', 85.00),
(3, 2, 2, 4, '2024-01-25', 45.00);


SELECT g.nom as gare, g.ville, a.heure_passage,a.ordre FROM arrets a
JOIN gares  g ON g.id = a.gare_id
JOIN lignes l ON l.id = a.ligne_id
WHERE l.nom = 'TGV Paris-Lyon'
ORDER BY a.ordre;


SELECT g.nom as gare, g.ville,COUNT(a.ligne_id) as total FROM gares  g
JOIN arrets a ON a.gare_id = g.id
GROUP BY  g.nom, g.ville
ORDER BY total DESC;


SELECT l.nom, l.type,SUM(b.prix)  as chiffre FROM lignes l
JOIN billets b ON b.ligne_id = l.id
GROUP BY l.id, l.nom, l.type
ORDER BY chiffre DESC;

SELECT g.nom, g.ville FROM gares g
LEFT JOIN arrets a ON a.gare_id = g.id
LEFT JOIN lignes l ON l.id = a.ligne_id
WHERE l.id IS NULL;



