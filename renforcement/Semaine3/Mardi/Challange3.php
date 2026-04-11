<?php

class Bibliotheque{
    private array $livres = [];
    private array $emprunts = [];

    public function ajouterLivre($titre,$auteur){
        $this->livres[]= [
        "titre"=>$titre,
        "auteur"=>$auteur,
        "disponible"=>true,
       ];
       return "livre a été ajouté";
    }

    public function emprunter($titre, $emprunteur){

        foreach($this->livres as $i => $livre){

            if($livre['titre'] == $titre){

                if($livre['disponible'] == false){
                    return "livre est déja emprunter";
                }

                $this->livres[$i]['disponible'] = false;

                $this->emprunts[] = [
                    'titre' => $titre,
                    'emprunteur' => $emprunteur,
                    'date_emprunt' => date('Y-m-d'),
                    'date_retour_prevue' => date('Y-m-d', strtotime('+14 days')),
                    'date_retour_effectif' => null,
                    'amende' => 0
                ];

                return "livre emprunté avec succès";
            }
        }

        return "livre non trouvé";
    }

  public function retourner($titre) {

        foreach ($this->emprunts as $i => $emprunt) {

            if ($emprunt['titre'] == $titre && $emprunt['date_retour_effectif'] == null) {

                $today = date('Y-m-d');

                $this->emprunts[$i]['date_retour_effectif'] = $today;

                $amend = (strtotime($today) - strtotime($emprunt['date_retour_prevue'])) / 86400;

                if ($amend > 0) {
                    $this->emprunts[$i]['amende'] = $amend * 0.5;
                } else {
                    $this->emprunts[$i]['amende'] = 0;
                }

                 foreach ($this->livres as $j => $livre) {
                    if ($livre['titre'] == $titre) {
                        $this->livres[$j]['disponible'] = true;
                    }
                }

                return "livre retourne avec succes";
            }
        }

        return "livre non troue";
    }

    public function getAmendes($emprunteur){
        $total = 0;
        foreach($this->emprunts as $emprunt){
            if($emprunt['emprunteur'] == $emprunteur){
                $total += $emprunt['amende'];
            }
        }
        return $total;
     }

     public function getStatistiques() {

        $disponibles = 0;
        $empruntes = 0;
        $totalAmendes = 0;
 
        foreach ($this->livres as $livre) {
            if ($livre['disponible']) {
                $disponibles++;
            } else {
                $empruntes++;
            }
        }

        foreach ($this->emprunts as $emprunt) {
            $totalAmendes += $emprunt['amende'];
        } 

        return '--livres_disponibles : '.$disponibles.' --livres_empruntes : '.$empruntes.'--total_amendes : '.$totalAmendes;
    }
    
}

$biblio = new Bibliotheque();

echo $biblio->ajouterLivre("livre 1", "auteur 1")."\n";
echo $biblio->ajouterLivre("livre 2", "Auteur 2")."\n";

echo $biblio->emprunter("livre 1", "yassir")."\n";
echo $biblio->emprunter("livre 2", "yassir")."\n";

 echo $biblio->retourner("livre 1")."\n";
 

 echo $biblio->getAmendes("yassir")."\n";

echo($biblio->getStatistiques());