import React from 'react'
import pdf from '../pdf/resume.txt'
import hero from './data/hero.json'


const Home = () => {
  return (    
    <>
    <div className="container home" id="home">
      <div className="left">
        <h1 >Hey, I'm <span>Shivang Jauhari</span></h1>
        <h2>A Developer</h2>
        <a href={pdf} download="resume.txt" className="btn btn-outline-warning">Download Resume</a>
      </div>
      <div className="right">
        <div className="image">
          <img src={`/images/${hero.imgSrc}`} alt="DesignerHero" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home