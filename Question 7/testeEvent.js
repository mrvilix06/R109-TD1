$(function () {
    $("#click").click(function () {
        window.open("https://www.google.com");
    });

    $("#mouseover").mouseover(function () {
        window.alert("Mouse over");
    }
    );

    $("#mouseover").mouseout(function () {
        window.alert("Mouse out");
    }
    );
});
