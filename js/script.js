$(document).ready(function(){

  $('.course').on('click', function(){
    $(this).find('.detail').slideToggle();
  });

  $('.course .delete').on('click', function(event){
    alert("about to delete");
  event.stopPropagation();

  });
});
