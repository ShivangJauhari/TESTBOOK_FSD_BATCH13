import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="container nav-bar">
        <div className="left">Shivang Jauhari</div>
        <div className="right">
            <a href="#home" className="nav-items">Home</a>
            <a href="#experience" className="nav-items">Experience</a>
            <a href="#skills" className="nav-items">Skills</a>
            <a href="#projects" className="nav-items">Project</a>
            <a href="#contact" className="nav-items">Contact</a>
        </div>
    </div>
    </>
  )
}

export default Navbar