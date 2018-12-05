// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Provide hints on Problems page
$(document).ready(function () {
    $("button").click(function () {
        $("#div1").load("Hints.txt");
    });
});

