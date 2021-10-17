
document.addEventListener('DOMContentLoaded', () => {
    updatePosts();
})

function updatePosts(){

    // fetch(url, option).then()
    fetch("http://localhost:3000/api/all").then((res) => {
        return res.json();
    }).then((json) => {
        // console.log(json);

        let postElements = "";
        let posts = JSON.parse(json);

        // console.log(posts);

        posts.forEach((post) => {
            let postElement = 
            `<div class="post">
                <div id="${post.id}">
                    <div class="card-header">
                        <h5 class="card-title">${post.title}</h5>                        
                    </div>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>
            </div>`
            postElements += postElement;
        });

        document.querySelector("#posts").innerHTML = postElements;

    });
}

function newPost(){
    
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;

    let post = {title:title, description:description};
    // OU  let post = {title, description};

    const options = {
        method:"POST",
        headers : new Headers({'Content-Type' : 'application/json'}),
        body : JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then((res) => {
        console.log(res);
        updatePosts();

        let title = document.querySelector("#title").value = "";
        let description = document.querySelector("#description").value = "";
    })

}









