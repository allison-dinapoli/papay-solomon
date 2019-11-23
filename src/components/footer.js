import React from 'react';

var style = {
  textAlign: "center",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "30vh",
}

var phantom = {
display: 'flex',
padding: '10px',
height: '62px',
width: '100%',
}

function Footer() {
  var dt = new Date();
  var year = dt.getFullYear(); 
  
  return (
      <div style={{phantom}}>
        <div style={style}>
          <div style={{fontSize: "0.9em", paddingBottom: "1vh"}}><a className="quietLink" href="mailto://papaysolomon@gmail.com"> papaysolomon@gmail.com </a></div>
          <table width="100%" style={{textAlign: "center"}}>
            <tr>
              <td width="40%"></td>
              <td width="10%"><a className="quietLink" href="https://www.instagram.com/papaysolomon/" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}} src="/img/icons/instagram_dark.svg" alt="instagram"/></a></td>
              <td width="10%"><a className="quietLink" href="https://www.facebook.com/artbypapaysolomon/" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}}  src="/img/icons/facebook.svg" alt="facebook"/></a></td>
              <td width="40%"></td>
            </tr>
          </table>
          
          <div style={{fontSize: "0.9em", paddingTop: "10vh" }}>All content © Papay Solomon {year}.</div> 
          <div style={{fontSize: "0.9em" }}>Website by Alli DiNapoli.</div>
        </div>
      </div>
  )
}

export default Footer;