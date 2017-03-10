$(document).ready(function() {

    var panier_json = sessionStorage.getItem("panier");
    var panier = JSON.parse(panier_json);

    var main = $(".panier");
    var sectionProduit = $("<section></section>");
    var divRow = $("<div class='row'></div>");
    var divCol = $("<div class='col-xs-12 textaligncenter'></div>")
    var titre = $("<h2></h2>");
    var description = $("<p></p>");
    var sectionPrix = $("<section></section>");
    var spanPrix = $("<span></span>");
    var spanTVA = $("<span></span>");
    var spanTotal = $("<span></span>");

    sectionProduit.appendTo(main);
    divRow.appendTo(sectionProduit);
    divCol.appendTo(divRow);
    titre.appendTo(divCol);
    titre.html();
    description.appendTo(divCol);
    sectionPrix.appendTo(main);
    spanPrix.appendTo(sectionPrix);
    spanTVA.appendTo(sectionPrix);
    spanTotal.appendTo(sectionPrix);
});
