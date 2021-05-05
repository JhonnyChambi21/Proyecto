$(document).ready(function(){
    $(".ZoomImagen").hover(function(){
        $(this).animate({"opacity":"1","height":"500px","width":"370px"});
    },function(){
        $(this).animate({"opacity":"1","height":"300px","width":"370px"});
    });
});
