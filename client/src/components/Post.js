import React from 'react'

const Post = () => {
  return (
    <div className="post">
    <div className='image'>
    <img
      src="https://techcrunch.com/wp-content/uploads/2019/09/plex-live-tv.jpg?w=850&h=492&crop=1"
      alt=""
      />
      </div>
    <div className='texts'>
    <h2>Plex raises new funds as it nears profitability</h2>
    <p className='info'>
      <a className='author' href='#1'> Edmer Bedia</a>
      <time>2022-01-01 3:36</time>
    </p>
    <p className='summary'>
      The company, which began as a media organization startup, has morphed
      over the years to become a one-stop shop for all your media, including
      ad-supported streaming, which now accounts for much of its revenue
      growth.
    </p>
    </div>
  </div>
  )
}

export default Post