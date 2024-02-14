import { useEffect } from 'react'
import Post from '../components/Post'

const HomePage = () => {
  useEffect(() => {
   fetch('http://localhost:4000/post').then(response => {
    response.json().then(posts => {
      console.log(posts)
    })
   })
  }, [])
  return (
    <>

    <Post />
    </>
  )
}

export default HomePage