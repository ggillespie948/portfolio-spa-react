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
                    <div className={item.class}>
                    <div className="meta">
                      <div className="photo" style={{ backgroundImage: `url(${item.imgurl})`}}> </div>
                        <ul className="details">
                          <li className="date">{item.date}</li>
                          <li className="tags">
                            <ul>
                            {item.tags.map((c, i) => (
                              <li className="badge" key={i}><a>{c.name}</a></li>   
                            ))}
                            </ul>
                          </li>
                        </ul>
                    </div>
                      <div className="description">
                        <h1>{item.name}</h1>
                        <p> {item.description} </p>
                        <p className="read-more">
                        {item.links.map((c, i) => (
                          <a href={c.href} key={i} className={c.className} >{c.text} 
                          </a> 
                          ))}
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