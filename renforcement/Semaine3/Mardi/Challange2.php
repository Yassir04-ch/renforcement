<?php

class Cinema {

     private array $salles = [];

     public function ajouterSalle( $nom,$nbPlaces) {
        $this->salles[$nom] = ['total' => $nbPlaces,'reservations' => [] ];
    }

  public function reserver($nomSalle, $nomClient, $nbPlacesAReserver) {
        if (!isset($this->salles[$nomSalle])) {
            return "La salle '$nomSalle' pas trouvee";
        }

        $salle = $this->salles[$nomSalle];  
            
        $totalPlaces = 0;
        foreach ($salle['reservations'] as $nbplace) {
            $totalPlaces += $nbplace;
        }
        
        $placesLibres = $salle['total'] - $totalPlaces;

        if ($nbPlacesAReserver > $placesLibres) {
            return "nombre de place reserver est plus grande";
        }

        if (isset($salle['reservations'][$nomClient])) {
            $salle['reservations'][$nomClient] += $nbPlacesAReserver;
        } else {
            $salle['reservations'][$nomClient] = $nbPlacesAReserver;
        }

        
        $this->salles[$nomSalle] = $salle;

        return "places a ete reservee";
    }

   public function annulerReservation($nomSalle, $nomClient) {
         if (isset($this->salles[$nomSalle]['reservations'][$nomClient])) {
            
             $this->salles[$nomSalle]['reservations'][$nomClient] = 0;
            
            return "reservation de $nomClient  est annuler";
        }
        return "aucune reservation au nom de " . $nomClient;
    }

   public function afficherOccupation() {
        foreach ($this->salles as $salle) {
            $nb = 0; 
            foreach ($salle['reservations'] as $place) {
                $nb += $place;
            }

            $total = $salle['total'];
            
            $pourcentage = 0; 

            if ($total > 0) {
                $pourcentage = ($nb / $total) * 100;
            }

            echo "salle". $nb / $total." -pourcentge: ".$pourcentage ."\n";
        }
    }


  public function getRevenusEstimes($prixBillet){
        $total = 0;
        foreach ($this->salles as $salle) {
            foreach($salle['reservations'] as $reservation){
                $total +=$reservation;
            }
         }
         $revenu =  $total * $prixBillet;
        return "le revenu est:" .$revenu;
    }
}


$monCinema = new Cinema();

$monCinema->ajouterSalle("test", 50);
$monCinema->ajouterSalle("test2", 20);
$monCinema->ajouterSalle("test3", 100);

echo  $monCinema->reserver("test", "Ahmed", 5)."\n";
echo  $monCinema->reserver("test", "reda", 40)."\n";
echo  $monCinema->reserver("test", "said", 10)."\n"; 
echo  $monCinema->reserver("test2", "yassir", 10)."\n";
echo  $monCinema->reserver("test2", "anas", 10)."\n";
echo  $monCinema->reserver("test2", "aymane", 2)."\n"; 
echo  $monCinema->reserver("test3", "omar", 20)."\n";
echo  $monCinema->reserver("test3", "samir", 30)."\n";
echo  $monCinema->reserver("test3", "salma", 15)."\n";

echo $monCinema->annulerReservation("test2", "yassir")."\n";

$monCinema->afficherOccupation()."\n";

 echo  $monCinema->getRevenusEstimes(60);

