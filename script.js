$(document).ready(function() {
    $('[data-toggle = "tooltip"]').tooltip();
})

var count = 0;
$('#menuIcon').click(function(){

    count++;
    if(count == 1)
    {
        $(this).find("i").removeClass("fa-sort-amount-up-al").addClass("fas fa-sort-amount-down-alt");
    }
    else if(count == 2)
    {
        
        $(this).find("i").removeClass("fa-sort-amount-down-alt ").addClass("fas fa-sort-amount-up-alt");
        count = 0;
    }
});






