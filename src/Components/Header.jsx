import React from "react";
import Projects from "../Pages/Projects";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from '../App.css?inline'

const Header = () => {
  // const envelope = <FontAwesomeIcon icon={faEnvelope} />
  // const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
  // const git = <FontAwesomeIcon icon={faGithub} />


  return(
    <>
    <div className='header'>
      <div  id='myHeader'>
        <h1>Chris Frey<span class="blinky" >|</span></h1>
        <h3>Full Stack Developer</h3>
        <h5>Working to Build a Better Web.</h5>

        {/* <ul className="contact">
          <li><a className="button" href="mailto:chris.frey@hey.com">{envelope}</a></li>
          <li><a className="button" href="https://www.linkedin.com/in/chris-l-frey/" target='_blank'>{linkedIn}</a></li>
          <li><a className="button" href="https://github.com/Chris-Frey" target='_blank'>{git}</a></li>
          <li><a className="button" href="">Projects</a></li>
        </ul> */}
      </div>

      <Projects />
    </div>

    </>
  )

}

export default Header