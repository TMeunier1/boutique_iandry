$(document).ready(function() {

    var panier = JSON.parse(localStorage.getItem("panier"));
    var prixTotal = 0;

    var main = $(".panier");

    for (var index in panier) {
        var produit = catalog[index]
        var quantite = panier[index];

        var sectionProduit = $("<section></section>");
        var divRow = $("<div class='row'></div>");
        var divCol = $("<div class='col-xs-12 textaligncenter'></div>");
        var photo = $("<img>");
        var titre = $("<h2></h2>");
        var description = $("<p></p>");
        var sectionPrix = $("<section></section>");
        var quantite = $("<label>Quantitée</label>")
        var inputQuantite = $("<input></input>");
        var spanPrix = $("<span></span>");
        var spanTVA = $("<span></span>");
        var spanTotalArticle = $("<span></span>");
        var buttonMoins = $("<button></button>");
        var buttonPlus = $("<button></button>");


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
        quantite.appendTo(sectionPrix);
        inputQuantite.appendTo(sectionPrix);
        inputQuantite.val(panier[index]);
        inputQuantite.attr("class", index)
        spanPrix.appendTo(sectionPrix);
        spanPrix.val(catalog[index].price);
        spanPrix.html("Prix : " + spanPrix.val() + "€");
        spanTVA.appendTo(sectionPrix);
        spanTVA.html("TVA : 10%");
        var prixArticleTotal = inputQuantite.val() * spanPrix.val();
        spanTotalArticle.appendTo(sectionPrix);
        spanTotalArticle.html("Total : " + prixArticleTotal + "€");
        buttonPlus.appendTo(sectionPrix);
        buttonPlus.html("+");
        buttonPlus.attr("id", index)
        buttonMoins.appendTo(sectionPrix);
        buttonMoins.attr("id", index)
        buttonMoins.html("-");

        prixTotal = prixArticleTotal;
        if (prixTotal != 0) {
            prixTotal = prixTotal + prixTotal;
        }
    }


    buttonPlus.click(function() {
        if ($(this).id == inputQuantite.id) {
        var clickPlus = parseInt(inputQuantite.val());
        clickPlus = clickPlus + 1;
        inputQuantite.val(clickPlus);
    }

    });

    buttonMoins.click(function() {
        clickPlus = parseInt(inputQuantite.val());
        clickPlus = clickPlus - 1;
        inputQuantite.val(clickPlus);
    });
    var spanTotal = $("<span></span>");
    spanTotal.appendTo(main);
    spanTotal.html("Total : " + prixTotal + "€");
});
