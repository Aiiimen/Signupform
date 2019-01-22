$(document).ready(function() {


  $(".submit-btn").click(function() {

    //get vals from inputs
    var username = $("input[name=username]").val();
    var password = $("input[name=password]").val();

    //animate success screen if both fields aren't empty
    if (username != "" && password != "") {

      $(".success-container").animate({
        top: "5%"
      }, 400, function() {
        $('.success-container .content-container').fadeIn(100);
      });
    }
    //animate failed screen
    else {
      $(".failed-container").animate({
        top: "5%"
      }, 400, function() {
        $('.failed-container .content-container').fadeIn(100);
      });
    }


    //toggle message screens - back to main sign in page
    $('.message-container').click(function() {
      $(this).animate({
          top: "100%"
        }, 400),
        function() {
          $(this).fadeOut(100);
        }
    })
  });


}); //end of ready
