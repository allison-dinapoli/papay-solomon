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
            <div className="newsHeader">Nightmares Americana</div> 
            <div className="newsText">Solo Exhibition</div>
            <div className="newsText">Steven Zevitas Gallery, Boston, MA</div>
            <div className="newsText">October 2nd, 2020 - November 28th, 2020</div>
          </div> 
        </div>
        
        <div className="newsRow">
          <div>
            <div className="newsHeader">Viewpoints: How We Understand Art</div>
            <div className="newsText">Center Space Gallery, Scottsdale Center for the Performing Arts</div>
            <div className="newsText">October 29th, 2020 - February 21st, 2021</div>
          </div> 
        </div>
      </div>

    return <Base content={content} sectionHeader="Upcoming Events" navbarType={navbarTypes.DEFAULT}></Base>
  }
}