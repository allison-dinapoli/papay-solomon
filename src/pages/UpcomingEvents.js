import React from 'react';
import Base from '../components/base'; 
import { navbarTypes } from '../enums/navbarTypes';
import '../css/news.css';

export default class UpcomingEvents extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  render(){
    const content = 
      <div className="topDiv">

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

        <div style={{marginTop: "30vh"}}></div>
      </div>

    return <Base content={content} sectionHeader="Upcoming Events" navbarType={navbarTypes.DEFAULT}></Base>
  }
}