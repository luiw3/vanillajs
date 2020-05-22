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

async function init() {
    await createPost({title: 'post 3', body: 'this is post 3'});

    getPosts();
}

init();