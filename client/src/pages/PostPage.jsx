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
    },[])
  return (
    <div>PostPage</div>
  )
}

export default PostPage