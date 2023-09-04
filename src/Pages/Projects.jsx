import React from 'react'
import styles from '../App.css?inline'
import ProjectsModal from '../Components/ProjectsModal'


const Projects = props => {
  return (
    <div className='project-page'>
      <h3 className='samples'>My Work</h3>

      <ProjectsModal />
      <p className='title'>Buddy </p>
      <p>
      is an activity-meetup app that allows people to find someone to do an activity with, so they don't have to go alone.
      <br/>
      <em>Features include:</em>
        <ul className='app-list'>
          <li>Credentialed Log-in/on</li>
          <li>Create, edit, and delete activities</li>
          <li>Join activities created by other users</li>
          <li>Filter activities by type, and time until activity</li>
        </ul>
      </p>


      <image src='src/assets/screenshot.png' alt='signup element with purple glow' />
      <p className='title'>Sign Up Element</p>
      <p>
      Response to a prompt from a UI challenge allowing a user to sign up for something.
      </p>
    </div>




  )
}

export default Projects