import React from 'react';

var style = {
  textAlign: "center",
  margin: "10px",
  left: "0",
  bottom: "0",
  height: "30vh",
}

var phantom = {
display: 'flex',
margin: '10px',
height: '62px',
width: '100%',
}

function Footer() {
  var dt = new Date();
  var year = dt.getFullYear(); 
  
  return (
      <div style={{phantom}}>
        <div style={style}>
          <table width="100%" style={{textAlign: "center"}}>
            <tr>
              <td width="45%"></td>
              <td width="5%"><a className="quietLink" href="https://www.instagram.com/papaysolomon/" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}} src="/img/icons/instagram_dark.svg" alt="instagram"/></a></td>
              <td width="5%"><a className="quietLink" href="mailto://papaysolomon@gmail.com" target="_blank" rel="noopener noreferrer">  <img style={{width: "2vw", minWidth: "25px"}}  src="/img/icons/email.svg" alt="email"/></a></td>
              <td width="45%"></td>
            </tr>
          </table>
          
          <div style={{fontSize: "0.85em", marginTop: "10vh" }}>© Papay Solomon.</div> 
          <div style={{fontSize: "0.85em" }}>Website by Allison DiNapoli.</div>
        </div>
      </div>
  )
}

export default Footer;