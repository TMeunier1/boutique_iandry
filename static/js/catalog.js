$(document).ready(function() {
    var product0 = {
        name : "Produit 0",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 35,
        quantity : 4,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }

    var catalog = [product0 ,]
    var main = $("main");
    var divRow = $("#divrow");


    for (i = 0; i < catalog.length; i++) {
        var col = $("<div class='col-xs-4'></div>");
        divRow.append(col);
        var section = $("<section></section>");
        col.append(section);
        var titre = $("<h2></h2>")
        section.append(titre);
        titre.html(catalog[i].name);
        var description = $("<p></p>");
        section.append(description);
        description.html(catalog[i].description);
    }



// h1.appendTo(section);
// section.append(h1);
//
//
// <section><h1></h1></section>
//






});
