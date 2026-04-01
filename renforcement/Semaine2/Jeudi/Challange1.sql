
-- 1
SELECT l.titre , l.prix ,e.nom,g.nom FROM livres l
JOIN editeurs e ON e.id = l.editeur_id
JOIN genres g ON g.id = l.genre_id



-- 2
SELECT count(l.id) as total , e.nom FROM livres l 
JOIN editeurs e ON e.id = l.editeur_id
GROUP BY e.nom, total
ORDER BY total DESC;


-- 3
SELECT sum(l.prix * v.quantite) as chiffre , g.nom FROM ventes v
JOIN livres l ON l.id = v.livre_id
JOIN genres g ON g.id = l.genre_id
GROUP BY  g.id, g.nom
ORDER BY chiffre DESC;


-- 4
SELECT e.nom FROM éditeurs
LEFT JOIN livres l ON l.genre_id = g.id
LEFT JOIN ventes v ON v.livre_id = l.id
WHERE v.id is NULL;


-- 6
SELECT v.client , count(DISTINCT l.genre_id) as total FROM ventes v
JOIN livres l ON l.id = v.livre_id
GROUP BY v.client , total
HAVING total > 3;


-- 7
SELECT MONTH(v.date_vente) as mois , sum(l.prix * v.quantite) as chiffre FROM ventes V
JOIN livres l ON l.id = v.livre_id
GROUP BY mois 
ORDER BY mois DESC;

