$( document ).ready(function() {

  $("#profile img").css({"opacity":".8"});
$("#recipeAdded").hide();


  $("#profile img").on("click", function() {
    $(this).css(
        {"opacity":"1", "border":"solid"}
    );
  });

  $("#addRecipe").on("click", function() {
    $(this).css(
        {"opacity":".5",}
    );
  });
  $("#addRecipe").on("click", function() {
    $('#recipeAdded').show();
  });

  $( "#tabs" ).tabs();

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
})
});
