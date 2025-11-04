<?php

$messageOk = "Votre message a bien été envoyé ! Un retour vous sera fait dans les meilleurs délais.";
$messageError = "L'envoi du message a échoué. Veuillez réessayer s'il vous plaît !";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo $messageError;
    exit;
}

$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$content = isset($_POST['message']) ? trim($_POST['message']) : '';

if ($name === '' || $email === '' || $content === '') {
    echo $messageError;
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo $messageError;
    exit;
}

$mailSubject = $subject !== '' ? $subject : 'Formulaire de mon site web';

$bodyLines = [
    "Message de : $name",
    "Email : $email",
    '',
];

if ($subject !== '') {
    $bodyLines[] = "Sujet : $subject";
    $bodyLines[] = '';
}

$bodyLines[] = wordwrap($content, 70, "\r\n");
$bodyLines[] = '';
$bodyLines[] = 'Me contacter :';
$bodyLines[] = $name;
$bodyLines[] = $email;

$message = implode("\r\n", $bodyLines);
$headers = sprintf("From: %s <%s>\r\nReply-To: %s\r\n", $name, $email, $email);

if (mail('yildiriy@gmail.com', $mailSubject, $message, $headers)) {
    echo $messageOk;
} else {
    echo $messageError;
}
