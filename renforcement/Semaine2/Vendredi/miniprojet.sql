
CREATE TABLE roles(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);


CREATE TABLE utilisateurs(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT ,
    FOREIGN KEY(role_id) REFERENCES roles(id)
);

CREATE TABlE hotels(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    adress VARCHAR(255),
    nb_chambre INT,
    user_id INT ,
    FOREIGN KEY(user_id) REFERENCES utilisateurs(id)
);


CREATE TABLE type_chambre (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

CREATE TABLE chambre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero INT NOT NULL,
  statut VARCHAR(100) DEFAULT 'disponible',
  hotel_id INT NOT NULL,
  type_id INT NOT NULL,
  FOREIGN KEY (hotel_id) REFERENCES hotel(id),
  FOREIGN KEY (type_id) REFERENCES type_chambre(id)
 );
 
 CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    chambre_id INT NOT NULL,
    date_arrivee DATE NOT NULL,
    date_depart DATE NOT NULL,
    statut VARCHAR(100) DEFAULT 'en_attente',
    FOREIGN KEY (user_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (chambre_id) REFERENCES chambre(id)
);

CREATE TABLE service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price FLOAT,
    description TEXT
);

CREATE TABLE reservation_service (
    reservation_id INT,
    service_id INT,
    PRIMARY KEY (reservation_id, service_id),
    FOREIGN KEY (reservation_id) REFERENCES reservation(id),
    FOREIGN KEY (service_id) REFERENCES service(id)
);

CREATE TABLE factures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    montant_total FLOAT,
    statut VARCHAR(100) DEFAULT 'non_payee',
    reservation_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)
);

CREATE TABLE paiements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    montant FLOAT,
    methode VARCHAR(100),
    facture_id INT,
    FOREIGN KEY (facture_id) REFERENCES factures(id)
);

CREATE TABLE avis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    note INT ,
    comment TEXT,
    user_id INT,
    hotel_id INT,
    FOREIGN KEY (user_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (hotel_id) REFERENCES hotels(id)
);



-- 2
INSERT INTO roles (name) VALUES ('Admin'), ('Réceptionniste'), ('Client');


INSERT INTO utilisateurs (firstname, lastname, email, password, role_id) VALUES
('yassir', 'cherqui', 'yassir@email.com', 'yassir123', 3),
('anas', 'tegbu', 'anas@email.com', 'tttt132', 3),
('amine', 'rgnat', 'amine@email.com', 'bah1233', 3),
('salma', 'Mansouri', 'salma@email.com', 'fff&133', 3),
('samir', 'sanore', 'samir@email.com', 'samir123', 3),
('marwa', 'Richard', 'marwa@email.com', 'maewa123', 3),
('yasmine', 'Alami', 'alami@email.com', 'yasmine123', 3),
('aymane', 'Moreau', 'ayman@email.com', 'aymane123', 3),
('ayoub', 'nouri', 'ayoub@email.com', 'ayoub123', 3),
('markos', 'Rousseau', 'rousseau@email.com', 'markos123', 3);


INSERT INTO chambre (numero, statut, hotel_id, type_id) VALUES
(1,'disponible',1,1),(2,'disponible',1,2),(3,'maintenance',1,3),(4,'occupee',1,4),
(5,'disponible',1,1),(6,'disponible',1,2),(7,'disponible',1,3),(8,'occupee',1,4),
(9,'disponible',1,1),(10,'disponible',1,2),(11,'maintenance',1,3),(12,'disponible',1,4),
(13,'disponible',1,1),(14,'occupee',1,2),(15,'disponible',1,3),(16,'disponible',1,4),
(17,'disponible',1,1),(18,'occupee',1,2),(19,'disponible',1,3),(20,'disponible',1,4);


INSERT INTO reservation (user_id, chambre_id, date_arrivee, date_depart, statut) VALUES
(3,3,'2026-05-03','2026-05-07','confirmee'),
(4,4,'2026-05-04','2026-05-08','confirmee'),
(5,5,'2026-05-05','2026-05-09','annulee'),
(6,6,'2026-05-06','2026-05-10','confirmee'),
(7,7,'2026-05-07','2026-05-11','annulee'),
(8,8,'2026-05-08','2026-05-12','confirmee'),
(9,9,'2026-05-09','2026-05-13','confirmee'),
(10,10,'2026-05-10','2026-05-14','confirmee'),
(3,3,'2026-05-03','2026-05-07','confirmee'),
(4,4,'2026-05-04','2026-05-08','confirmee'),
(5,5,'2026-05-05','2026-05-09','annulee'),
(6,6,'2026-05-06','2026-05-10','confirmee'),
(7,7,'2026-05-07','2026-05-11','confirmee'),
(8,8,'2026-05-08','2026-05-12','confirmee'),
(9,9,'2026-05-09','2026-05-13','confirmee'),
(10,10,'2026-05-10','2026-05-14','annulee');

INSERT INTO factures (reservation_id, montant_total, statut) VALUES
(1,800,'payee'),
(4,650,'payee'),
(5,300,'non_payee'),
(3,650,'payee'),
(7,300,'non_payee');


-- 3
SELECT h.name,c.numero,tc.name ,COUNT(r.id) AS total FROM chambre c
JOIN hotels h ON c.hotel_id = h.id
JOIN type_chambre tc ON c.type_id = tc.id
JOIN reservation r ON c.id = r.chambre_id
GROUP BY c.id


SELECT MONTH(f.created_at) as mois ,SUM(f.montant_total) as chiffre  FROM factures f
JOIN reservation r ON r.id = f.reservation_id
JOIN chambre c ON c.id = r.chambre_id
JOIN type_chambre t ON t.id = c.type_id
WHERE f.statut = 'payee'
GROUP BY mois


SELECT u.id ,u.firstname,u.lastname,u.email, count(r.id) as total FROM utilisateurs u
JOIN reservation r ON u.id = r.user_id
WHERE r.statut = 'confirmee'
GROUP BY u.id
HAVING total >3


SELECT c.id,c.hotel_id FROM chambre c
LEFT JOIN reservation r ON c.id = r.chambre_id
AND r.date_arrivee < "2026-07-18"
AND r.date_depart > "2026-05-18"
WHERE r.id IS NULL

SELECT SUM(montant_total) / COUNT(DISTINCT r.user_id) AS revenu_moyen
FROM factures f
JOIN reservation r ON f.reservation_id = r.id
WHERE f.statut = 'payee';


SELECT u.lastname, SUM(f.montant_total) AS total FROM utilisateurs u
JOIN reservation r ON u.id = r.user_id
JOIN factures f ON r.id = f.reservation_id
GROUP BY u.id
ORDER BY total DESC
LIMIT 5;

