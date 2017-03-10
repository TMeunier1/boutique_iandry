$(document).ready(function() {

    var main = $("main");
    var divRow = $("#divrow");
    var navigation = $("<nav aria-label='Page navigation'></nav>");
    main.append(navigation);
    var pages = $("<ul class='pagination'></ul>");
    navigation.append(pages);

    for (var i = 0; i < catalog.length; i++) {
        var col = $("<div class='col-xs-4'></div>");
        divRow.append(col);

        var section = $("<a class='mainsection'></a>");
        col.append(section);

        var titre = $("<h2></h2>")
        section.append(titre);
        titre.html(catalog[i].name);

        var miniature = $("<img>");
        miniature.appendTo(section);
        miniature.attr("src", catalog[i].thumb);

        var description = $("<p></p>");
        section.append(description);
        description.html(catalog[i].description);

        var prix = $("<p></p>");
        section.append(prix);
        prix.html("Prix : " + catalog[i].price);

        var quantite = $("<p></p>");
        quantite.appendTo(section);
        quantite.html("Quantité : " + catalog[i].quantity);
    }

    for (var i = 0; i < catalog.length / 10; i++) {
        var nbrPages = $("<li>");
        pages.append(nbrPages);
        var lienPages = $("<a class='lienPages'>").html(i+1).attr("href", "#");
        lienPages.appendTo(nbrPages);
    }
});
