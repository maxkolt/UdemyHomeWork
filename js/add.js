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