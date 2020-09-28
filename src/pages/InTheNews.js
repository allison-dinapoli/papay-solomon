import React from 'react';
import Base from '../components/base'; 
import { navbarTypes } from '../enums/navbarTypes';
import '../css/news.css';

export default class InTheNews extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  render(){
    const content = 
      <div className="topDiv">
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

      </div>

    return <Base content={content} sectionHeader="In the News" navbarType={navbarTypes.DEFAULT}></Base>
  }
}