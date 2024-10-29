import React from "react"
import ReactPlayer from "react-player"

import { wrapper, fullvideo } from "./backgroundVideo.module.css"

export const BackgroundVideo = ({ video, className, full }) => {
  return (
    <div className={`${wrapper} ${className} ${full && fullvideo}`}>
      <ReactPlayer url={video} playing={true} muted loop playsinline />
    </div>
  )
}
