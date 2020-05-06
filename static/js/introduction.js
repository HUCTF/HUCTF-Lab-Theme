introduction_dic={}
eval_str=''
sli_strr=''
$(document).ready(function () {
    init()
    slideDown('img')
    top_click('img')

    $(function(){
                $('#myCarousel').carousel({interval:4000});
            })
})
function top_click(strr){
       $("#"+strr+"_top").click(function () {
            $("*").finish();
            $('#'+strr+'_detail1').slideToggle(1000)
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

          $('#'+strr+'_detail1').slideToggle(1000)
        // $('#icon_1').css('-moz-transform','rotateX(90deg)');
          if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-right'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-right')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-down')
          }else if($('#'+strr+'_icon').attr('class')=='glyphicon glyphicon-chevron-down'){
              $('#'+strr+'_icon').removeClass('glyphicon-chevron-down')
              $('#'+strr+'_icon').addClass('glyphicon-chevron-right')
          }

     }
//读取md内容
function view(strr) {
    $("#"+strr+"_detail").load("/static/introduction_md/"+introduction_dic[strr],function () {

        var content = $("#"+strr+"_detail").text(); //获取md文本内容
         // alert(content)
        var converter = new showdown.Converter(); //初始化转换器

        var htmlcontent = converter.makeHtml(content); //将MarkDown转为html格式的内容

        $("#"+strr+"_detail1").html(htmlcontent);
        // alert(1)
        });
}
//初始化函数
function init() {
    $.ajax({
            type : "POST",
            contentType: "application/json;charset=UTF-8",
            url : '/get_Dict',
            data:JSON.stringify({'passwd':'123456',
                                    'need':'introduction_dic'}),
            success : function(result) {
                introduction_dic=result['introduction_dic']['md_dic']
                // alert('gdd')
                eval_strr()
                eval(eval_str)
                // alert(eval_str)
                 slideDown1()
                // alert(sli_strr)
                setTimeout(function(){eval(sli_strr)},300)
            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
function eval_strr() {

    for(type in introduction_dic){
        eval_str+='top_click("'+type+'");\n'+'view("'+type+'");\n'
    }
    // alert(eval_str)
    // alert(recover_str)

}
function slideDown1() {
    flag = 0
    for (each in introduction_dic) {
        sli_strr += '$("#' + each + '_icon").removeClass("glyphicon-chevron-right")\n' +
            ' $("#' + each + '_icon").addClass("glyphicon-chevron-down")\n' +
            'setTimeout(function () {\n' +
            '        $("#' + each + '_detail1").slideToggle(1000)\n' +
            '    },' + 1000 * flag + ')\n'
        flag++
    }
}
