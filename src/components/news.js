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
      <div>
        <h2 className="heading">News</h2>  

        <ul>
          <li>news item here</li>
        </ul>

        <br/>

        <Container>
          <Row>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <div style={{padding:'56.25% 0 0 0', position: 'relative'}}>
                <iframe src="https://player.vimeo.com/video/307643640" 
                        style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                        frameborder="0" 
                        webkitallowfullscreen 
                        mozallowfullscreen 
                        allowfullscreen>
                </iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
            </Col>
          </Row>
        </Container>
      </div>;

    return <Base content={content}></Base>
  }
}