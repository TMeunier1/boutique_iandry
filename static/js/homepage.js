$(document).ready(function() {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    var section = $("#propagande");
    var divRow = $("<div class='row nomargin'></div>")
    divRow.appendTo(section);
    var divCol = $("<div class='col-xs-12 textaligncenter nopadding'></div>");
    divCol.appendTo(divRow);
    for (i = 0; i < 3; i++) {
    var article = $("<a class='col-xs-4 nopadding'></a>");
    article.appendTo(divCol);
    article.css("color", "black");
    var img = $("<img>");
    img.appendTo(article);
    var h1 = $("<h1></h1>");
    h1.appendTo(article);
    var p = $("<p></p>");
    p.appendTo(article);
    var prix = $("<p></p>");
    prix.appendTo(article);
    var quantite = $("<p></p>");
    quantite.appendTo(article);
    var j = Math.floor(Math.random()*catalog.length)
    var item = catalog[j];

    h1.html(item.name)
    p.html(item.description);
    prix.html("Prix : "+item.price);
    quantite.html("Quantité : "+item.quantity);
    img.attr("src", item.thumb);
    article.attr("href", "ficheproduit.html" + "?index=" + j);
}

    for (i = 0; i < catalog.length; i++) {

    }
});
