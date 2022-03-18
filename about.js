console.log("hello world");

const nameInput = document.querySelector(`#name`)
const message = document.querySelector(`#message`)
const google = document.querySelector(`#google`)
const stumbleupon = document.querySelector(`#stumbleupon`)
const friend = document.querySelector(`#friend`)

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("submitted!");
	nameInput.value=``
	message.value=``
	google.checked=false;
	stumbleupon.checked=false;
	friend.checked=false;
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const imgCompliment = () => {
	alert("This duck is a badass. And this little badass thinks you're awesome. So you must be.")
}

const img = document.querySelector(`#img`)
img.addEventListener(`mouseover`, imgCompliment)