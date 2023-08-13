import React from 'react'
import ReactPlayer from "react-player"


const ProjectsModal = () => {
  const picClick = () => {
    showModal();
  }


  return (
    <>

    <div className='picture-card'>
    <ReactPlayer
      url={"https://vimeo.com/851785238/31e050b03c?share=copy"}
      width='375px'
      height='250px'
      playing='true'
      controls='true'
      />


    </div>
    </>
  )
}

export default ProjectsModal