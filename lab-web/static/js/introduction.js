$(document).ready(function () {
    top_click()
    slideDown('img')
    slideDown('int')

    $(function(){
                $('#myCarousel').carousel({interval:4000});
            })
})
function top_click() {
 $(".top").click(function () {
            $("*").finish();
            strr=$(this).attr('id')
     // alert(strr)
            $('#'+strr+'_detail').slideToggle(1000)

          if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-right'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-right')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-down')
          }else if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-down'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-down')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-right')
          }

     })
}
function slideDown(strr) {

          $('#'+strr+'_detail').slideToggle(1000)
        // $('#icon_1').css('-moz-transform','rotateX(90deg)');
          if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-right'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-right')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-down')
          }else if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-down'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-down')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-right')
          }

     }