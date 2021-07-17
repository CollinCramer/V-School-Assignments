import React from "react"
import BlogPost from "./BlogPost"

function BlogList(props) {
    const posts = props.posts.map(post => <BlogPost {...post} />);

    return (
        <div>
            {posts}

        </div>
    )
}


export default BlogList