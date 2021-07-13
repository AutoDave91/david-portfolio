import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" >
          {
            resumeData.portfolio && resumeData.portfolio.map((item, index)=>{
              return(
                <div className="columns portfolio-item" id='item' >
                  <div className="item-wrap">
                    <img src={`${item.imgurl}`} className="item-img" id={item.id} alt={item.name}/>
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                        <ul>
                          {item.points && item.points.map((point)=>{
                            return(
                              <li>{point}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <section className='links'>
                  </section>
                    {/* <p><a href={item.website} target="_blank" rel='noopener noreferrer'>Visit the site!</a></p> */}
                    <p><a href={item.repo} target="_blank" rel='noopener noreferrer'>Check the Github!</a></p>
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