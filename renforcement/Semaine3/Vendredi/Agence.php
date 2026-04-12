<?php

class Agence {
    private array $vehicules = [];
    private array $locations = [];

    public function ajouterVehicule(Vehicule $vehicules)
    {
        $this->vehicules[] = $vehicules;
    }

 
    public function louer(string $immatriculation,Client $client,DateTime $date_debut, DateTime $date_fin) 
    {

        foreach ($this->vehicules as $vehicule) {
            if ($vehicule->getImmatriculation() == $immatriculation) {
                if (!$vehicule->getDisponible())
                {
                    return "vehicule non disponible";
                }
                $vehicule->setDisponible(false);
                $location  = new Location($client,$vehicule,$date_debut, $date_fin);
                $this->locations[] = $location;
                return "location crée montant : " . $location->getMontant() . "DH";
            }
        }
        return "vehicule non trouvé";
    }

    public function retourner(string $immatriculation,DateTime $dateRetour){
        foreach ($this->locations as $location) {
            if ($location->vehicule->getImmatriculation() == $immatriculation && $location->getStatut() == 'en cours') {
                $location->setStatut('terminée');
                $location->vehicule->setDisponible(true);

                $retard = $location->getDate_fin()->diff($dateRetour)->days;
                $retardprix = 0;

                if ($dateRetour > $location->getDate_fin()) {
                    $retardprix  = $retard * 50;
                    $montant = $location->getMontant() + $retardprix;
                    $location->setMontant($montant);
                    return "retour enregistré  eetard : ".$retard." jours : ".$retardprix."DH";
                }

                return "retour enregistré ";
            }
        }
        return "location non trouvée";
    }
    
    public function statistiques(){
    $totalvehicules = count($this->vehicules);
    $totallocations = count($this->locations);
    $chiffre  = 0;
  
    foreach ($this->locations as $location) {
        $chiffre += $location->getMontant();
      }
   return ["total_vehicule" => $totalvehicules , "totale_location"=>$totallocations , "chiffre" =>$chiffre];
}
}
