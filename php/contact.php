<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="statement">Statement</div>
</body>
</html>


<?php

@echo('Test');
/*//filtruje dane użytkownika
$name = htmlspecialchars(trim($_POST['name']));
$surname = htmlspecialchars(trim($_POST['surname']));
$email = htmlspecialchars(trim($_POST['email']));
$business =  htmlspecialchars(trim($_POST['business']));
$message = htmlspecialchars(trim($_POST['message']));
$send = $_POST['submit'];
//mail na który będa wysyłane wiadomości
$myEmail = "mateuszostanowko@gmail.com";
//nagłówki
$header = "Content-type: text/html; charset=utf-8\r\nFrom: $mail";
 
$statement
 if ($send)
    {
    //Sprawdzam nick
    if (empty($name))
        { $statement = "Nie wypełniłeś pola <strong>Imię !</strong><br/>"; }
    
    if (empty($surname))
        { $statement = "Nie wypełniłeś pola <strong>Imię !</strong><br/>"; }
    
    //Sprawdzam mail
    if (empty($mail))
        { $statement .= "Nie wypełniłeś pola <strong>E-mail !</strong><br/>"; }
    elseif (preg_match('/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\-\_\.]+\@[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\-\_\.]+\.[a-z]{2,4}$/',$mail) == false)
        { $statement .= "Niepoprawny adres E-mail! <br/>"; }
        
    //Sprawdzam wiadomosc
    if (empty($message))
        { $statement .= "Nie wypełniłeś pola <strong>Wiadomość !</strong><br/>"; }

    //Sprawdzam czy są błędy i wysyłam wiadomość
    if (empty($statement))
        {
        $content = "Nadawca wiadomości: $name $surname ($mail, $business) <br/> Treść wiadomości: <br/> $message";
        
        if (mail($myEmail, "Wiadomość dotycząca tworzenia stron internetowych", $content, $header))   
        {
         $statement .= "Twoja wiadomość została wysłana";
         setcookie("send", time()+60, time()+60);
         }
        else
            { $statement .= "Wystąpił błąd podczas wysyłania wiadomości, spróbuj później.";}   
        }
    }

    document.getElementById("statement").innerHTML = $statement;*/
?>