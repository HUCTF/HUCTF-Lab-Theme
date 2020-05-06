var blog_dic={}
var eval_str=''
var current_id=''
var tag_dic={}
$(document).ready(function(){
    init()
    init2()
    tagg_click()
    input_click()
    top_click('tag')

     $("#find_btn").click(function() {
        $("#aa").attr("href", current_id);
        document.getElementById("aa").click();
        $("#aa").trigger("click");
    })

    jQuery.expr[':'].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    $(function() {
        filterList($("#groupid"));
        $('#js-groupId').bind('focus', function() {
            $('#groupid').slideDown();
        }).bind('blur', function() {
            $('#groupid').slideUp();
        })
        $('#groupid').on('click', 'li', function() {
            current_id=$(this).find('a').attr('href')
            // $('.one_div').show()
            $('#js-groupId').val($(this).text())
            $('#groupId').val($(this).data('id'))
            $('#groupid').slideUp()
        });
    })

    // get_tag_dic()

    // alert(blog_dic['blog1'])


});
function input_click() {
    // $('#js-groupId').removeAttr('onclick').unbind('click').click(function(){
    //     alert(1)
    //     $('.one_div').show()
    // })
    $("#js-groupId").click(function(){
        $('.one_div').show()
    });

}
function tagg_click() {
    $('.tagg').click(function () {
        $('*').finish()
        // alert('good')
        $('.one_div').hide()
        text=$(this).children('.tagg1').text()
        // alert(text)
        data=$(this).children('.tagg1').attr('data')
        // alert(data)
        dic=tag_dic[data][text]
        // alert(dic)
        str='#blog'
        for(i in dic){
            strr=str+dic[i]
            // alert(strr)
            $(strr).show()
        }

    })
}
//获得tag_dic
function init2() {
    $.ajax({
            type : "POST",
            contentType: "application/json;charset=UTF-8",
            url : '/get_Dict',
            data:JSON.stringify({'passwd':'123456',
                                    'need':'tag_dic'}),
            success : function(result) {
                   tag_dic=result['tag_dic']

            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
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
                eval_strr()
                eval(eval_str)

                // tagg_click()

            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("未知错误")

            }
        });

}
function view_md(strr) {
    $("#"+strr+"_detail").load("/static/blog_md/"+blog_dic[strr]['file_name'],function () {
        // alert('g')
        var content = $("#"+strr+"_detail").text(); //获取md文本内容
        // alert(content)
        title=''
        other=''
        content.trim().split('\n').forEach(function(v, i) {
           if(i==0){
               title=v;
           }else{
               other+=v+'\n'
           }
          // window['str' + (i+1)] = v
        })

        // alert(basic_inf)
        //alert("''")
        //  var reg = new RegExp( "__" , "g" )
        // // alert(1)
        //  basic_inf=basic_inf.replace(reg,'"');
        //  // alert(basic_inf)
        // basic_inf = JSON.parse(basic_inf); //基本信息字符串转json
        // // alert('good')
        var converter = new showdown.Converter(); //初始化转换器
        var htmlcontent = converter.makeHtml(other); //将MarkDown转为html格式的内容
        $("#"+strr+"_detail1").html(htmlcontent);
        var htmlcontent = converter.makeHtml(title);
        $("#"+strr+"_title").html(htmlcontent);

        // $("#"+strr+"time").text(basic_inf['时间'])
        // $("#"+strr+"type").text(basic_inf['分类'])
        // $("#"+strr+"author").text(basic_inf['作者'])
        // alert('good')
        });
}
//包装为字符串，通过eval()执行
function eval_strr() {

    for(type in blog_dic){
        eval_str+='top_click("'+type+'");\n'+'view_md("'+type+'");\n'+'slideDown("'+type+'");\n'
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
    setTimeout(function () {
        $('#'+strr+'_top_div').show(1000)
    },200)

        // $('#icon_1').css('-moz-transform','rotateX(90deg)');


}
function filterList(list) {

    $('#js-groupId').bind('input propertychange', function() {
        var filter = $(this).val();
        if (filter) {
            $matches = $(list).find('a:Contains(' + filter + ')').parent();
            $('li', list).not($matches).slideUp();
            $matches.slideDown();
        } else {
            $(list).find("li").slideDown();
        }
    });
}