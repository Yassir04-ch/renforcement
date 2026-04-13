<?php

interface Livraison {
    public function calculerCout($poids, $totalPrix);
    public function estimerDelai();
}


class LivraisonStandar implements Livraison {

    public function calculerCout($poids,$totalPrix){
      if($totalPrix > 50){
        return  0;
      }
      return 5;
        
    }

    public function estimerDelai(){
        return "5-7 jours";
    }

}

class LivraisonExpress implements Livraison{

    public function calculerCout($poids,$totalPrix){
        $total = 10 + (2 * $poids);
        return $total;
    }

    public function estimerDelai(){
         return "1-2 jours";
    }

}


class PointRelais implements Livraison {

    public function calculerCout($poids, $totalPrix) {
     $fix = 3;
     if($poids > 5){
        $fix +=1;
     }
     return $fix;
    }

    public function estimerDelai() {
        return "3-5 jours";
   }
}


class LivraisonInternationale implements Livraison{

   private bool $horseurope = false;

   public function __construct($horseurope)
   {
        $this->horseurope = $horseurope;
   }

    public function calculerCout($poids, $totalPrix) {
        $fix = 15 + (3 * $poids);
        if($this->horseurope){
            $fix +=20;
        }
         return $fix;
    }

    public function estimerDelai() {
        return "10-15 jours";
   }
}


class Commande {
    private array $article = [];
    private Livraison $livraison;

    public function __construct(Livraison $livraison)
    {
        $this->livraison = $livraison;
    }


    public function ajouterArticle($prix,$poids){
        $this->article[] = [
            "poids"=>$poids,
            "prix"=>$prix
        ];
        return "article a été ajoutée";

    }

    public function TotalPrix(){
        $total = 0;
        foreach($this->article as $article){
            $total +=$article['prix'];
        }
        return $total;
    }

    public function TotalPoids(){
        $total = 0;
        foreach($this->article as $article){
            $total +=$article['poids'];
        }
        return $total;
    }

    public function CalculerTotal(){
        $poids = $this->TotalPoids();
        $prix = $this->TotalPrix();

        $total = $this->livraison->calculerCout($poids,$prix);
        return $total;
    }

    public function afficherInfo(){
       echo "total Poids :".$this->TotalPoids()."\n";
       echo "Total est :".$this->CalculerTotal()."\n";
       echo "Dalai est :".$this->livraison->estimerDelai()."\n";
    }
}




$livraison1 = new LivraisonStandar();
$c1 = new Commande($livraison1);
echo $c1->ajouterArticle(30, 2);
echo $c1->ajouterArticle(25, 1);
$c1->afficherInfo();
 
$livraison2 = new LivraisonExpress();
$c2 = new Commande($livraison2);
echo $c2->ajouterArticle(40, 3);
$c2->afficherInfo();

 
$livraison3 = new PointRelais(); 
$c3 = new Commande($livraison3);
echo $c3->ajouterArticle(20, 6);
$c3->afficherInfo();

 