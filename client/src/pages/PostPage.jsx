import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`localhost:400/post/${id}`)
        .then(response=> {
            response.json().then(postInfo=> {
                setPostInfo(postInfo);
            })
        })
    },[]);

    if(!postInfo) return '';

  return (
    <div className='post-page'>
        <div className="image">
            <img src={`localhost://localhost:4000${postInfo.cover}`} alt="" />
        </div>
        <h1>{postInfo.title}</h1>
        <div dangerouslySetInnerHTML={{html:postInfo.content}}></div>
    </div>
  )
}

export default PostPage