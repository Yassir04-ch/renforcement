<?php

class Client{
    private string $nom;
    private string $permis;
    private string $telephone;

    public function __construct(string $nom , string $permis,string $telephone)
    {
        $this->nom = $nom;
        $this->permis = $permis;
        $this->telephone = $telephone;
    }


    public function getNom()
    {
        return $this->nom;
    }

    
    public function setNom($nom)
    {
        $this->nom = $nom;
    }

  
    public function getPermis()
    {
        return $this->permis;
    }

    
    public function setPermis($permis)
    {
        $this->permis = $permis;

     }

   
    public function getTelephone()
    {
        return $this->telephone;
    }

    
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

     }
}