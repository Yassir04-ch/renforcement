<?php

require_once 'Vehicule.php';
require_once 'VoitureCitadine.php';
require_once 'Suv.php';
require_once 'Utilitaire.php';
require_once 'Client.php';
require_once 'Location.php';
require_once 'Agence.php';

$agence = new Agence();

$voiture = new VoitureCitadine("AB-123", "Renau", "Clio", 15000, 300);
$suv = new Suv ("CD-456", "Dacia", "Logan", 8000, 250);
$utilitaire = new Utilitaire ("EF-789", "Ford","Transit", 5000, 350, 4);
$agence->ajouterVehicule($voiture);
$agence->ajouterVehicule($suv);
$agence->ajouterVehicule($utilitaire);
$client = new Client("yassir","P123456","0612345678");
echo $agence->louer("AB-123",$client,new DateTime("2024-01-01"), new DateTime("2024-01-10"));
