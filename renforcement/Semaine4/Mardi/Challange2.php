<?php

class Logging{
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

    public static function  countErrur(){
        $count = 0;
        foreach(self::$messages as $message){
            if($message['niveau'] == 'ERROR'){
                $count++;
            }
        }
        return $count;
    }

    public static function vider(){
        self::$messages = [];
    }

    public static function exporter(){
        $msg = "";
         foreach(self::$messages as $message){
            $msg .= "niveau  : ".$message['niveau']. "  message  : ".$message['message']."\n";
         }
         return $msg;
    }
}



Logging::ajoutermessage("INFO", "application démarré");
Logging::ajoutermessage("ERROR", "connexion échoué");
Logging::ajoutermessage("WARNING", "mémoire faible");

Logging::messages();

print_r(Logging::filterNiveau('ERROR'));

echo Logging::countErrur()."\n";
echo Logging::exporter();