var newstudent_dic={}
var eval_str=''
sli_strr=''
$(document).ready(function(){
    // $("#"+"test.1").load("/static/md/"+'yx-1.md',function () {
    //     alert('doo')
    // })

    init()

});
//初始化函数
function init() {
    $.ajax({
            type : "POST",
            contentType: "application/json;charset=UTF-8",
            url : '/get_Dict',
            data:JSON.stringify({'passwd':'123456',
                                    'need':'newstudent_dic'}),
            success : function(result) {
                newstudent_dic=result['newstudent_dic']
                // alert(1)
                // view('blog1')

                 eval_strr()
                eval(eval_str)
                slideDown1()
                setTimeout(function(){eval(sli_strr)},300)

            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
//init function
function init_suc(strr) {

}
//读取md内容
function view(strr) {
    $("#"+strr+"_detail").load("/static/newstudent_md/"+newstudent_dic[strr],function () {
         //alert('g')
        var content = $("#"+strr+"_detail").text(); //获取md文本内容
    // alert(content)
        var converter = new showdown.Converter(); //初始化转换器
        var htmlcontent = converter.makeHtml(content); //将MarkDown转为html格式的内容
        $("#"+strr+"_detail1").html(htmlcontent);

        });
}
//包装为字符串，通过eval()执行
function eval_strr() {

    for(type in newstudent_dic){
        eval_str+='top_click("'+type+'");\n'+'view("'+type+'");\n'
    }
    // alert(eval_str)
    // alert(recover_str)

}
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
function slideDown1() {
    flag = 0
    for (each in newstudent_dic) {
        sli_strr += '$("#' + each + '_icon").removeClass("glyphicon-chevron-right")\n' +
            ' $("#' + each + '_icon").addClass("glyphicon-chevron-down")\n' +
            'setTimeout(function () {\n' +
            '        $("#' + each + '_detail1").slideToggle(1000)\n' +
            '    },' + 1000 * flag + ')\n'
        flag++
    }
}
