import React from 'react'
import '../blog.css'
function Blogheader(props) {
    window.scrollTo(0,0)
    return (
        <div>
               <div className="blogheader">
        <h2 id="blogtitle">{props.name}</h2>
        <div className="headingtags">
            <div className="tag1">
                <span><i className="fa fa-user-circle-o" aria-hidden="true"></i> Dhanania & Co. </span>
                <span><i className="fa fa-folder-o" aria-hidden="true"></i>{props.tag}</span>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Blogheader
