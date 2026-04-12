<?php


class VoitureCitadine extends Vehicule{

   public function calculerPrixLocation($nbJours)
   {
      $price = $this->prix_journalier * $nbJours;
      if($nbJours >=7){
        $price -= $price * 0.1;
      }  
      return $price;
   }
}