document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postsSection = document.getElementById('posts');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const post = document.createElement('div');
        post.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            document.getElementById('title').value = postTitle.textContent;
            document.getElementById('content').value = postContent.textContent;
            postsSection.removeChild(post);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            postsSection.removeChild(post);
        });

        post.appendChild(postTitle);
        post.appendChild(postContent);
        post.appendChild(editButton);
        post.appendChild(deleteButton);

        postsSection.appendChild(post);

        postForm.reset();
    });
});
