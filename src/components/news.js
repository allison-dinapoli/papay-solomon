import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Base from './base'; 

export default class News extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  render(){
    const content = 
      <div style={{paddingTop: "5vh"}}>
        <h2 className="heading">News</h2>  

        <ul>
          <li>news item here</li>
        </ul>

        <br/>
        <div style={{padding:'40% 0 0 0', position: "relative", maxWidth: "50%", maxHeight: "50%"}}>
          <iframe title="Video: ASU Senior Awarded for Life-like Portraits of African Refugees - 3TV/CBS 5 News"
                  src="https://player.vimeo.com/video/307643640" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                  frameborder="0" 
                  webkitallowfullscreen 
                  mozallowfullscreen 
                  allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <div style={{paddingTop: "5vh"}}> </div>
        <div style={{padding:'40% 0 0 0', position: "relative", maxHeight: "50%", maxWidth: "50%"}}>
          <iframe src="https://player.vimeo.com/video/361556387" 
            style={{position: "absolute", top:0, left:0, width: '100%', height:'100%'}}
            frameborder="0" 
            allow="autoplay; fullscreen" 
            allowfullscreen>
          </iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

      </div>;

    return <Base content={content}></Base>
  }
}