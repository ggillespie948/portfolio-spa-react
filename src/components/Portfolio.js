import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import './portfolio.scss';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    var ReactRotatingText = require('react-rotating-text');
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div>
                <br></br>
                  <Zoom Bottom>
                  {/* <div className="cardolo">
                    <div className="card-header">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </div>
                    <div className="card-body">
                          <img className="profile-pic" src={`${item.imgurl}`}/>
                    </div>
                  </div> */}
                    <div className="blog-card">
    <div className="meta">
      <div className="photo" ></div>
      <ul className="details">
        <li className="author"><a href="#">John Doe</a></li>
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          <ul>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>Learning to Code</h1>
      <h2>Opening a door to the future</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
                  </Zoom>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}