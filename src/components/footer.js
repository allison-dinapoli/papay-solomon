import React from 'react';

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "62px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '10px',
height: '62px',
width: '100%',
}

function Footer({  }) {
  return (
      <div>
          <div style={phantom} />
          <div style={style}>
            <table width="100%" style={{textAlign: "center"}}>
              <tr>
                <td width="30%"></td>
                <td width="20%"><a className="quietLink" href="https://www.instagram.com/papaysolomon/" target="_blank">Instagram</a></td>
                <td width="20%"><a className="quietLink" href="https://www.facebook.com/artbypapaysolomon/" target="_blank">Facebook</a></td>
                <td width="30%"></td>
              </tr>
            </table>
              <a>All rights reserved Papay Solomon. Website by Alli DiNapoli.</a>
          </div>
      </div>
  )
}

export default Footer;