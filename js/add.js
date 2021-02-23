//Fetch
fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })
    .then(post => console.log(post))
    .catch(err => console.log(err));

//Promise
function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post))
            .catch(err => reject(err))
    });
}

getPost(1).then(post => console.log(post));

//async await
async function getPost2(id) {
    const response = await fetch(
        `http://jsonplaceholder.typicode.com/posts/${id}`,
    ).then(res => res.json())
    return response;
}

getPost2(1)
    .then(data => console.log(data))
    .catch(err => console.log(err))

//ES5
function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
}

const apple = new Product('Apple', 300, 15);
const samsung = new Product('Samsumg', 250, 10);

console.log(apple.getPriceWithDiscount());
console.log(samsung.getPriceWithDiscount())