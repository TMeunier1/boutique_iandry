<?php

define('MYSQL_SERVEUR', 'localhost');
define('MYSQL_UTILISATEUR', 'Iandri');
define('MYSQL_MOTDEPASSE', '25020101');
define('MYSQL_BASE', 'BOUTIQUE');

$mysql = new MySQLi(MYSQL_SERVEUR,
                    MYSQL_UTILISATEUR,
                    MYSQL_MOTDEPASSE,
                    MYSQL_BASE);


?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Boutique en ligne</title>
    <link rel="stylesheet" href="static/external/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="static/css/style.css">
    <link rel="stylesheet" href="static/external/simplePagination.js/simplePagination.css">
</head>

<body>
    <div class="container">
        <div class="row nomargin nopadding">
            <div class="col-xs-12 nomargin nopadding">

            </div>
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2 nopadding nomargin">
                            <img src="static/images/food-q-c-100-100-9.jpg" alt="LOGO">
                        </div>
                        <div class="col-xs-10">
                            <nav class="navbar navbar-default">
                                <ul class="nomargin">
                                    <li class="navbar-btn"><a href="index.php">Accueil</a></li>
                                    <li class="navbar-btn"><a href="catalogue.php">Catalogue</a></li>
                                    <li class="navbar-btn"><a href="indexform.html">Contactez nous</a></li>
                                    <li class="navbar-btn"><a href="panier.php">Panier</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
