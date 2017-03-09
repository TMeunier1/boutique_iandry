$(document).ready(function() {
    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    console.log(GET_PARAM("nom"))
    var product0 = {
        name : "Produit 0",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 24,
        quantity : 4,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product1 = {
        name : "Produit 1",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 48,
        quantity : 1,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product2 = {
        name : "Produit 2",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 41,
        quantity : 5,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product3 = {
        name : "Produit 3",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 40,
        quantity : 10,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product4 = {
        name : "Produit 4",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 32,
        quantity : 8,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product5 = {
        name : "Produit 5",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 31,
        quantity : 8,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product6 = {
        name : "Produit 6",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 34,
        quantity : 3,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product7 = {
        name : "Produit 7",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 29,
        quantity : 3,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product8 = {
        name : "Produit 8",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 42,
        quantity : 3,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }


    var product9 = {
        name : "Produit 9",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et egestas augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum maximus eros, a condimentum diam dapibus non. Ut tempus sapien at blandit hendrerit. Mauris vel vehicula orci. Donec non risus eu diam accumsan ornare a vel nunc. Etiam porta enim nisi, sit amet imperdiet lectus commodo eget. Nulla magna ex, dapibus sed rhoncus nec, auctor et ligula. In malesuada ante neque, quis condimentum sapien faucibus eget. Vestibulum in interdum ipsum. Duis ut lorem velit. Aenean congue cursus neque, eget egestas turpis mattis non. Mauris quis diam aliquet, blandit justo id, cursus eros. Sed et vulputate velit. Integer finibus lacus vel porta laoreet.",
        price : 50,
        quantity : 10,
        thumb : "http://placehold.it/140x140",
        pictures : ["http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400", "http://placehold.it/400x400"],
    }

    var catalog = [product0 ,product1 ,product2 ,product3 ,product4 ,product5 ,product6 ,product7 ,product8 ,product9 ,]
    var section = $("#propagande");
    var divRow = $("<div class='row nomargin'></div>")
    divRow.appendTo(section);
    var divCol = $("<div class='col-xs-12 textaligncenter nopadding'></div>");
    divCol.appendTo(divRow);
    for (i = 0; i < 3; i++) {
    var article = $("<a class='col-xs-4 nopadding'></a>");
    article.attr("href", "ficheproduit.html");
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
    var item = catalog[Math.floor(Math.random()*catalog.length)];
    h1.html(item.name)
    p.html(item.description);
    prix.html("Prix : "+item.price);
    quantite.html("Quantité : "+item.quantity);
    img.attr("src", item.thumb);
}

    for (i = 0; i < catalog.length; i++) {

    }
});
