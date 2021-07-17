import React from "react"

function BlogPost({author, date, subTitle, title}){

    return(
        <div>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <div>Posted by {author} on {date}</div>
        </div>
    )
}



export default BlogPost