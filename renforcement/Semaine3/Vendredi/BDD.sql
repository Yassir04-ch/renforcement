CREATE TABLE vehicules (
    id INT PRIMARY KEY AUTO_INCREMENT,
    immatriculation VARCHAR(20) UNIQUE,
    marque VARCHAR(50),
    modele VARCHAR(50),
    kilometrage FLOAT,
    prix_journalier FLOAT,
    type ENUM('VoitureCitadine','SUV','Utilitaire'),
    tonnage FLOAT,
    disponible BOOLEAN 
);

CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    permis VARCHAR(50),
    telephone VARCHAR(20)
);

CREATE TABLE locations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vehicule_id INT,
    client_id INT,
    date_debut DATE,
    date_fin DATE,
    montant FLOAT,
    statut ENUM('en cours','terminée','annulée'),
    FOREIGN KEY (vehicule_id) REFERENCES vehicules(id),
    FOREIGN KEY (client_id)   REFERENCES clients(id)
);

SELECT c.nom ,c.telephone,v.marque,v.modele,v.immatriculation,l.date_debut,l.date_fin,l.montant
FROM locations l
JOIN clients c ON c.id = l.client_id
JOIN vehicules v ON v.id = l.vehicule_id
WHERE l.statut = 'en cours';

SELECT MONTH(l.date_debut as mois, SUM(l.montant) as chiffre FROM locations l
WHERE l.statut != 'annulée'
GROUP BY mois

SELECT c.nom,COUNT(l.id) as total FROM clients c
JOIN locations l ON l.client_id = c.id
GROUP BY c.id, c.nom
ORDER BY total DESC; 


SELECT v.immatriculation, v.marque, v.modele FROM vehicules v
LEFT JOIN locations l ON l.vehicule_id = v.id
WHERE l.id IS NULL;


SELECT v.immatriculation, v.marque,v.modele,COUNT(l.id) AS total FROM vehicules v
JOIN locations l ON l.vehicule_id = v.id
GROUP BY v.id, v.marque, v.modele, v.immatriculation
ORDER BY total DESC

