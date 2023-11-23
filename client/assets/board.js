function createPostElement (data) {
    const post = document.createElement("div");
    post.className = "post";

    const header = document.createElement("h2");
    header.textContent = `Category: ${data.category}`;
    post.appendChild(header);

    const content = document.createElement("p");
    content.textContent = `${data.content}`;
    post.appendChild(content);
    
    const info = document.createElement("p")
    info.textContent = `ID: ${data.entry_id} || Created: ${data.date_created}`
    post.appendChild(info)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete post"
    deleteBtn.className = "button"
    deleteBtn.style = "background-color: #ADD8E6"
    
    deleteBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        // console.log('DELETING POST')
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let id = data.entry_id
        const response = await fetch('http://localhost:3000/entries/' + id, options)
        if(!response.ok){
            console.log('Could not Delete!!!!')
        } else {
            window.location.reload()
        }
    })
    post.appendChild(deleteBtn)
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

    const response = await fetch('http://localhost:3000/entries', options)
    if(!response.ok){
        console.log('Could not Create!!!!')
    } else {
        window.location.reload()
    }
})

loadPosts()