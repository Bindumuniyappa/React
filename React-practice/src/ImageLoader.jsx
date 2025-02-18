import React, { useState } from 'react'

const ImageLoader = () => {

    const [image,setImage]=useState(0);
    const url=["https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
    "https://cdn.pixabay.com/photo/2024/07/02/06/19/rain-8866774_960_720.png",
    "https://cdn.pixabay.com/photo/2024/05/31/12/47/ai-generated-8800538_1280.png",
    "https://cdn.pixabay.com/photo/2024/03/16/20/35/ai-generated-8637800_1280.jpg"]
  return (
    <div>
        <img src={url[image]} style={{width:"500px",height:"400px"}}/>
        <br/>
        <p>{image<4?"":"Loading..."}</p>
        <button onClick={()=>setImage(image-1)}>Previous</button>
        <button onClick={()=>setImage(image+1)}>Next</button>
    </div>
  )
}

export default ImageLoader