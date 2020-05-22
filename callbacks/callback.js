const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(_=>{
        let output = '';
        posts.forEach(post=>{
         output += `<li>${post.title}</li>`;
        });
      document.body.innerHTML = output;
    },1000)
}

function createPost(post, callback){
    setTimeout(_=>{
        posts.push(post)
        callback();
    },2000);
}


createPost({title: 'post 3', body: 'This is post 3'}, getPosts)