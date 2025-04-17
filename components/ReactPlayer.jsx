import React from 'react'
import "video.js/dist/video-js.css";
import videojs from "video.js";


const ReactPlayer = () => {
  return (
    <div>
        <video
      className="video-js vjs-default-skin rounded"
      controls
      width="1100"
      height="700"
      data-setup='{}'
    >
      <source src="/vecteezy_entrepreneurs-small-business-sme-independent-men-work-at_21955573.mp4" type="video/mp4"  />
    </video>
    </div>
  )
}

export default ReactPlayer

