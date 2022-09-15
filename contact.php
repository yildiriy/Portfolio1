<?php


$message_ok = "Votre message a bien été envoyé! Un retour vous sera fait dans les meilleurs délais."
$message_erreur = "L'envoi du message a échoué. Veuillez réessayer svp!"

$nom        = $_POST['name'];
$messagerie = $_POST['email'];
$contenu    = $_POST['message'];

$entete = "Message de : $nom\n";
$entete = wordwrap($messagerie, 70, "\r\n");
$corps = "Bonjour, \n\n $ contenu\n\n";
$piedmail = "Me contacter : \n\n$nom\n$messagerie";

if ($nom != "" && $messagerie != "" && $contenu !="")
{
    if (preg_match('#^[\w.-]+@[\w.-]+\.[a-z]{2,6}$#i', $messagerie))
    {
        $message = "$entente\n$corps\n$piedmail";
        mail('yildiriy@gmail.com', 'formulaire de mon site web', $message);
        echo $msg_ok
    }
    else
    {
        echo $msg_erreur
    }
}
else
{
    echo $msg_erreur
}

?>