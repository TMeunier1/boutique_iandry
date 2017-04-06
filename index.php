<?php

require_once 'header.php';
$sql = "SELECT * FROM produit ";
$res =  $mysql->query($sql);

while (($row = $res->fetch_array())!==NULL){

    $PRODUITS[] = $row;
    // on stock tout le produit de la ligne dans un variable tableau , ici on les apl PRODUIT

}
// var_dump(count($PRODUIT));
// pour afficher les infos de la variabels le nbr c var_dump+count c pr compter le nbr des elements dans le tblx
$nbPt = count($PRODUITS);

?>




        <div class="row">
            <div class="col-xs-12 col-md-10 nopadding">
                <main class="homepage">
                    <div class="row">
                        <div class="col-xs-12">
                            <section id="about">
                                <h1>A propos de nous</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoLorem
                                    ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodop>
                            </section>

                        </div>
                    </div>
                    <section id="propagande">


                        <div class="row nomargin">
                            <div class="col-xs-12 textaligncenter nopadding">

                        <?php for ($i = 0; $i < 3 ; $i++) {

                            $nbaleat = random_int(0, $nbPt-1);
                                $produit = $PRODUITS[$nbaleat];
                                // var_dump($produit);
                                echo '<a class="col-xs-4 nopadding" style="color: black;" href="produit.php?X='.$produit['id_produit'].'"><img src="http://placehold.it/140x140">';
                                echo "<h1>".$produit['name_produit']."</h1>";
                                echo "<p>".$produit['description_produit']."</p>";
                                echo "<p>".$produit['prix_produit']."</p>";
                                echo "</a>";
                        }

                         ?>

                            </div>
                        </div>



                    </section>
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

</body>

</html>
