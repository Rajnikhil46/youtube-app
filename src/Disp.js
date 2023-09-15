import React, { useEffect } from 'react'
import YouTube from 'react-youtube'
import "./Table.css"

const Disp = ({isVisible, setVisible ,data, setData , currentVideo}) => {


console.log(currentVideo.url);


  
  return (
    <div class="parent">
    <div  ><YouTube  videoId={currentVideo.url}    ></YouTube></div>
    <h4>video {currentVideo.title} is playing</h4>
    
    
      
    </div>
  )
}

export default Disp
