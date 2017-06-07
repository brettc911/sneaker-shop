$(document).ready(function(){

$('#buy-now').click(function() {
  console.log('hey');
  $('.modalWrapper').addClass('visible animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function(){
      $(this).removeClass('animated bounceIn')
    });


});

$('#ok').click(function() {
  $('.modalWrapper').addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function (){
      $(this).removeClass('animated bounceOut visible')
    });
  });
});


// var trigger = document.getElementById('buy-now');
//
// var modal = document.getElementById('modalWrapper');
//
// var ok = document.getElementById('ok');
//
//   trigger.addEventListener('click', function addItem(){
//     console.log("hey you");
//
//     modal.style.visibility='visible';
// });
//
//   ok.addEventListener('click', function addItem(){
//   console.log("hey you");
//
//   modal.style.visibility='hidden';
// });
