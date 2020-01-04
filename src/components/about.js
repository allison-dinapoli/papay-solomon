import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import NavHeader from './navheader';
import './about.css';
import './base.css';

class About extends React.Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      isSticky: false
    }
  }

  componentDidMount() {
    this.ref = React.createRef()
    const cachedRef = this.ref.current,
    observer = new IntersectionObserver(
      ([e]) => this.setState({isSticky: e.intersectionRatio < 1}),
      {threshold: [1]}
    )

    observer.observe(cachedRef)
    return function(){
      observer.unobserve(cachedRef)
    }
  }

  render() {
    const aboutHeaderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta nibh venenatis cras sed."

    const aboutText = `Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Integer eget aliquet nibh praesent tristique magna sit amet. Pellentesque massa placerat duis ultricies. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Amet commodo nulla facilisi nullam vehicula ipsum. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Egestas tellus rutrum tellus pellentesque. Faucibus scelerisque eleifend donec pretium vulputate. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Ut porttitor leo a diam sollicitudin tempor. At urna condimentum mattis pellentesque id nibh tortor id. Nulla malesuada pellentesque elit eget gravida cum sociis. Ullamcorper a lacus vestibulum sed arcu non odio. Laoreet non curabitur gravida arcu. Nisi est sit amet facilisis magna. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Congue quisque egestas diam in arcu cursus. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque.

    Fermentum leo vel orci porta non. Velit sed ullamcorper morbi tincidunt ornare. Netus et malesuada fames ac turpis egestas integer eget. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Leo vel orci porta non pulvinar neque laoreet. Elit eget gravida cum sociis. Tortor posuere ac ut consequat semper. Aliquam ultrices sagittis orci a scelerisque purus semper. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Elit at imperdiet dui accumsan sit amet nulla facilisi. Etiam tempor orci eu lobortis. Amet est placerat in egestas erat imperdiet sed euismod. Ultrices in iaculis nunc sed augue lacus viverra vitae congue.
    
    Nunc consequat interdum varius sit amet mattis vulputate. Tellus pellentesque eu tincidunt tortor aliquam nulla. Viverra maecenas accumsan lacus vel. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Nulla aliquet porttitor lacus luctus. Aliquet lectus proin nibh nisl condimentum. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Scelerisque felis imperdiet proin fermentum leo. Porta nibh venenatis cras sed. Luctus accumsan tortor posuere ac.
    
    Purus sit amet luctus venenatis. Ornare arcu dui vivamus arcu felis. Risus sed vulputate odio ut enim blandit. Condimentum vitae sapien pellentesque habitant. Ullamcorper velit sed ullamcorper morbi tincidunt. Ipsum consequat nisl vel pretium lectus quam id. Duis at consectetur lorem donec. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Consectetur adipiscing elit pellentesque habitant morbi tristique. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Ut morbi tincidunt augue interdum velit euismod. Porttitor leo a diam sollicitudin tempor id eu nisl. Pulvinar sapien et ligula ullamcorper malesuada proin. Mauris pharetra et ultrices neque. Ac auctor augue mauris augue neque gravida in. Blandit massa enim nec dui nunc mattis enim ut tellus.
    
    Id diam maecenas ultricies mi eget mauris pharetra. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Orci ac auctor augue mauris. Luctus accumsan tortor posuere ac ut consequat semper viverra. Felis donec et odio pellentesque diam volutpat commodo. Vitae tempus quam pellentesque nec nam. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Ipsum dolor sit amet consectetur adipiscing elit. Eu tincidunt tortor aliquam nulla facilisi. Sapien pellentesque habitant morbi tristique senectus et netus. Euismod lacinia at quis risus. Proin libero nunc consequat interdum varius sit amet mattis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.    
    
    `;
    
    var navbar = <NavHeader doNotIncludeNavbarBrand={true} useLightNavbar={true} />;

    if (this.state.isSticky) {
      navbar = <NavHeader doNotIncludeNavbarBrand={true} useLightNavbar={false} />;
    }


    return (
        <div>
            {navbar}
            <div> <div id="backgroundimage"></div> </div>
            <div id="aboutcontent">
                <div className="sticky" ref={this.ref} style={{height: "4rem", width: "100vw", marginTop: "1rem", display: "flex", justifyContent: "center" }}>
                  <h2 style={{alignSelf: "center"}}>ABOUT</h2>
                </div>
                <div id="aboutheader"> {aboutHeaderText} </div>
                <div id="abouttext"> {aboutText} </div>
            </div>
        </div>
        
    );
  }
}

export default withRouter(About);
