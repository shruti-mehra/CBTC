const postsContainer = document.getElementById("postsContainer");

/* Preloaded blogs */
const blogs = [
    {
        title: "The Power of Consistency",
        content: "Success is built through small, consistent efforts over time. Even simple daily actions can lead to remarkable growth.Consistency is the quiet force that transforms small efforts into remarkable achievements. It is not about making dramatic changes overnight, but about showing up every day and doing the necessary work, even when motivation is low. When actions are repeated regularly, they build habits, and habits shape our character, skills, and ultimately our success.One of the greatest powers of consistency is momentum. Small, steady steps taken daily accumulate over time, leading to significant progress. For example, studying for just one hour each day can lead to deep understanding, while practicing a skill regularly improves confidence and mastery. Consistency also builds discipline, teaching us to stay committed to our goals despite challenges, distractions, or setbacks."
    },
    {
        title: "Why Learning Web Development Matters",
        content: "Web development empowers individuals to create digital experiences, solve real-world problems, and build innovative solutions.Learning web development matters because the web has become an essential part of modern life, shaping how we communicate, work, learn, and do business. From personal blogs and portfolios to large-scale e-commerce platforms and social networks, websites and web applications power almost every digital experience. By learning web development, individuals gain the ability to create, design, and manage these platforms, turning ideas into functional digital products."
    },
    {
        title: "Creativity in the Digital Age",
        content: "Technology has transformed creativity, allowing ideas to be shared globally and turning imagination into interactive experiences.Digital tools like graphic design software, video editing applications, animation platforms, and coding environments enable creators to bring their visions to life with precision and impact. Artists, designers, writers, musicians, and developers can experiment with new formats, blend different art forms, and reach audiences instantly. The internet also fosters collaboration, enabling people to work together across borders, exchange ideas, and build innovative projects.Moreover, the digital age encourages continuous learning and adaptation. As technology evolves, creators are motivated to explore new tools, trends, and techniques, keeping their work fresh and relevant. However, it also challenges individuals to maintain originality in a world of rapid content sharing."
    }
];

/* Load existing blogs */
function loadBlogs() {
    blogs.forEach(blog => createPost(blog.title, blog.content));
}

/* Create post UI */
function createPost(title, content) {
    const postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>

        <div class="comment-section">
            <input type="text" placeholder="Write a comment...">
            <button onclick="addComment(this)">Comment</button>
        </div>
        <div class="comments"></div>
    `;

    postsContainer.prepend(postDiv);
}

/* Add new blog */
function addPost() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    createPost(title, content);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

/* Add comment */
function addComment(button) {
    const input = button.previousElementSibling;
    if (input.value.trim() === "") return;

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    commentDiv.textContent = "💬 " + input.value;

    button.parentElement.nextElementSibling.appendChild(commentDiv);
    input.value = "";
}

/* Initialize */
loadBlogs();
