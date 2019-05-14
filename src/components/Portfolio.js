import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
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
                  <div className="card">
                    <div className="card-header">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    </div>
                    <div className="card-body">
                          <img className="profile-pic" src={`${item.imgurl}`}/>
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