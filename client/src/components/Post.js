import React from 'react'

const Post = ({title, summary, cover, content}) => {
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
      <time>2022-01-01 3:36</time>
    </p>
    <p className='summary'>
      {summary}
    </p>
    </div>
  </div>
  )
}

export default Post