const PATH = "./data.json"
const fs = require('fs');
class Post {
    
    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    get() {
        // ** Get Posts ** //
        return this.readData();
    }

    getIndividualBlog(postId) {
        // ** Get individual blog post ** //
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) {
        // ** Add new Post ** //
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
        }

    storeData(rawdata) {
        //** store new data */
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data)
    }

    
    
}


module.exports = Post;