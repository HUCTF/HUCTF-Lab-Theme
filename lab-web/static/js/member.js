var current_member={'teacher':'','student_2017':''}
var left_base= 20
var current_base=0

$(document).ready(function(){
    //下拉事件
   teacher_top_click('teacher')
     teacher_top_click('student_2017')
    //图片点击事件
    member_img_click('teacher')
    member_img_click('student_2017')
    //窗口变化事件
    $(window).resize(function () {
        //当浏览器大小变化时
        recover_member_img('teacher')
         recover_member_img('student_2017')

   });
});

function recover_member_img(strr) {
        for(var i=1;i<=3;i++){
            $('#'+strr+'_'+i).css('visibility','visible');
         }
        if(current_member[strr]!=''){
            $("#"+current_member[strr]).animate({
            right:0,
        });

            // alert("#"+current_member+'_detail')
            $("#"+current_member[strr]+'_detail').slideToggle(0)
              current_member[strr]=''
        }
}
function member_img_click(strr){

       $("."+strr+"_member_img_div").click(function () {

       current_base=$(this).offset().left

       if(current_member[strr]==''){
           for(var i=1;i<=6;i++){
            if(strr+'_'+i!=$(this).attr('id'))
            $('#'+strr+'_'+i).css('visibility','hidden');
         }
       }  else{
           for(var i=1;i<=6;i++){
            if(strr+'_'+i!=$(this).attr('id'))
            $('#'+strr+'_'+i).css('visibility','visible');
         }
       }

       // alert($(this).offset().left-left_base)
       $(this).animate({
      right:$(this).offset().left-left_base,

       });
        // alert("#"+current_member+'_detail')
       $("#"+$(this).attr('id')+'_detail').slideToggle(500)
        if($(this).attr('id')==current_member[strr]){
           current_member[strr]=''
       }else{
          current_member[strr]=$(this).attr('id')
       }


   })
 }

function teacher_top_click(strr){
       $("#"+strr+"_top").click(function () {
      $('#'+strr+'_detail').slideToggle(1000)
    // $('#icon_1').css('-moz-transform','rotateX(90deg)');
      if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-right'){
          $('#'+strr+'_icon').removeClass('glyphicon-chevron-right')
          $('#'+strr+'_icon').addClass('glyphicon-chevron-down')
      }else if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-down'){
          $('#icon_1').removeClass('glyphicon-chevron-down')
          $('#icon_1').addClass('glyphicon-chevron-right')
      }

  })

    }