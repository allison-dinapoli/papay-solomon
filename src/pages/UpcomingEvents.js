import React from 'react';
import Base from '../components/base'; 
import { navbarTypes } from '../enums/navbarTypes';
import '../css/upcomingevents.css';

export default class UpcomingEvents extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
    }
  }

  render(){
    const content = 
      <div className="parentDiv">

        <div className="newsRow">
          <div>
            <div className="newsHeader">As We Are</div>
            <div className="newsText">The Something Machine</div>
            <div className="newsText">May 15th, 2021 - June 26th, 2021</div>
            <div className="newsText"><a href="https://www.hallsteinwater.com/partners/tsm">More info here</a></div>
          </div> 
        </div>
      </div>

    return <Base content={content} sectionHeader="Upcoming Exhibitions" navbarType={navbarTypes.DEFAULT}></Base>
  }
}