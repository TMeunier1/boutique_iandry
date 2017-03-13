$(document).ready(function() {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

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

    divRow.appendTo(main);
    divColUn.appendTo(divRow);
    sectionArticle.appendTo(divColUn);
    titre.appendTo(sectionArticle);
    titre.html(catalog[index].name);
    description.appendTo(sectionArticle);
    description.html(catalog[index].description);
    divColDeux.appendTo(divRow);
    sectionPanier.appendTo(divColDeux);
    photo.appendTo(sectionPanier);
    photo.attr("src", catalog[index].pictures);
    prix.appendTo(sectionPanier);
    prix.html("Prix : " + catalog[index].price);
    stock.appendTo(sectionPanier);
    stock.html("Stock : " + catalog[index].quantity);
    buttonPanier.appendTo(sectionPanier);
    buttonPanier.html("Panier");
    buttonPlus.appendTo(sectionPanier);
    buttonPlus.html("+");
    buttonMoins.appendTo(sectionPanier);
    buttonMoins.html("-");


    buttonPanier.click(function() {
        var panier = {}
        // panier[index] = 0;
        panier = sessionStorage.getItem("panier");
        if (panier == null) {
            panier = {};
            panier[index] = 0;
        }
        else {
            panier = JSON.parse(panier);
        }
        if (panier[index]) {
            panier[index] = panier[index] + 1;
        }
        else {
            panier[index] = 1;
        }
        var panier_json = JSON.stringify(panier);
        sessionStorage.setItem("panier", panier_json);
    })
});
