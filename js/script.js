(function display(){
fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(product => {
	for(let i = 0; i < product.length; i++){

	let title = product[i].title;
	let description = product[i].description;
	let image = product[i].image;
	let price = product[i].price;
	let rating = product[i].rating.rate;
	let count = product[i].rating.count;

	

const row = document.querySelector(".row");
const div = document.createElement("div");
div.classList.add("col-12");
div.classList.add("col-sm-6");
div.classList.add("col-md-4");
div.classList.add("col-lg-3");
div.classList.add("p-2");
row.append(div);
div.innerHTML = `
<div class="card box">
  <img src="${image}" class="card-img-top img">
  <div class="card-body">
    <h5 class="card-title title">${title}</h5>
    <p class="card-text description">${description}</p>
    <p class="card-text">Rating: ${rating} - Count: ${count}</p>
    <p class="card-text">$${price}</p>
    <a href="#" class="btn btn-warning text-white">Add to cart</a>
  </div>
</div>
`
}});
})();


