import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Base from './base'; 
import { pdfjs } from 'react-pdf';
import './cv.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class PDFViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  onDocumentClick = () => {
    window.open("/CV.pdf", "_blank");
  }
 
  render() {
    const { pageNumber, numPages } = this.state;
    const doc = <div style={{textAlign: "center", marginTop: "6vh"}}>
        <div id="documentwindow">
          <object data="CV-1.svg" type="image/svg+xml">
          </object>         
        </div>
      </div>; 
 
    return (
      <Base content={doc} sectionHeader="CV"></Base>
      
    );
  }
}
export default PDFViewer; 