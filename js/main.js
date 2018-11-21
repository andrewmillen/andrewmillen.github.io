// =================================
// Modal Trigger
// =================================

// Trigger modal
$(".modal-trigger").click(function(e){
  e.preventDefault();
  dataModal = $(this).attr("data-modal");
  $("#" + dataModal).fadeIn();
  $("#" + dataModal).find('.modal-box').removeClass('fadeOut').addClass('fadeIn');
  // $("#" + dataModal).find('video').get(0).play();
});

// Click outside of modal to hide modal
$(".modal-sandbox").click(function(){
  $(".modal").fadeOut();
  $('body').find('.modal-box').removeClass('fadeIn').addClass('fadeOut');
  // $('video').get(0).pause();
});

// Use escape key to hide modal
$(document).keydown(function(e) {
  if (e.keyCode == 27) {
      $(".modal").fadeOut();
      $('body').find('.modal-box').removeClass('fadeIn').addClass('fadeOut');
      // $('video').get(0).pause();
  }
});
