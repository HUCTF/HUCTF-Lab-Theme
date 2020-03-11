$(document).ready(function(){
   // alert($(document.body).width())
    //index

    $('#welcome').show(2000)
    $('#bottom_div').show(2000)
    setTimeout(function(){
        $('#welcome').hide(3000)
    }, 2500);
    setTimeout(function(){
        $('#center_text').show(2000)
    }, 2500);

    //member

    $('#page1').load('test.html');

});


// function do_once(){
//   if($(document.body).width()<=500){
//             $("span").addClass("change_font_size");
//              $("button").addClass("change_font_size");
//              $("#option4").addClass("change_font_size")
//       $("b").addClass("change_font_size")
//        }else{
//           $("span").removeClass("change_font_size");
//           $("button").removeClass("change_font_size");
//            $("#option4").removeClass("change_font_size")
//       $("b").removeClass("change_font_size")
//     }
//
//
// }