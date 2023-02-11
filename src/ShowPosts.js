import React, { useEffect, useState } from 'react'

const ShowPosts = () => {

    const[serverResponse, setServerResponse] = useState(null);

    const fetchAllPosts = async () => {  //fetchallposts is a function that'll be going to make an api call for all
        
      const resp = await fetch('https://gid-backend-10x.onrender.com/all')
      setServerResponse(await resp.json())
    }

    useEffect(()=> {
        fetchAllPosts()
    }, [])

    if(serverResponse === null) {
      return <h1>Loading...</h1>
    }

  return (
    <div>
        {
          serverResponse?.result?.map?.((post,index) => {
            //rendering images in browser and mapping it(iterating it) since its a result array
            // return <img src={post?.image_file} key={index}/>
            //but images cannot be rendered like this, we have to add api as well, lets give api of backend which will give image name as well as image address
            return <img width={400} height={500} style={{border:'2px solid black'}} src= {`https://gid-backend-10x.onrender.com/images/${post.image_file}`} key={index}/>
            //then go to index.js, we'll use get api for there for images
          })
        } 
    </div>
  )
}

export default ShowPosts

