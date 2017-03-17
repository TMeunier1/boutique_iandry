$(document).ready(function() {

    var panier = JSON.parse(localStorage.getItem("panier"));
    var prixTotal = 0;

    var main = $(".panier");
    var data = $.ajax({
        url: "https://codi-e-commerce.herokuapp.com/",
        type: "get",
        dataType: 'json',
        success: function(data) {
            for (var index in panier) {
                var produit = data[index]
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
                var buttonMoins = $("<button class='buttonMoins'></button>");
                var buttonPlus = $("<button class='buttonPlus'></button>");
                var buttonRemove = $("<button class='remove'></button>")

                sectionProduit.appendTo(main);
                divRow.appendTo(sectionProduit);
                divCol.appendTo(divRow);
                photo.appendTo(divCol);
                photo.attr("src", data[index].thumb);
                titre.appendTo(divCol);
                titre.html(data[index].name);
                description.appendTo(divCol);
                description.html(data[index].description);
                sectionPrix.appendTo(main);
                quantite.appendTo(sectionPrix);
                inputQuantite.appendTo(sectionPrix);
                inputQuantite.val(panier[index]);
                spanPrix.appendTo(sectionPrix);
                spanPrix.val(data[index].price);
                spanPrix.html("Prix : " + spanPrix.val() + "€");
                spanTVA.appendTo(sectionPrix);
                spanTVA.html("TVA : 10%");
                var prixArticleTotal = inputQuantite.val() * spanPrix.val() / 1.1;
                prixArticleTotal = prixArticleTotal.toFixed(2);
                spanTotalArticle.appendTo(sectionPrix);
                spanTotalArticle.html("Total : " + prixArticleTotal + "€");
                buttonPlus.appendTo(sectionPrix);
                buttonPlus.html("+");
                buttonMoins.appendTo(sectionPrix);
                buttonMoins.html("-");
                buttonRemove.appendTo(sectionPrix);
                buttonRemove.html("remove");

                $(".remove").click(function() {
                    // localStorage.removeItem("panier");
                    $(this).parent().prev().remove();
                    $(this).parent().remove();
                });
            }
            prixTotal = prixArticleTotal;
            if (prixTotal != 0) {
                prixTotal = parseInt(prixTotal) + parseInt(prixTotal);
                console.log(prixTotal)
            }

            var clickPlus;

            $(".buttonPlus").click(function() {
                clickPlus = parseInt($(this).parent().find("input").val());
                clickPlus = clickPlus + 1;
                $(this).parent().find("input").val(clickPlus);
            });

            $(".buttonMoins").click(function() {
                clickPlus = parseInt($(this).parent().find("input").val());
                clickPlus = clickPlus - 1;
                $(this).parent().find("input").val(clickPlus);
            });

            var spanTotal = $("<span></span>");
            spanTotal.appendTo(main);
            spanTotal.html("Total : " + prixTotal + "€");

            if (spanTotal.html() == "Total : " + NaN + "€") {
                spanTotal.remove();
            }
        }
    });
});
