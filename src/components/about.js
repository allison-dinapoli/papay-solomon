import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';
import './base.css';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
    }
  }
 

  render() {
    var aboutHeaderText = "Lorem ipsum dolor amet flexitarian narwhal franzen scenester af. Hot chicken beard pour-over aesthetic sustainable quinoa freegan cray shaman iceland tattooed banh mi cliche tbh XOXO. IPhone pork belly letterpress farm-to-table banh mi meggings. Fashion axe slow-carb viral pabst live-edge, marfa raclette +1."

    var aboutText = `Lorem ipsum dolor amet flexitarian narwhal franzen scenester af. Hot chicken beard pour-over aesthetic sustainable quinoa freegan cray shaman iceland tattooed banh mi cliche tbh XOXO. IPhone pork belly letterpress farm-to-table banh mi meggings. Fashion axe slow-carb viral pabst live-edge, marfa raclette +1. Lyft street art green juice XOXO prism. Venmo pok pok vice, tousled drinking vinegar beard before they sold out mumblecore knausgaard pickled hexagon organic. Vegan crucifix church-key ethical, kale chips sustainable normcore edison bulb yr fingerstache ennui."
       
    var headerText = "Neutra lomo deep v hoodie tattooed, plaid photo booth migas viral chicharrones cornhole authentic williamsburg pour-over. +1 fam taxidermy, crucifix health goth bespoke whatever quinoa edison bulb blog coloring book locavore kogi mustache freegan. Hell of authentic put a bird on it umami XOXO tofu glossier you probably haven't heard of them skateboard sartorial, roof party vegan poke lumbersexual four dollar toast. Pok pok drinking vinegar migas typewriter. Crucifix small batch ramps biodiesel hella tumeric tofu organic farm-to-table freegan chicharrones authentic asymmetrical pok pok subway tile. Meditation lyft readymade selvage prism vinyl tote bag gentrify fanny pack master cleanse pour-over. Ugh bushwick yuccie heirloom prism.

    Four loko occupy 3 wolf moon umami af 90's pok pok you probably haven't heard of them jean shorts sriracha crucifix. Kogi small batch biodiesel leggings, tousled vaporware yuccie kinfolk. Whatever chartreuse poke shaman pug. Mustache hella disrupt retro pitchfork cardigan activated charcoal raw denim single-origin coffee. Chillwave gluten-free iceland pork belly marfa, skateboard meh brunch slow-carb iPhone meggings gochujang. Pinterest viral pug, pabst irony church-key cardigan palo santo kogi hot chicken blue bottle thundercats.
    
    8-bit pug keytar, edison bulb chia shaman coloring book vice banh mi polaroid kitsch air plant chillwave. Fingerstache flexitarian offal lyft, post-ironic 90's keffiyeh craft beer skateboard man bun put a bird on it af tumblr drinking vinegar iPhone. Stumptown cliche health goth VHS, 3 wolf moon meditation sustainable post-ironic aesthetic cloud bread. Viral hella XOXO cred.
    
    Shaman tofu semiotics fam marfa vexillologist bushwick put a bird on it DIY la croix austin squid etsy. Pabst selvage williamsburg ramps coloring book echo park etsy cornhole typewriter pug aesthetic. You probably haven't heard of them ennui gluten-free lomo man bun. Green juice tumeric echo park butcher, snackwave bushwick swag mixtape aesthetic pok pok.
    
    `
    return (
        <span>
            <div id="test"> <div id="backgroundimage">Hello</div> </div>
            <div id="aboutcontent">
                <h1>ABOUT</h1>
                <div id="aboutheader"> {aboutHeaderText} </div>
                <div id="abouttext"> {aboutText} </div>
            </div>
        </span>
        
    );
  }
}

export default withRouter(About);
