SELECT v.nom , AVG(b.prix) as moyyen FROM voyageurs v
JOIN billets b ON b.voyageur_id = v.id
WHERE b.prix > moyyen;


SELECT v.nom , l.nom, gd.nom, ga.nom,b.prix FROM billets b
JOIN voyageurs v ON v.id  = b.voyageur_id
JOIN lignes l ON l.id  = b.ligne_id
JOIN gares gd ON gd.id = b.gare_depart_id
JOIN gares ga ON ga.id = b.gare_arrivee_id;


SELECT v.nom FROM voyageurs v
LEFT JOIN billets b ON b.voyageur_id = v.id
WHERE b.id IS NULL;


SELECT v.nom, SUM(b.prix) AS total FROM voyageurs v
JOIN billets b ON b.voyageur_id = v.id
GROUP BY v.id, v.nom
ORDER BY total DESC
LIMIT 1 OFFSET 2;
