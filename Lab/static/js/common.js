var current_id=''
var basic_foot=1
$(document).ready(function(){
    // $("#find_btn").click()
    // if($('*').is(":animated")){    //判断元素是否正处于动画状态
    // //如果当前没有进行动画，则添加新动画
    //     $('#foot').show()
    //     }
    // if(!$('*').is(":animated")){    //判断元素是否正处于动画状态
    // //如果当前没有进行动画，则添加新动画
    //     $('#foot').change_foot()
    //     }
    setTimeout(function () {
      change_foot()
    },2001)
    setTimeout(function(){$('#foot').show()},2000)

    // $('#foot').finish()
     if($(document).width()<768){
            $('#example-navbar-collapse').addClass('nav_change1')
            $('#example-navbar-collapse').removeClass('nav_change2')
        }
        else{
            $('#example-navbar-collapse').removeClass('nav_change1')
            $('#example-navbar-collapse').addClass('nav_change2')
        }

    $(window).resize(function () {
        // alert($(document).height())
        // alert($("#foot").offset().top)
        // change_foot()
        d_h=$(document).height()
        if(basic_foot<d_h){
        $('#foot').css('margin-top',d_h-basic_foot+'px')
    }
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

function  change_foot() {
    d_h=$(document).height()
    f_h=$("#foot").offset().top
    basic_foot=f_h
    // alert(d_h)
    // alert(f_h)
    // alert(d_h-f_h+'px')
    if(f_h<d_h){
        $('#foot').css('margin-top',d_h-f_h+'px')
    }
}