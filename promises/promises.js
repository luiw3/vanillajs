const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(_ => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            posts.push(post)

        const error = false;

        if(!error) {
            resolve();
        }
        else{
            reject('error')
        }
        }, 2000);
    })

}

// createPost({title: 'post 3', body: 'this is post 3'})
//  .then(getPosts)
//  .catch(err => console.log(err));


// Promise.all

const promise1= Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());

Promise.all([promise1,promise2,promise3, promise4]).then(v=>{
    console.log(v)
});