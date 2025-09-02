$(document).ready(function () {
    $("#show").css("background-color","green")
    $("#show").css("color","white")
    $("#hide").css("color","white")
    $("#hide").css("background-color","red")
    $("#hide").click(function () {
        $("ul").hide(1500)
    })
    $("#show").click(function () {
        $("ul").show(1500)
    })

})