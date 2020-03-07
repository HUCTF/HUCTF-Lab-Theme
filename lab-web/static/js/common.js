$(document).ready(function(){
     if($(document).width()<768){
            $('#example-navbar-collapse').addClass('nav_change1')
            $('#example-navbar-collapse').removeClass('nav_change2')
        }
        else{
            $('#example-navbar-collapse').removeClass('nav_change1')
            $('#example-navbar-collapse').addClass('nav_change2')
        }

    $(window).resize(function () {
        if($(document).width()<768){
            $('#example-navbar-collapse').addClass('nav_change1')
            $('#example-navbar-collapse').removeClass('nav_change2')
        }
        else{
            $('#example-navbar-collapse').removeClass('nav_change1')
            $('#example-navbar-collapse').addClass('nav_change2')
        }

   });
});
