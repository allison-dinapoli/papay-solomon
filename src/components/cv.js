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
    const doc = <div style={{textAlign: "center"}}>
      <h2 className="heading" style={{marginTop: "60px"}}>CV</h2>
        <div id="documentwindow">
          
            
            <Document
              file="CV.pdf"
              onLoadSuccess={this.onDocumentLoadSuccess}
              externalLinkTarget="_blank"
              renderTextLayer="true"
            >
              <Page
                externalLinkTarget="_blank" 
                renderTextLayer={true}
                pageNumber={1} />
              <Page
                externalLinkTarget="_blank" 
                renderTextLayer={true}
                pageNumber={2} />
            </Document>
          
        </div>
      </div>; 
 
    return (
      <Base content={doc}></Base>
      
    );
  }
}
export default PDFViewer; 