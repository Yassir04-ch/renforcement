-- 1
SELECT c.id, c.date_consultation,c.diagnostic,m.nom ,p.nom FROM consultations c
JOIN medecins m 
JOIN consultations c ON c.medecin_id = m.id m ON m.id = c.medecin_id
JOIN patients p ON p.id = c.patient_id

-- 2
SELECT m.nom ,COUNT(c.id) as total ,MONTH(c.date_consultation) as mois FROM medecins m 
JOIN consultations c ON c.medecin_id = m.id m
JOIN consultations c ON  c.medecin_id = m.id
WHERE mois = MONTH(NOW())
GROUP BY m.id, m.nom


-- 3
SELECT count(c.id) as total p.nom FROM consultations c
JOIN patients p ON p.id = c.patient_id 
GROUP BY p.nom


-- 4
SELECT p.nom ,p.id FROM patients p
LEFT JOIN consultations c ON c.patient_id = p.id
WHERE c.id IS NULL;


-- 5
SELECT  COUNT(DISTINCT c.patient_id) as total , m.nom FROM medecins m 
JOIN consultations c ON c.medecin_id = m.id
GROUP BY m.nom 
ORDER BY total DESC
LIMIT 1;


-- 6
SELECT pr.medicament , pr.posologie , c.diagnostic , m.nom , p.nom FROM prescriptions pr
JOIN consultations c ON c.id = pr.consultation_id
JOIN medecins m ON m.id = c.medecin_id
JOIN patients p ON p.id = c.patient_id
GROUP BY m.nom;



-- 7
SELECT m.specialite , COUNT(c.id) as total FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
GROUP BY  m.specialite
ORDER BY total DESC
LIMIT 1;
