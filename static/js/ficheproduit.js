$(document).ready(function() {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var data = $.ajax({
        url: "https://codi-e-commerce.herokuapp.com/",
        type: "get",
        dataType: 'json',
        success: function(data) {
            var index = GET_PARAM("index")

            var main = $(".ficheproduit");
            var divRow = $("<div class='row'>");
            var divColUn = $("<div class='col-xs-6'>");
            var sectionArticle = $("<section id='article'>");
            var titre = $("<h2></h2>");
            var description = $("<p></p>");
            var divColDeux = $("<div class='col-xs-6'>");
            var sectionPanier = $("<section id='panier'></section>");
            var photo = $("<img>");
            var prix = $("<span id='prix'>");
            var stock = $("<span id='stock'>");
            var buttonPanier = $("<button id='Ajouter au panier'>");
            var buttonPlus = $("<button id='plus'>");
            var buttonMoins = $("<button id='moins'>");
            var inputQuantite = $("<input id='quantite'></input>")

            divRow.appendTo(main);
            divColUn.appendTo(divRow);
            sectionArticle.appendTo(divColUn);
            titre.appendTo(sectionArticle);
            titre.html(data[index].name);
            description.appendTo(sectionArticle);
            description.html(data[index].description);
            divColDeux.appendTo(divRow);
            sectionPanier.appendTo(divColDeux);
            photo.appendTo(sectionPanier);
            photo.attr("src", data[index].pictures);
            prix.appendTo(sectionPanier);
            prix.html("Prix : " + data[index].price);
            stock.appendTo(sectionPanier);
            stock.html("Stock : " + data[index].quantity);
            buttonPanier.appendTo(sectionPanier);
            buttonPanier.html("Panier");
            buttonPlus.appendTo(sectionPanier);
            buttonPlus.html("+");
            buttonMoins.appendTo(sectionPanier);
            buttonMoins.html("-");
            inputQuantite.appendTo(sectionPanier);
            inputQuantite.css("width", "4em");

            var clickPlus = 0;

            buttonPlus.click(function() {
                clickPlus = clickPlus + 1;
                inputQuantite.val(clickPlus);
            });

            buttonMoins.click(function() {
                clickPlus = clickPlus - 1;
                inputQuantite.val(clickPlus);
                if (clickPlus < 0) {
                    clickPlus = 0;
                    inputQuantite.val(0);
                }
            })

            buttonPanier.click(function() {
                var panier = {};
                panier = localStorage.getItem("panier");
                if (panier == null) {
                    panier = {};
                    panier[index] = inputQuantite.val();
                } else {
                    panier = JSON.parse(panier);
                }
                if (panier[index]) {
                    panier[index] = inputQuantite.val();
                } else {
                    panier[index] = inputQuantite.val();
                }

                var panier_json = JSON.stringify(panier);
                localStorage.setItem("panier", panier_json);
            })
        }
    });
});
