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

              const style = {
              }

              return(
                <div>
                <br></br>
                  <Zoom Bottom>
                    <div className={item.class}>
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${item.imgurl})`}}> </div>
      <ul className="details">
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          <ul>
          {/* {item.map((item, index) => (
          <ul>
            {item.tags.map((company, index) =><li>{company}</li>)}
          </ul>
        ))} */}
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>{item.name}</h1>
      <h2>Opening a door to the future</h2>
      <p> {item.description} </p>
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