import React from 'react';
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
      <div style={{paddingTop: "3vh"}}>

        <div className="newsBlock">
          <div>
            <div className="newsHeader">AFRICAN FOR THE FIRST TIME</div> 
            <div className="newsText">Solo Exhibition</div>
            <div className="newsText">Joseph Gross Gallery, University of Arizona</div>
            <div className="newsText">January 30th - March 10th</div>
            <div className="newsText">Artist Talk: Febuary 13th from 4:00pm - 5:00pm</div>
            <div className="newsText">Reception: Febuary 13th from 5:00pm - 6:30pm</div>
          </div> 
        </div>
        

        <div style={{paddingTop: "5vh"}}> </div>
        <div className="vimeoVideo">
          <iframe src="https://player.vimeo.com/video/361556387" 
            style={{position: "absolute", top:0, left:0, width: '100%', height:'100%'}}
            frameborder="0" 
            allow="autoplay; fullscreen" 
            webkitallowfullscreen 
            mozallowfullscreen 
            allowFullScreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <br/>
        <div className="vimeoVideo">
          <iframe title="Video: ASU Senior Awarded for Life-like Portraits of African Refugees - 3TV/CBS 5 News"
                  src="https://player.vimeo.com/video/307643640" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                  frameborder="0" 
                  allow="autoplay; fullscreen" 
                  webkitallowfullscreen 
                  mozallowfullscreen 
                  allowFullScreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

      </div>;

    return <Base content={content} sectionHeader="NEWS"></Base>
  }
}