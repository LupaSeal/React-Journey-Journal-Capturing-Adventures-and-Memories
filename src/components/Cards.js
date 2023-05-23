import React from "react"

const Cards = (props) => {
    return (
        <div className="cards">

        <img className="card" src={props.image}/>

    
        <div className="location">
           
             <svg className="marker" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a13.101 13.101 0 0 0-13.101 13.101c0 10.253 10.002 22.591 12.623 25.622a.809.809 0 0 0 1.139.08l.08-.08C27.327 40.18 37.1 27.854 37.1 17.6A13.101 13.101 0 0 0 24 4.5Zm0 16.656a4.443 4.443 0 1 1 4.443-4.443v.011A4.443 4.443 0 0 1 24 21.156Z"/></svg>
            
            <h1 className="country">{props.country}</h1>
        <a className="link" href={props.link}>View on Google Maps</a>
        
  </div>
        <div className="mountain">
        <h1 className="mountain-header">{props.location}</h1>
        <h3 className="start-date">{props.startDate} - {props.endDate}</h3>
        <p className="description">{props.description}</p>
     
        </div>
        </div>
    )
}

export default Cards