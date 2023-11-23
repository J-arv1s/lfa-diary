function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = data["category"];
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = data["content"];
    post.appendChild(content);

    return post;
}


async function loadPosts(){
    const response = await fetch("http://localhost:3000/entries");
    
    if(response.status === 200){
        const posts = await response.json();
        const container = document.getElementById("posts");

        posts.forEach(p => {
            const elem = createPostElement(p);
            container.appendChild(elem);
        })
    }
}

const postForm = document.getElementById('post-form')
postForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            category: data.get('category'),
            content: data.get('content')
        })
    }

    const res = await fetch('http://localhost:3000/entries', options)
    if (res.status(201)){
        window.location.reload()
    }
})

loadPosts()