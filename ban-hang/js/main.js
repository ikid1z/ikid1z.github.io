var contentInput = document.querySelector('.content-input');
var contentInput = document.getElementsByClassName('content-input');
var h1 = document.querySelector('h1');
var form = document.querySelector('.content-form');
var button = document.querySelector('.content-button');
var cancel = document.querySelector('.cancel');
var modal = document.querySelector('.modal');
var create = document.querySelector('.create');
console.log(h1);
var user = contentInput[0].value;
var pass = contentInput[1].value;
document.addEventListener("DOMContentLoaded",function() {
    button.onclick = () => {
        if( user == '' && pass == '') {
            event.preventDefault();
            h1.classList.add('translate-h1');
            form.style.opacity = 0;
            setTimeout(function(){location.href="banhang.html";},3000);
        }else alert('Wrong Password');
    };
    cancel.onclick = () => {
        modal.classList.remove("show");
    }
});
create.addEventListener('click',function() {
    modal.classList.add("show");
})

superplaceholder({
    el:document.getElementById('user'),
	sentences: [ 'fb.com/hiepga6719'],
	options: {
    }
});
superplaceholder({
	el:document.getElementById('pass'),
	sentences: ['fb.com/hiepga6719'],
	options: {}
});