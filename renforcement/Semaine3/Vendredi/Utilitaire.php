<?php

class Utilitaire extends Vehicule{

    private float $tonnage;

    public function __construct(string $immatriculation, string $marque, string $modele, float $kilometrage, float $prix_journalier,float $tonnage)
    {
        parent::__construct($immatriculation, $marque, $modele, $kilometrage, $prix_journalier);
        $this->tonnage = $tonnage;
        
    }
    public function calculerPrixLocation($nbJours)
    {
        $priceton = $this->tonnage * 5;
        $price = ($this->prix_journalier + $priceton ) * $nbJours; 
        return $price;  
    }
}