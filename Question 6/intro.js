$(function () {
    $("#blabla").append(" : texte inséré par JQuery");
    $("#suite").append(" texte inséré pour la Question 5");
    // ou  $("#suite").replaceWith("<h1 id="suite" class="entete">texte inséré pour la Question 5</h1>");

        // rouge en fond de page
        $("body").css("background-color", "red");
        //h1 en bleu
        $("h1").css("color", "blue");
        // vert pour ul
        $("ul").css("background-color", "green");
        // Gras pour classe important
        $(".important").css("font-weight", "bold");
        // Liste dans tableau en jaune
        $("table li").css("background-color", "yellow");
        // Italique pour premier element liste
        $("#liste li:first").css("font-style", "italic");
        // Italique pour dernier element liste
        $("#liste li:last").css("font-style", "italic");
})