<?php

abstract class Vehicule {
    protected string $immatriculation;
    protected string $marque;
    protected string $modele;
    protected float $kilometrage;
    protected float  $prix_journalier;
    protected bool $disponible = true;
    public function __construct(string $immatriculation, string $marque, string $modele, float  $kilometrage, float  $prix_journalier)
    {
        $this->immatriculation = $immatriculation;
        $this->marque = $marque;
        $this->modele = $modele;
        $this->kilometrage = $kilometrage;
        $this->prix_journalier = $prix_journalier;

    }

    abstract public function calculerPrixLocation($nbJours);


    public function getImmatriculation()
    {
         return $this->immatriculation; 
    }
    public function getMarque()
    {
         return $this->marque; 
    }
    public function getModele()
    {
         return $this->modele;
    }

    public function getDisponible()
    {
         return $this->disponible; 
    }
    public function setDisponible($disponible)
    { 
        $this->disponible = $disponible;
     }


    
    public function getKilometrage()
    {
        return $this->kilometrage;
    }

    
    public function setKilometrage($kilometrage)
    {
        $this->kilometrage = $kilometrage;

     }

   
    public function setImmatriculation($immatriculation)
    {
        $this->immatriculation = $immatriculation;
    }

    
    public function setMarque($marque)
    {
        $this->marque = $marque;

     }

  
    public function setModele($modele)
    {
        $this->modele = $modele;

     }

    public function setPrix_journalier($prix_journalier)
    {
        $this->prix_journalier = $prix_journalier;

     }
}

