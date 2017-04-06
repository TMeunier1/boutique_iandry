<?php


require_once 'header.php';



$id = $_GET["X"];


$sql = "SELECT * FROM produit WHERE id_produit = $id";
$res = $mysql->query($sql);
$row = $res->fetch_array();

?>


            <div class="row">
                <div class="col-xs-12 col-md-10 nopadding">
                    <main class="ficheproduit">

                         <div class="col-xs-4">
                             <a class="mainsection">
                                 <h2><?php echo $row["name_produit"]?></h2>
                                 <img src="http://placehold.it/140x140">
                                 <p><?php echo $row["description_produit"]?></p><br/>
                                 <p><?php echo $row["prix_produit"]?></p>
                             </a>
                         </div>


                    </main>
                </div>

                <div class="col-xs-12 col-md-2 nopadding">
                    <aside class="">
                        <section>
                            <form class="" action="index.html" method="post">
                                <fieldset>
                                    <legend>Se connecter</legend>
                                    <label for="">Nom d'utilisateur</label>
                                    <input type="text" name="" value="">
                                    <label for="">Mot de passe</label>
                                    <input type="text" name="" value="">
                                    <input type="checkbox" name="" value="">
                                    <label for="">Se souvenir de moi</label>
                                    <button type="button" name="button">Connexion</button>
                                    <a href="#">Creer un compte</a>
                                </fieldset>
                            </form>
                        </section>
                        <section>
                            <div class="row">
                                <article class="col-xs-12">
                                    <img src="static/images/204.jpeg" alt="">
                                    <h1>Publicité</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </article>
                                <article class="col-xs-12">
                                    <img src="static/images/205.jpeg" alt="">
                                    <h1>Publicité</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </article>
                                <article class="col-xs-12">
                                    <img src="static/images/206.jpeg" alt="">
                                    <h1>Publicité</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
                                </article>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
            <?php

            require_once 'footer.php';

            ?>

            <!-- <footer class="col-xs-12 footer">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </footer> -->
        </div>
    </div>
    <script src="static/external/jquery/dist/jquery.min.js" charset="utf-8"></script>
    <script src="static/external/bootstrap/dist/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="static/js/catalog_x100.js" charset="utf-8"></script>
    <script src="static/js/ficheproduit.js" charset="utf-8"></script>

</body>
</html>
