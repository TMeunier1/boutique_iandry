// $(document).ready(function() {
//     $.ajax({
//         url: "http://silently.github.io/fake-api/posts/list.json",
//         type: "GET",
//         dataType: "json",
//         success: function(objects, status) {
//             for (var key in objects) {
//                 var article = objects[key];
//                 var postContainer = $("<div clas ='panel panel-default'></div>");
//                 var picture = $("<img>").attr({
//                     src: article.picture
//                 });
//                 var title = $("<h2 class='panel-title'></h2>").html(article.title).css({
//                     "textTransform": "capitalize"
//                 });
//                 var titleContainer = $("<div class='panel-heading'></div>").append(title);
//                 var tag = "Tags :"
//                 for (var i = 0; i < article.tags.length; i++) {
//                     tag += article.tags[i];
//                     if (i < article.tags.length - 1) {
//                         tag += "|"
//                     }
//                 };
//                 tag += "."
//                 var tags = $("<span class='pull-rigth'></span>").html(tag);
//                 var extract = $("<p></p>").html(article.abstract);
//                 var author = "By : "
//                 for (var i = 0; i < article.authors.length; i++) {
//                     author += article.authors[i].name;
//                     if (i < article.authors.length - 1) {
//                         author += ",";
//                     }
//                 };
//                 author += ".";
//                 autContainer = $("<p></p>").html(author);
//                 var date = 0;
//                 var postInfos = $("<div class='panel-footer'></div>").append(date, autContainer, tags);
//                 var post = $("<div class='panel-body'></div>").append(picture, extract);
//                 postContainer.append(titleContainer, post, postInfos).addClass("post");
//                 $("#posts").append(postContainer);
//             }
//         }
//     });
// });



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
    $("#divrow").paginate({ 'perPage': 6 });
});
