import React from 'react'
import styles from '../App.css?inline'
import ProjectsModal from '../Components/ProjectsModal'


const Projects = props => {
  return (
    <div className='project-page'>
      <h3 className='samples'>My Work</h3>

      <ProjectsModal />
      <p className='app-description'><a className='word-highlight'>Buddy</a> is an activity-meetup app that allows people to find someone to do an activity with, so they don't have to go alone.
      <br/>
      <em>Features include:</em>
        <ul className='app-list'>
          <li>Credentialed Log-in/on</li>
          <li>Create, edit, and delete activities</li>
          <li>Join activities created by other users</li>
          <li>Filter activities by type, and time until activity</li>

        </ul>
      </p>
    </div>




  )
}

export default Projects