var blog_dic={}
var eval_str=''
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
                                    'need':'blog_dic'}),
            success : function(result) {
                   blog_dic=result['blog_dic']
                // alert(1)
                // view('blog1')
                 eval_strr()
                // alert(eval_str)
                eval(eval_str)
                // slideDown()
                // eval(sli_strr)
            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
function view(strr) {
    $("#"+strr+"_detail").load("/static/md/"+blog_dic[strr],function () {
        // alert('g')
        var content = $("#"+strr+"_detail").text(); //获取md文本内容
        // alert(content)
        title=''
        other=''
        content.trim().split('\n').forEach(function(v, i) {
            if(i!=0&&i!=1&&i!=2){
                other+=v+'\n'
            }else if(i==2){
                title=v
            }else if(i==0){
                basic_inf=v
            }
          // window['str' + (i+1)] = v
        })

        // alert(basic_inf)
        //alert("''")
         var reg = new RegExp( "__" , "g" )
        // alert(1)
         basic_inf=basic_inf.replace(reg,'"');
         // alert(basic_inf)
        basic_inf = JSON.parse(basic_inf); //基本信息字符串转json
        // alert('good')
        var converter = new showdown.Converter(); //初始化转换器
        var htmlcontent = converter.makeHtml(other); //将MarkDown转为html格式的内容
        $("#"+strr+"_detail1").html(htmlcontent);
        var htmlcontent = converter.makeHtml(title);
        $("#"+strr+"_title").html(htmlcontent);

        $("#"+strr+"time").text(basic_inf['时间'])
        $("#"+strr+"type").text(basic_inf['分类'])
        $("#"+strr+"author").text(basic_inf['作者'])
        // alert('good')
        });
}
//包装为字符串，通过eval()执行
function eval_strr() {

    for(type in blog_dic){
        eval_str+='top_click("'+type+'");\n'+'view("'+type+'");\n'+'slideDown("'+type+'");\n'
    }
    // alert(eval_str)
    // alert(recover_str)

}
function top_click(strr){
       $("#"+strr+"_top").click(function () {
            $("*").finish();
            $('#'+strr+'_detail1').slideToggle(1000)
            $('#'+strr+'_detail1_aut').slideToggle(1000)
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
function slideDown(strr) {
          $('#'+strr+'_top_div').show(1000)
        // $('#icon_1').css('-moz-transform','rotateX(90deg)');


}