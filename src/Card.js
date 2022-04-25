import React from 'react';
import './css/styles.css';

export default function Card({name,dob,technology,strength,special_powers,loyalty}) {
    return (
        <div className="Apps">
        <div className="App flex text-align-center width-full margin-center">
            <div className="container">
              <div className="image margin-top-md height-half order-md text-align-center border-radius-md">
    
                <div className="mainimage width-full height-full border-radius-md">
                  IMAGE
                </div>
    
    
                <div className="namewrap">
                  <div className="allname">
                    <div className="name center-text border-around-md font-family-body-cc text-decoration-italic">
                    {name}
                    </div>
                  </div>
                </div>
              </div>
    
    
              <div className="mainlowerhalf width-full flex">
                <div className="leftlowerhalf margin-negative-right-md">
                
                    <div className="wrapper">
                        <div className="filter">
                        <div className="leftlowerhalf__leftbox text-decoration-italic font-family-body-k font-weight-bold text-align-left font-size-md">
                            Time Alive ...
                        </div> 
                        </div>
                  </div> 
    
                  
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__rightbox text-decoration-italic font-family-body-k text-align-center">
                          {dob}
                      </div>
                    </div>
                  </div>
    
                 
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__leftbox text-decoration-italic font-family-body-k font-weight-bold text-align-left font-size-md">
                        Technology ...
                      </div> 
                    </div>
                  </div> 
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__rightbox text-decoration-italic font-family-body-k text-align-center">
                        {technology}
                      </div>
                    </div>
                  </div>
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__leftbox text-decoration-italic font-family-body-k font-weight-bold text-align-left font-size-md">
                        Strength ...
                      </div> 
                    </div>
                  </div> 
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__rightbox text-decoration-italic font-family-body-k text-align-center">
                      {strength}
                      </div>
                    </div>
                  </div>
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__leftbox text-decoration-italic font-family-body-k font-weight-bold text-align-left font-size-md">
                        Special Powers...
                      </div> 
                    </div>
                  </div> 
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__rightbox text-decoration-italic font-family-body-k text-align-center">
                      {special_powers}
                      </div>
                    </div>
                  </div>
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__leftbox text-decoration-italic font-family-body-k font-weight-bold text-align-left font-size-md">
                       Loyalty ...
                      </div> 
                    </div>
                  </div> 
    
                  <div className="wrapper">
                    <div className="filter">
                      <div className="leftlowerhalf__rightbox text-decoration-italic font-family-body-k text-align-center">
                          {loyalty}
                      </div>
                    </div>
                  </div>
    
                </div>
                <div className="rightlowerhalf font-size-md text-align-left font-family-body-k padding-top-sm">
                  <p>Manages all aspects of we design and software development, whilst keeping abreast of the latest texhnologies and techniques.</p>
                </div>
    
              </div>
            </div>
          </div>
        </div>
    )
}
