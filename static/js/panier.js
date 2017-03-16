$(document).ready(function() {

    var panier = JSON.parse(localStorage.getItem("panier"));
    for (var index in panier){
        var produit = catalog[index]
        var quantite = panier[index];

        var main = $(".panier");
        var sectionProduit = $("<section></section>");
        var divRow = $("<div class='row'></div>");
        var divCol = $("<div class='col-xs-12 textaligncenter'></div>");
        var photo = $("<img>");
        var titre = $("<h2></h2>");
        var description = $("<p></p>");
        var sectionPrix = $("<section></section>");
        var spanQuantite = $("<span></span>");
        var spanPrix = $("<span></span>");
        var spanTVA = $("<span></span>");
        var spanTotal = $("<span></span>");

        sectionProduit.appendTo(main);
        divRow.appendTo(sectionProduit);
        divCol.appendTo(divRow);
        photo.appendTo(divCol);
        photo.attr("src", catalog[index].thumb);
        titre.appendTo(divCol);
        titre.html(catalog[index].name);
        description.appendTo(divCol);
        description.html(catalog[index].description);
        sectionPrix.appendTo(main);
        spanPrix.appendTo(sectionPrix);
        spanPrix.html("Prix : " + catalog[index].price + "€");
        spanTVA.appendTo(sectionPrix);
        spanTVA.html("TVA : 10%");
    }


});
