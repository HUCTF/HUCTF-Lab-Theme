var current_member={}
var member_num={}
var left_base= 25
var current_base=0
var member_dic={}
var recover_str=''
var eval_str=''
var lock=0
sli_strr=''
$(document).ready(function(){
    init()
    $(window).resize(function () {
        eval(recover_str)
   });
});

//初始化函数
function init() {
    $.ajax({
            type : "POST",
            contentType: "application/json;charset=UTF-8",
            url : '/get_Dict',
            data:JSON.stringify({'passwd':'123456',
                                    'need':'member_dic'}),
            success : function(result) {
                   member_dic=result['member_dic']
                // alert('gdd')
                for(each in member_dic){
                        current_member[each]=''
                        var count=0;
                        for(var key in member_dic[each]){
                         // console.log(key+'='+dic[key]);
                          count++;
                         }
                         member_num[each]=count
                         // alert(count)
                }
                eval_strr()
                slideDown1()
                // alert(sli_strr)
                eval(eval_str+sli_strr)
                slideDown_teacher()


            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
//包装为字符串，通过eval()执行
function eval_strr() {

    for(type in member_dic){
       // eval_str+='slideDown("'+type+'");\n'+'member_top_click("'+type+'");\n'+'member_img_click("'+type+'");\n'
        eval_str+='member_top_click("'+type+'");\n'+'member_img_click("'+type+'");\n'

        recover_str+='recover_member_img("'+type+'");\n'
    }
    // alert(eval_str)
    // alert(recover_str)

}
//改变窗口大小时，重置界面
function recover_member_img(strr) {
    // $("*").finish();
     $("#"+strr+'_detail').height(100)
    // img_id=$(this).attr('id')


        for(var i=1;i<=member_num[strr];i++){
            $('#'+strr+'_'+i).show();
         }

        if(current_member[strr]!=''){
            $("#"+current_member[strr]+'_detail').slideUp(0)

            $("#"+current_member[strr]).animate({
            right:0,
        },300);
        $('#'+current_member[strr]+'_img').animate({
            height:70,
               width:60,
       },0);
        current_member[strr]=''
            // alert("#"+current_member+'_detail')

        }
}
//点击图片时的动画
function member_img_click(strr){
           // alert( member_num[strr])
       $("."+strr+"_member_img_div").click(function () {
           //强制结束先前的动画，否则会出错
       $("*").finish();
           // alert($('#'+strr+'_detail').css('display'))
       current_base=$(this).offset().left
           //如果没有当前选中，则展开
       if(current_member[strr]==''){
           current_member[strr]=$(this).attr('id')
               for(var i=1;i<=member_num[strr];i++){
                if(strr+'_'+i!=$(this).attr('id'))
                 $('#'+strr+'_'+i).hide()
             }
                $(this).animate({
                right:$(this).offset().left-left_base,
           },500);

               current_member[strr]=$(this).attr('id')
               $('#'+current_member[strr]+'_img').animate({
                height:84,
                   width:72,
           },200);
       }  else{
               for(var i=1;i<=member_num[strr];i++){
                if(strr+'_'+i!=$(this).attr('id')){
                     $('#'+strr+'_'+i).show()
                }

             }
                $(this).animate({
                right:0,

           },500);
                img_id=$(this).attr('id')
               $('#'+img_id+'_img').animate({
                height:70,
                   width:60,
           },200);
               current_member[strr]=''
       }


        // alert("#"+current_member+'_detail')
       $("#"+$(this).attr('id')+'_detail').slideToggle(500)
           // alert($("#"+strr+'_detail').height())
      if($("#"+$(this).attr('id')+'_detail').height()>90 && $("#"+strr+'_detail').height()==100){
           $("#"+strr+'_detail').height(30+$("#"+$(this).attr('id')+'_detail').height())
      }else if($("#"+strr+'_detail').height()!=100){
          $("#"+strr+'_detail').height(100)
      }

       // if($(this).attr('id')==current_member[strr]){
       //     current_member[strr]=''
       // }else{
       //    current_member[strr]=$(this).attr('id')
       // }


   })
 }
 //点击头部时的下滑动画
function member_top_click(strr){

       $("#"+strr+"_top").click(function () {
            $("*").finish();
           $('#'+strr+'_detail').slideToggle(1000)
           $("#"+current_member[strr]+'_detail').slideToggle(1000);

            // setTimeout(test, 200);
          // $('#'+strr+'_detail').slideToggle(1000)
        // $('#icon_1').css('-moz-transform','rotateX(90deg)');
          if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-right'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-right')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-down')
          }else if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-down'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-down')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-right')
          }

     })

    }
 //刚进入界面的下滑动画（同步）
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
function slideDown_teacher() {

          $('#teacher_detail').slideToggle(1000)
        // $('#icon_1').css('-moz-transform','rotateX(90deg)');
    $('#teacher_icon').removeClass('glyphicon-chevron-right')
    $('#teacher_icon').addClass('glyphicon-chevron-down')


}
//按属性下滑
function slideDown1() {
    flag = 0
    for (each in member_dic) {
        if(each !='teacher'){
            sli_strr += '$("#' + each + '_icon").removeClass("glyphicon-chevron-right")\n' +
            ' $("#' + each + '_icon").addClass("glyphicon-chevron-down")\n' +
            'setTimeout(function () {\n' +
            '        $("#' + each + '_detail").slideToggle(1000)\n' +
            '    },' + 1000 * flag + ')\n'
        flag++
        }
    }
}