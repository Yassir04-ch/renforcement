<?php

class Produit {
     public string $nom;
    public float $price;
    public int $stock;

     public function __construct(string $nom, float $price, int $stock) {
        $this->nom = $nom;
        $this->price = $price;
        $this->stock = $stock;
    }
}



class Distributeur {
    private array $produits = [];
    private float $caisse =0;


    public function ajouterProduit(Produit $produit){
        $this->produits[$produit->nom] = $produit;
    }

    public function afficherProduits(){
        foreach ($this->produits as $produit) {
           echo "produit non ".$produit->nom ."price".$produit->price;
        }
    }

    public function acheter($nomProduit, $montantInsere){
        $produit = $this->produits[$nomProduit];
        if(!$produit){
            return "produit non trouvee";
        }

        if($produit->stock <=0){
            return "stock insuffisant";
        }
        
        if ($montantInsere < $produit->price) {
         return "montant insuffisant";
        }

        $produit->stock --;

        $this->caisse += $produit->price;
         
        $monnaie = $montantInsere - $produit->price;

        return " votre produit est". $nomProduit." monnaie : ".$monnaie;
    }

    public function remplir($nomProduit, $quantite){
      $produit = $this->produits[$nomProduit];
        if(!$produit){
            return "produit non trouvee";
        }
           $produit->stock += $quantite;
         return "quntite a ete remlir avec success";
    }

    public function getRecette(){
        return $this->caisse;
    }
}


$produit1 = new Produit("Cafe", 1.5, 10);
$produit2 = new Produit("atay", 1.0, 5);
$produit3 = new Produit("Soda", 2.0, 2) ;
$produit4 = new Produit("choco", 1.2, 8);
$produit5 = new Produit("lai", 2.5, 1);

$machine = new Distributeur();

$machine->ajouterProduit($produit1);
$machine->ajouterProduit($produit2);
$machine->ajouterProduit($produit3);
$machine->ajouterProduit($produit4);
$machine->ajouterProduit($produit5);

$machine->afficherProduits();

 
echo $machine->acheter("Cafe", 2.0) ;

echo  $machine->acheter("Soda", 1.5) ;

 
 
echo  $machine->acheter("choco", 3.0) ;

echo $machine->acheter("choco", 3.0) ;

$machine->remplir("choco", 5);
echo  $machine->acheter("choco", 2.5) ;

echo $machine->acheter("atay", 2.0) ;

 echo $machine->getRecette();