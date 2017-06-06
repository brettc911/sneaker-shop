

var trigger = document.getElementById('buy-now');

var modal = document.getElementById('modalWrapper');

var ok = document.getElementById('ok');

  trigger.addEventListener('click', function addItem(){
    console.log("hey you");

    modal.style.visibility='visible';
});

  ok.addEventListener('click', function addItem(){
  console.log("hey you");

  modal.style.visibility='hidden';
});
