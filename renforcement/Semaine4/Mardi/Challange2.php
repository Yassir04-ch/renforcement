<?php

class logging{
    private static $messages  = [];
    public static function ajoutermessage($niveau,$message ){
       self::$messages[] =[
         "niveau"=>$niveau,
         "message"=>$message
       ];
    }

    public static function messages(){
        foreach(self::$messages as $message){
            echo "niveau est : ".$message['niveau'];
            echo "message est : ".$message['message'];
        }
    }

    public static function filterNiveau($niveau){
        $log =[];
          foreach(self::$messages as $message){
            if($message["niveau"] == $niveau){
                $log[] = $message;
            }
          }
          return $log;
    }

    public static function 
}