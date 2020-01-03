import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Base from './base'; 

import './news.css';

export default class News extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  render(){
    const content = 
      <div style={{paddingTop: "1vh"}}>

        <div style={{marginTop: "7vh", marginBottom: "10px"}}>
          <div className="newsBlock">
            <div className="newsHeader">AFRICAN FOR THE FIRST TIME</div> 
            <div className="newsText">Solo Exhibition</div>
            <div className="newsText">Joseph Gross Gallery, University of Arizona</div>
            <div className="newsText">January 30th - March 6th</div>
            <div className="newsText">Opening: January 30th from 5:00pm - 6:30pm</div>
          </div> 
        </div>

        <br/>
        <div className="vimeoVideo">
          <iframe title="Video: ASU Senior Awarded for Life-like Portraits of African Refugees - 3TV/CBS 5 News"
                  src="https://player.vimeo.com/video/307643640" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                  frameborder="0" 
                  allow="autoplay; fullscreen" 
                  webkitallowfullscreen 
                  mozallowfullscreen 
                  allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div style={{paddingTop: "5vh"}}> </div>
        <div className="vimeoVideo">
          <iframe src="https://player.vimeo.com/video/361556387" 
            style={{position: "absolute", top:0, left:0, width: '100%', height:'100%'}}
            frameborder="0" 
            allow="autoplay; fullscreen" 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

      </div>;

    return <Base content={content} sectionHeader="NEWS"></Base>
  }
}