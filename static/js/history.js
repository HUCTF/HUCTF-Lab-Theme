history_dic={}
eval_str=''
sli_strr=''
$(document).ready(function(){
    init()

});
function top_click(strr){
       $("#"+strr+"_top").click(function () {
            $("*").finish();
            $('#'+strr+'_detail1').slideToggle(1000)
           $('#'+strr+'_detail2').slideToggle(1000)
           $('#'+strr+'_detail3').slideToggle(1000)
           // $('#'+strr+'_detail').slideToggle(1000)
           //$('#'+strr+'_detail').slideToggle(1000)
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
//初始化函数
function init() {
    $.ajax({
            type : "POST",
            contentType: "application/json;charset=UTF-8",
            url : '/get_Dict',
            data:JSON.stringify({'passwd':'123456',
                                    'need':'history_dic'}),
            success : function(result) {
                   history_dic=result['history_dic']
                // alert('gdd')
                eval_strr()
                eval(eval_str)
                slideDown()
                // alert(sli_strr)
                eval(sli_strr)
            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
//包装为字符串，通过eval()执行
function eval_strr() {

    for(type in history_dic){
        eval_str+='top_click("'+type+'");\n'
    }
    // alert(eval_str)
    // alert(recover_str)

}
 //刚进入界面的下滑动画(按序列)
function slideDown() {
    flag=0
    for(each in history_dic){
        sli_strr+='$("#'+each+'_icon").removeClass("glyphicon-chevron-right")\n' +
            ' $("#'+each+'_icon").addClass("glyphicon-chevron-down")\n'+
            'setTimeout(function () {\n' +
            '        $("#'+each+'_detail1").slideToggle(1000)\n' +
            '        $("#'+each+'_detail2").slideToggle(1000)\n' +
            '        $("#'+each+'_detail3").slideToggle(1000)\n' +
            '    },'+1000*flag+')\n'
            flag++
    }

    // setTimeout($("#"+strr+"_detail").slideToggle(1000),1000)
    //       $('#'+strr+'_detail').slideToggle(1000)
    //     $("#"+strr+"_icon").removeClass("glyphicon-chevron-right")
    //     $("#"+strr+"_icon").addClass("glyphicon-chevron-down")


}
