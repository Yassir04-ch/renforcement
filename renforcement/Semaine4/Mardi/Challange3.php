<?php


final class Coffre{
    private string $cle;
    private string $mode;

    public function __construct(string $cle,string $mode)
    {
        $this->cle = $cle;
        $this->mode = $mode;
     }

     final public function chiffrement($text , $num){
        
        for($i = 0 ; $i<strlen($text) ;$i++){
           $result = chr(ord($text[$i] + $num));
        }
        return $result;
     }

     final public function masque($password){
        $masq = substr($password ,0,2)."***".substr($password ,-2);
        return $masq;
     }


}


class Hack extends Coffre
{

}

$c = new Hack("test","test");

echo $c->masque("password");