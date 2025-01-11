$("td").mouseover(function(){
    $(this).css("background-color", "blue"); // change la couleur de fond de la cellule survolée grace à this qui fait référence à l'élément survolé
});

$("td").mouseout(function(){
    $(this).css("background-color", "white");
});