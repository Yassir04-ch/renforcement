<?php

abstract class Employe {
    protected string $nom;
    protected string $prenom;
    protected  $date_embauche;
    protected float  $salaire_base;

    public function __construct(string $nom,string $prenom,$date_embauche,float  $salaire_base){
       $this->nom = $nom;
       $this->prenom = $prenom;
       $this->date_embauche = $date_embauche;
       $this->salaire_base = $salaire_base;
     }

     public function getDate_embauche(){
        return $this->date_embauche;
     }

     public function getNom(){
        return $this->nom;
     }

     public function getPrenom(){
        return $this->prenom;
     }

     public function anciennete(){
        $now = date('Y');
        $annee =  $now - $this->date_embauche->format('Y');
        return $annee;
     }

     abstract public function calculerSalaire();
}


class Developpeur  extends Employe{
    private float $bonus = 500;

    public function calculerSalaire(){
        $salaire = $this->salaire_base + ($this->bonus * $this->anciennete());
        if ($this->anciennete() > 5)
            $salaire += $this->salaire_base * 0.10;
            return $salaire;
        }
}

class Commercial extends Employe {
    private float $ca_mensuel; 
    private float $taux_commission;

    public function __construct(string $nom, string $prenom,$date_embauche, float $salaire_base,
          float $ca_mensuel, float $taux_commission)
    {
        parent::__construct($nom, $prenom, $date_embauche, $salaire_base);
        $this->ca_mensuel = $ca_mensuel;
        $this->taux_commission = $taux_commission;
    }

    public function calculerSalaire(){
        $salire =  $this->salaire_base + ($this->ca_mensuel * $this->taux_commission / 100);
        return $salire;
    }
}

class Manager extends Employe {
    private int $taille_equipe;

    public function __construct(string $nom, string $prenom, $date_embauche, float $salaire_base, int $taille_equipe)
    {
        parent::__construct($nom, $prenom, $date_embauche, $salaire_base);
        $this->taille_equipe = $taille_equipe;
    }

    public function calculerSalaire(){
        $salaire = $this->salaire_base + (200 * $this->taille_equipe);
        if ($this->taille_equipe > 10){
            $salaire =$salaire * 1.15;
        }
        return $salaire;
    }
}


$dev1 =  new Developpeur("cherqui", "yassir", new dateTime("2017-03-01"), 7500);
$dev2 =  new Developpeur("anssis", "anas",   new DateTime("2021-06-15"),8000);

$comerce1 = new Commercial("salhi", "salah",  new DateTime("2019-01-10"), 2800, 5000, 3);
$comerce2 = new Commercial("morata", "dahr",  new DateTime("2020-09-01"), 2800, 6000, 3);

$manager1 = new Manager("tito", "ayoub",  new DateTime("2015-04-20"), 12000, 15);
$manager2 = new Manager("mohlik", "samir", new DateTime("2018-11-05"), 15000, 8);

$employes = [$dev1, $dev2, $comerce1, $comerce2, $manager1, $manager2];
$total = 0;
$mieuxPaye = null;

foreach ($employes as $employe) {
    $salaire      = $employe->calculerSalaire();
    $total += $salaire;

    if ($mieuxPaye == null || $salaire > $mieuxPaye['salaire'])
        $mieuxPaye = ['nom' => $employe->getNom() . " " . $employe->getPrenom(), 'salaire' => $salaire];
}


foreach ($employes as $employe){
    echo $employe->getNom() . " " . $employe->getPrenom() . "  ancienneté : " . $employe->anciennete() . " ans -- salaire : " . $employe->calculerSalaire(). " DH\n";
}

echo "Total salariale : " .$total. " DH\n";
echo "mieux payé : " . $mieuxPaye['nom'] . " salire :" . $mieuxPaye['salaire'] . " DH";
