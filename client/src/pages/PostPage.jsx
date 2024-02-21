import { formatISO9075 } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:400/post/${id}`)
        .then(response=> {
            response.json().then(postInfo=> {
                setPostInfo(postInfo);
            })
        })
    },[]);

    if(!postInfo) return '';

  return (
    <div className='post-page'>
        <h1>{postInfo.title}</h1>
        <div className="image">
            <img src={`http://localhost:4000${postInfo.cover}`} alt="" />
        </div>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
        <div>by @{postInfo.author.username}</div>
        <div dangerouslySetInnerHTML={{html:postInfo.content}}></div>
    </div>
  )
}

export default PostPage