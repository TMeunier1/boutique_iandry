$(document).ready(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var main = $("main");
    var divRow = $("#divrow");
    var navigation = $("<nav aria-label='Page navigation'></nav>");
    main.append(navigation);
    var pages = $("<ul class='pagination'></ul>");
    navigation.append(pages);
    var data = $.ajax({
        url: "https://codi-e-commerce.herokuapp.com/",
        type: "get",
        dataType: 'json',
        success: function(data) {
            for (var i = 0; i < data.length; i++) {
                var col = $("<div class='col-xs-4'></div>");
                divRow.append(col);

                var section = $("<a class='mainsection'></a>");
                col.append(section);
                section.attr("href", "ficheproduit.html" + "?index=" + i);

                var titre = $("<h2></h2>")
                section.append(titre);
                titre.html(data[i].name);

                var miniature = $("<img>");
                miniature.appendTo(section);
                miniature.attr("src", data[i].thumb);

                var description = $("<p></p>");
                section.append(description);
                description.html(data[i].description);

                var prix = $("<p></p>");
                section.append(prix);
                prix.html("Prix : " + data[i].price);

                var quantite = $("<p></p>");
                quantite.appendTo(section);
                quantite.html("Quantité : " + data[i].quantity);
            }
            $("#divrow").paginate({
                'perPage': 6
            });
        }
    });
});
