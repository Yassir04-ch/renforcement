<?php


 abstract class Transport {
        protected string $nom;
        protected float  $vitesse_max;
        protected int $capacite_passagers;
        protected float  $consommation ;

        public function __construct(string $nom , float  $vitesse_max ,int $capacite_passagers, float  $consommation )
        {
            $this->nom = $nom;
            $this->vitesse_max = $vitesse_max;
            $this->capacite_passagers = $capacite_passagers;
            $this->consommation = $consommation;
        }

         public function getNom()
        {
                return $this->nom;
        }
 
        public function setNom($nom)
        {
                $this->nom = $nom;
        }

         public function getVitesse_max()
        {
                return $this->vitesse_max;
        }

        
        public function setVitesse_max($vitesse_max)
        {
                $this->vitesse_max = $vitesse_max;

         }

         public function getconsommation()
        {
                return $this->consommation;
        }

        
        public function setconsommation($consommation)
        {
                $this->consommation = $consommation;

         }


       public function tempsTrajet($distanceKm){
        $temps = $distanceKm / $this->vitesse_max;
        return $temps;
    }

      abstract public function calculerCoutTrajet($distanceKm);

}


class Voiture  extends Transport{
    private  $carburant  = 1.8;   

    public function __construct() {
        parent::__construct('Voiture', 130, 4, 7);
    }

    public function calculerCoutTrajet($distanceKm)
    {
          $total = ($distanceKm / 100) * $this->consommation * $this->carburant;
           $coutotal = $total / $this->capacite_passagers;
           return $coutotal;
    }
}


class Train extends Transport {
    private $electricite  = 0.15;         
    public function __construct() {
        parent::__construct('Train', 300, 400, 30);
    }
    public function calculerCoutTrajet($distanceKm){
        $total = ($distanceKm / 100) * $this->consommation * $this->electricite ;
        $coutotal = $total / $this->capacite_passagers;
        return $coutotal;
        }
}

class Avion extends Transport {
    private $kerosene  = 2.5;      
    public function __construct() {
        parent::__construct('Avion', 850, 200, 250);
    }
    public function calculerCoutTrajet($d){
        $total = ($d / 100) * $this->consommation * $this->kerosene ;
           $coutotal = $total / $this->capacite_passagers;
           return $coutotal;   
    }

}

$tran1 = new Train();
$voiture1 = new Voiture();
$avion1 = new Avion();
$transports = [$voiture1,$tran1,$avion1];
$distance   = 1000;
$rapide = null;
$cher  = null;

foreach ($transports as $transports) {
    $temps   = $transports->tempsTrajet($distance);
    $heures  =  $temps;
    $cout    = $transports->calculerCoutTrajet($distance);

     echo $transports->getNom() . "--" .$heures."h  ".$cout ."$"."\n";

     if ($rapide === null || $temps < $rapide['temps'])
        $rapide = ['nom' => $transports->getNom(), 'temps' => $temps];

    if ($cher === null || $cout < $cher['cout'])
        $cher = ['nom' => $transports->getNom(), 'cout' => $cout];
}

echo "plus rapide : ".$rapide['nom']."\n";
echo "moins cher  : ".$cher['nom'];
 