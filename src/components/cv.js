import React, { Component } from 'react';
import Base from './base'; 
import './cv.css';
import { navbarTypes } from '../enums/navbarTypes';


class PDFViewer extends Component {
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onDocumentClick = () => {
    window.open("/CV.pdf", "_blank");
  }
 
  render() {
    
    const doc = <div style={{textAlign: "center", marginTop: "6vh"}}>
          <div>
            <object data="CV-1.svg" type="image/svg+xml" class="documentwindow">
            </object>
            <object data="CV-2.svg" type="image/svg+xml" class="documentwindow">
            </object>       
          </div>
        </div>; 
 
    return (
      <Base content={doc} sectionHeader="CV" includeCvDownload={true} navbarType={navbarTypes.DEFAULT}></Base>
      
    );
  }
}
export default PDFViewer; 