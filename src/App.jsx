import './App.css'
// import './App-mobile.css'
import Header from './Components/Header'
import Projects from './Pages/Projects'
// import PageRight from './components/PageRight.jsx'




const App = () => {

  return(
    <>
    <div className='page-layout'>

      <div className='header-area'>
        <Header />

      </div>

      <div className='body'>
        <section>
          <div className='aboutMeSection'>
            {/* <div className='titleAboutMe'> */}

            {/* </div> */}
          <div className='about-me'>
            <h3 className='aboutMeTitle'>About Me</h3>
            <p>Since I was a child I've been playing around with computers, and seeing what I could break. I took a detour through the <a className='word_highlight'>military</a>, and then got licensed in the <a className='word_highlight'>Landscape Architecture</a> field, where I honed my leadership and critical thinking skills. I'm now knee deep in JavaScript, React, Ruby, and other technologies that affect how we use the world around us.</p>

            <p>My main focus at the moment is absorbing everything I can about software development, and using that knowledge to progress and improve technology while <a className='word_highlight'>positively affecting people's lives</a>.</p>

            <p>When I'm not living the code life, I spend time outdoors hiking,
              camping, and sometimes learning to salsa. I also spend a lot of time with my 13 year old dog, Kaylee.</p>
          </div>
        </div>


            <section className="experienceDescription1">
              <h3 className='aboutMeTitle'>Experience</h3>
              <p className="experienceDate">2023 - Present</p>
                <div className="jobRole">
                  <p className="title"><strong>Full-Stack Developer Student</strong></p>
                  <p className="company"><strong>LEARN Academy</strong></p>
                </div>
              <ul className="role-description">

                <li className='listItem'>Completed feature requests, fixed bugs, and deployed updated code for company facing applications</li>

                <li className='listItem'>Deployed updates to Rails applications </li>

                </ul>

              <div className="titleGroup">
                <p className="experienceDate">2023 - Present</p>
                <div className="jobRole">
                  <p className="title"><strong>Full-Stack Developer Student</strong></p>
                  <p className="company"><strong>LEARN Academy</strong></p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Performed 200+ hours of direct coding experience learning new languages and frameworks.</li>

                <li className='listItem'>Enhanced communication and collaboration skills through pair programming to create full-stack applications.</li>

                <li className='listItem'>Acquired working knowledge of Ruby, Javascript, HTML, CSS, and React by building full-stack applications.</li>

                <li className='listItem'>Designed and created code for small applications through Test-driven development in Jest and Rspec.</li>

                </ul>

              <div className="titleGroup">
                <p className="experienceDate">2016 - 2022</p>
                <div className="jobRole">
                  <p className="title"><strong>Landscape Architect</strong></p>
                  <p className="company"><strong>Kimley-Horn</strong></p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Responsible for the financial stability and success for over 20 colleagues, including senior partners, overseeing tens of millions of dollars of income.</li>

                <li className='listItem'>Mentored colleagues on financial practices to improve performance both internally, and with clients.</li>

                <li className='listItem'>Deliver well-crafted and detailed construction documents to public and private clients including Target, Amazon, JPMorgan-Chase, and Lifetime</li>
                </ul>

              <div className="titleGroup">
                <p className="experienceDate">2002 - 2010</p>
                <div className="jobRole">
                  <p className="title"><strong>Marine Staff Sergeant</strong></p>
                  <p className="company"><strong>US Marine Corps</strong></p>
                </div>
               </div>
               <ul className="role-description">

                <li className='listItem'>Served as a Marine Security Guard Detachment Commander. Senior military official in multiple countries charged with protecting classified information and American Embassies. </li>

                <li className='listItem'>Amphibious Assault Vehicle Crew Chief responsible for the safety, logistics, and welfare of over 30 people in combat environments.</li>
              </ul>
            </section>


            <section className="experienceDescription1">
            <h3 className='aboutMeTitle'>Education</h3>
              <div className="titleGroup">
                <p className="experienceDate">2011 - 2015</p>
                <div className="jobRole">
                  <p className="title"><strong>Landscape Architecture</strong></p>
                  <p className="company"><strong>Penn State University</strong></p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Focused non-program classes on outside perspectives and critical thinking, including learning basic Mandarin, South-east Asian history, and the science and economics of poverty.</li>

                <li className='listItem'>Multi-month summer study abroad program in Tanzania working with locals to create data records of, and improvements to, living, geographic, and environmental conditions</li>
              </ul>


              <div className="titleGroup">
                <p className="experienceDate">2015 - 2015</p>
                <div className="jobRole">
                  <p className="title"><strong>Urban Design</strong></p>
                  <p className="company"><strong>University of Melbourne, AU</strong></p>
                </div>
               </div>
              <ul className="role-description">

                <li className='listItem'>Semester abroad focusing on urban infrastructure and design, as it relates to human needs and interactions.</li>

                <li className='listItem'>Used Geographic information systems (GIS) to map accessibility of public transit, and design provide actionable recommendations to local government officials to improve service for users.</li>

              </ul>
            </section>
      </section>


      </div>

      </div>
    </>
  )
}
export default App
