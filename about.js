console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const imgCompliment = () => {
	alert("This duck is a badass. And this little badass thinks you're awesome. So you must be.")
}

const img = document.querySelector(`#img`)
img.addEventListener(`mouseover`, imgCompliment)