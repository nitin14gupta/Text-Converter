import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <div className="navbar-brand mx-10" to="/">{props.title}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
        </div>
    </div>
</nav>




)
}
  

    

 

// Navbar.PropTypes = {
//     title: PropTypes.string.isRequired,                   //value only must be string
//   titleText: PropTypes.string.isRequired                  //user should always define the value
//   }  


Navbar.defaultProps = {
  title: "Company Name",                      //this will render when no user defined components is specified
  titleText: "Doing"
}



