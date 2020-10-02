const express = require("express");
const app = express();
const Post = require("./api/models/posts");
const postsData = new Post();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next();
})

app.use('/uploads', express.static('uploads'));

app.get("/api/posts", (req, res) => {
    res.status(200).send(postsData.get());
});

app.get("/api/posts/:post_id", (req, res) => {
    const postId = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if (foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send("Not Found")
    }
})

app.post("/api/posts", (req, res) => {
    const newPost = {
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post_image": req.body["post-image"],
        "added_date": `${Date.now()}`
    }
    postsData.add(newPost);
    res.status(201).send(newPost);
})
app.listen(3000, () => console.log("Listening on localhost:3000"));