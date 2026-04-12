<?php

class Suv extends Vehicule{

   public function calculerPrixLocation($nbJours)
   {
      $price = ($this->prix_journalier + 15) * $nbJours;
      return $price;
   }

}