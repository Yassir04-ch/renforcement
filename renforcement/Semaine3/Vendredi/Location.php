<?php

class Location  {
    private Client $client;
    private Vehicule $vehicule;
    private DateTime $date_debut;
    private DateTime $date_fin;
    private float  $montant;
    private string $statut = 'en cours';


    public function __construct(Client $client , Vehicule $vehicule , $date_debut , $date_fin)
    {
        $this->client = $client;
        $this->vehicule = $vehicule;
        $this->date_debut = $date_debut;
        $this->date_fin =$date_fin;
        $this->montant = $this->calculerMontant();
    }

    public function calculerMontant(){
            $nbjour = $this->date_debut->diff($this->date_fin)->days;
            return $this->vehicule->calculerPrixLocation($nbjour);
    }
  
    public function getStatut()
    {
        return $this->statut;
    }

    
    public function setStatut($statut)
    {
        $this->statut = $statut;

    }

    
    public function getMontant()
    {
        return $this->montant;
    }

    
    public function setMontant($montant)
    {
        $this->montant = $montant;

     }

    
    public function getDate_fin()
    {
        return $this->date_fin;
    }

     
    public function setDate_fin($date_fin)
    {
        $this->date_fin = $date_fin;

    }
  
    public function getDate_debut()
    {
        return $this->date_debut;
    }

     
    public function setDate_debut($date_debut)
    {
        $this->date_debut = $date_debut;

     }
}