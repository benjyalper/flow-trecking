$("body").css("background-color", "purple");

$("button").click(function () {
    alert("Flow-Trecking!")
    $(".logo-container2").slideToggle();
});

$("h1").on("click", function () {
    $("h1").fadeOut().fadeIn();
});

$(".logo-container2").click(function () {
    $(".logo-container2").slideUp().slideDown();
});

$("h1").on("mouseover", function () {
    $("h1").animate({ opacity: 0.5 }).css("color", "green");//only works with properties with numerical values
});


