const PATH = "./data.json"
const fs = require('fs');
class Post {
    
    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return rawdata
    }

    get() {
        // ** Get Posts ** //
        return this.readData();
    }

    getIndividualBlog() {
        // ** Get individual blog post ** //

    }

    add() {
        // ** Add new Post ** //

    }

    
}


module.exports = Post;