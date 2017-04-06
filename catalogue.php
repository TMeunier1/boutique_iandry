<?php

require_once 'header.php';

 $sql = 'SELECT * FROM produit';
 $res = $mysql->query($sql);
 ?>
 <!-- voir header.php -->
 <!-- j'ai enlevé tout les codes de la partie superieure de chaque page jusqu'à la balise fermante "/header".On le remplace par ce code php "require_once".On le refait pour tout les éléments identiques , exemple le header , footer ou des aside de nav aussi.Par contre , On garde les codes spécifiques de chaque élémént
     de chaque page ex :$id = $_GET["X"];
     $sql = "SELECT * FROM produit WHERE id_produit = $id";
     $res = $mysql->query($sql);
     $row = $res->fetch_array();
 dans la page "produit.php". -->
            <div class="row">
                <div class="col-xs-12 col-md-10 nopadding">
                    <main class="catalogue">
                        <div class="row" id="divrow">
                            <?php

                            while (NULL !== ($row = $res->fetch_array())) {?>

                             <div class="col-xs-4">
                                 <a href="produit.php?X=<?php echo $row["id_produit"]?>" class="mainsection">
                                    <!-- 1- je cree un lien vers la page ficheproduit.php
                                    2- j'affiche l'identité du produit dans la BDD. Ici -->
                                     <h2><?php echo $row["name_produit"]?></h2>
                                     <!-- j'affiche le nom du produit que je recupere dans la BDD en H2  -->
                                     <img src = "<?php echo "static/images".$row["image"] ?>">
                                     <!-- j'affiche la photo du produit que je recupere dans la BDD ici la photo  n'existe pas encore  -->
                                     <p><?php echo $row["description_produit"]?></p><br/>
                                     <!-- j'affiche la description du produit que je recupere dans la BDD en p  -->
                                     <p><?php echo $row["prix_produit"]?></p>
                                     <!-- j'affiche le prix du produit que je recupere dans la BDD en p  -->

                                 </a>

                             </div>
                             <?php
                         }

                         $mysql->close();

                         ?>

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
            </footer>
             j'ai supprimer le footer car j'utilise le '<?php require_once 'footer.php';?>' .Comme on fait pour chaque header de chaque page . -->
        </div>

    </div>
    <script src="static/external/jquery/dist/jquery.min.js" charset="utf-8"></script>
    <script src="static/external/bootstrap/dist/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="static/external/simplePagination.js/jquery.simplePagination.js" charset="utf-8"></script>
    <script src="static/external/paginate/src/jquery.paginate.js" charset="utf-8"></script>


</body>

</html>
