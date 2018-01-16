//视频播放
$(function(){
    $("body").on("click",".playBtn",function(){
        $(".playBgBox").hide();
    })
    $.fn.nnp3d = function(options){
    	alert("haha");
    	var thisOb = this ;
    	var obj = $.extend({}, $.fn.simple3D.defaults, options );
    	$(function(){
    		alert(thisOb.length)
    	})
    }
})