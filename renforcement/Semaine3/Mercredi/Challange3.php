<?php

abstract class Article {
    public string $reference;
    public string $designation;
    public float  $prix_ht;

    public function __construct(string $reference, string $designation, float $prix_ht) {
        $this->reference   = $reference;
        $this->designation = $designation;
        $this->prix_ht     = $prix_ht;
    }

    abstract public function calculerPrixTTC();
}


class Produit extends Article {
    public function calculerPrixTTC() {
        return $this->prix_ht * 1.20; 
    }
}

class Service extends Article {
    public function calculerPrixTTC() {
        return $this->prix_ht * 1.10; 
    }
}

class ProduitAlimentaire extends Article {
    public function calculerPrixTTC() {
        return $this->prix_ht * 1.055;
    }
}

 
class Facture {
    public string $numero;
    public string $date;
    public string $client;
    public array  $lignes = [];

    public function __construct(string $numero, string $date, string $client) {
        $this->numero = $numero;
        $this->date   = $date;
        $this->client = $client;
    }

    public function ajouterLigne(Article $article, int $quantite){
        $this->lignes[] = ['article' => $article, 'quantite' => $quantite];
    }

    public function calculerTotalHT() {
        $total = 0;
        foreach ($this->lignes as $ligne)
            $total += $ligne['article']->prix_ht * $ligne['quantite'];
        return $total;
    }

    public function calculerTotalTTC() {
        $total = 0;
        foreach ($this->lignes as $ligne)
            $total += $ligne['article']->calculerPrixTTC() * $ligne['quantite'];
        return $total;
    }

    public function calculerTotalTVA() {
        $totalTva = $this->calculerTotalTTC() - $this->calculerTotalHT();
        return $totalTva;
    }

    public function afficherFacture(){
        echo "facture : " . $this->numero . "\n";
        echo "date : " . $this->date . "\n";
        echo "client : " . $this->client . "\n";
 
        foreach ($this->lignes as $ligne) {
            $a     = $ligne['article'];
            $quantite   = $ligne['quantite'];
            $total = $a->calculerPrixTTC() * $quantite;
            echo $a->designation . " x " . $quantite . "  ht : " . $a->prix_ht . "DH TTC: " . $total . "DH\n";
        }

         echo "Total HT  : " . $this->calculerTotalHT() . " €\n";
        echo "Total TVA : " . $this->calculerTotalTVA() . " €\n";
        echo "Total TTC : " . $this->calculerTotalTTC() . " €\n";
     }
}

 
$facture = new Facture("fact1", "2024-01-15", "test");

$facture->ajouterLigne(new Produit("P001", "Ordinateur", 800);
$facture->ajouterLigne(new Service("S001", "Maintenance", 500), 1);
$facture->ajouterLigne(new ProduitAlimentaire("A001", "Café", 12), 10);

$facture->afficherFacture();