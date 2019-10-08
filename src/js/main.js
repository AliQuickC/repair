var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

function modClose(){
	modal.classList.remove('modal_active');
}

button.addEventListener('click', function(){
	modal.classList.add('modal_active');
	setTimeout(modClose, 5000);
});

close.addEventListener('click', modClose);
