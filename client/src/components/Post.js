import React from 'react';
import {formatISO9075} from 'date-fns';

const Post = ({title, summary, cover, content, createdAt}) => {
  return (
    <div className="post">
    <div className='image'>
    <img
      src="https://techcrunch.com/wp-content/uploads/2019/09/plex-live-tv.jpg?w=850&h=492&crop=1"
      alt=""
      />
      </div>
    <div className='texts'>
    <h2>{title}</h2>
    <p className='info'>
      <a className='author' href='#1'> Edmer Bedia</a>
      <time>{formatISO9075(new Date (createdAt))}</time>
    </p>
    <p className='summary'>
      {summary}
    </p>
    </div>
  </div>
  )
}

export default Post