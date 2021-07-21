import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

class App extends React.Component{
  render(){
    return(
   <React.Fragment>
   <Navigation />
   <Router>
   <Switch>
   <Route path="/about" component={About} />
   <Route path="/" component={Home} />
   </Switch>
   </Router>
   </React.Fragment>
      );
  }
}

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <Navbar bg="light" expand="md" className="px-2 fixed-top" variant="light">
      <Navbar.Brand href="" className="font-weight-bold"><span className="text-dark">Ad</span><span className="text-tomato">helix.</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{fontSize: "1rem"}} className="navbar-toggler">
      <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="">
      <Nav className="mx-auto text-center">
      <Nav.Link href="/" className="">Home page</Nav.Link>
      <Nav.Link href="/about" className="">About us</Nav.Link>
      <Nav.Link href="tel:08023977807" className="btn btn-tomato text-light px-3 mx-auto" style={{width: "10rem"}}>Contact us</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
      );
  }
}



class Home extends React.Component{
  render(){
    return(
     <React.Fragment>
      <div className=" mt-6 container">
      <div className="row">
      <div className="col-12"> 
      <Fade left>
      <h1 className="large text-center font-weight-bold">
     Let's help you design your<br /> comfort zone.
      </h1>
      </Fade>
      <Fade up>
      <p className="text-muted text-center">
      We are a multi-dynamic firm, with outstanding expertise in making furnitures, interior design <br />and exterior roofing with excellent<br /> quality materials.
     </p>
     <p className="text-center"><a className="btn btn-tomato py-1" href="tel:08023977807">Get in touch</a></p>
     </Fade>
     </div>
     <div className="col-12">
     <Zoom>
     <img src="/assets/images/product-1.jpg" className="img" alt="A beautiful and modern sofa by Adhelix"/>
     </Zoom>
     </div>
     </div>
    
     <div className="row">
     <h1 className="text-center mt-5"><span className="font-weight-bold">Benefits</span> Adhelix <span className="font-weight-bold">have for you.</span></h1>
     <p className="text-muted text-center">Beauty, Quality and Expertise &rarr; all in one place.</p>
     </div>
     <div className="info rounded p-2">
     <div className="row">
     <div className="col-md-4">
     <h1 className="font-weight-bold"><img src="assets/fonts/svg/mbri-speed.svg" className=" p-2" alt=""/> Fast and affordable</h1>
     <p className="text-muted">We promise to deliver our services on time while still making it affordable. We do our best to keep up with deadlines.</p>
     </div>
     <div className="col-md-4">
     <h1 className="font-weight-bold"><img src="assets/fonts/svg/mbri-briefcase.svg" className="p-2" alt=""/> Easy components design</h1>
     <p className="text-muted">Our products are portable and are designed on the belief that furnitures should fit your home and lifestyle.</p>
     </div>
     <div className="col-md-4">
     <h1 className="font-weight-bold"><img src="assets/fonts/svg/mbri-database.svg" className="p-2" alt=""/>Durable, Quality materials</h1>
     <p className="text-muted">All our products are made with first-class quality materials. We hate failing furnitures, it's a waste of time and money.</p>
     </div>
     </div>
     </div>
     <div className="mt-3 row">
     <div className="col-12 col-md-6">
     <Showcase 
     bigImg="/assets/images/product-4.jpg"
     smallImg="/assets/images/product-2.jpg" 
     productName= "White shoe rack"
     furnitureType= "Modern Design"
     price=""
     />
     </div>
     <Fade right>
     <div className="col-12 col-md-6">
     <h1 className="font-weight-bold">
     Introducing the style you have always
     wanted
     </h1>
     <p className ="text-muted">
     At Adhelix, we are committed to
     using our creativity in the best way
     we can, to create Human-centric
     furnitures that fit your home and
     lifestyle.
     <div className="text-left info p-2">
     <b className="text-della text-dark">Modern style</b>
     <div className="row">
       <div className="col-6">
       <ul>
         <li> Glossy top</li>
         <li>Luxury finish</li>
       </ul>
       </div>
       <div className="col-6">
       <ul>
         <li> Formica finish</li>
         <li>Waxed up</li>
       </ul>
       </div>
       </div>
     </div>
     </p>
     
 <div className="p-2">
 <b className="text-della">
 Vintage style
 </b>
     <div className="row text-muted">
       <div className="col-6">
       <ul>
         <li> Granny</li>
         <li>Mahogany</li>
       </ul>
       </div>
       <div className="col-6">
       <ul>
         <li>Hybrid Material</li>
         <li>Heritage</li>
       </ul>
       </div>
       </div>
       </div>
       </div>
       </Fade>
       </div>
     <Fade left>
    <div className="row">
    <div className="col-12 col-md-6">
    <h1 className="font-weight-bold">The last time you will have a leaking roof</h1>
    <p className="text-muted">Integrity sits on the top of our core values. Our roofings both interior and exterior are made with best quality materials we find in the market.</p>
    
    <p className="">
    <h1>
    <img src="assets/fonts/svg/mbri-features.svg" alt=""/>
    Best Furniture Designs
    </h1>
    <p className="text-muted">
    All our products and services are designed by probably the best wood-workers in Nigeria.
    </p>
  <h1>
    <img src="assets/fonts/svg/mbri-credit-card.svg" alt=""/>
    Pocket-friendly Prices
    </h1>
    <p className="text-muted">
    We believe in making furnitures that provides optimal comfort without breaking the bank.
    </p>
  <h1>
    <img src="assets/fonts/svg/mbri-magic-stick.svg" alt=""/>
    Live your comfort zone
    </h1>
    <p className="text-muted">
    Works like magic. You simply dream it and we design it. Make sense?
    <a href="tel:08023977807" className="text-tomato"> Contact us now</a>
    </p>
    </p>
    </div>
    
    
    <div className="col-12 col-md-6">
    <Showcase bigImg="/assets/images/product-11.jpg"
    smallImg="/assets/images/product-12.jpg" 
    productName="Luxury sette"
    furnitureType="Vintage design"
    />
    </div>
    </div>
    </Fade>
    <div className="row">
    <h1 className="text-center font-weight-bold pb-3" style={{textDecoration: "underline"}}>Our Favorite Projects</h1>
    <Zoom>
    <div className="col-md-7">
    <NameTag img="/assets/images/t-1.jpg" category="Office"/>
    </div>
    </Zoom>
    <Zoom>
    <div className="col-md-5">
    <NameTag img="/assets/images/product-7.jpg" category="Chairs"/>
    </div>
    </Zoom>
    </div>
  <div className="row">
  <Zoom>
 <div className="col-md-4">
    <NameTag img="/assets/images/product-9.jpg" category="Beds"/>
    </div>
    </Zoom>
    <Zoom>
 <div className="col-md-4">
    <NameTag img="/assets/images/product-5.jpg" category="Wardrobes"/>
    </div>
    </Zoom>
    <Zoom>
 <div className="col-md-4">
    <NameTag img="/assets/images/product-8.jpg" category="Interior designs"/>
    </div>
    </Zoom>
    </div>
  </div>
  <Footer />
  </React.Fragment>
      );
  }
}

class About extends React.Component{
  render(){
    return(
      <React.Fragment>
      <div className="container">
      <Bounce left>
      <h1 className="mt-6 text-center">We are Adhelix.</h1>
      </Bounce>
      <Fade left>
      <p className="text-muted mt-4">
      Adhelix is a company that is passionate about quality furnitures, roofings and interior decorations. We hate failing furnitures, leaking roofs or sitting rooms that sucks. That is why all our products and services are of excellent quality. Having several years of experience under our belt, we have been able to satisfy hundreds of clients across Nigeria.
      </p>
      </Fade>
      <p className="text-muted">
      <Fade left>
      Our main goal is to help you transform your home into a comfort to behold. We believe in Integrity and consistency. 
      </Fade>
      </p>
      <Fade left>
      <p className="text-muted">
      When you need it beautifully designed and with quality materials then consider Adhelix.
      </p>
      </Fade>
      <Bounce right>
      <p className="mt-3">
      <a href="tel:08023977807" className="text-light btn-tomato  px-2">Contact us</a>
      </p>
      </Bounce>
      <h1 className="text-center mt-5 mb-3">Here comes the hero.</h1>
      <Zoom>
      <img src="/assets/images/leader.png" className="img rounded" alt=""/>
      </Zoom>
      <p className="text-center mt-2">
      <b className="text-della x2 mt-2">Mr Ajibodu Matthew</b>
      <p className="text-muted">Chief Executive Officer, Adhelix</p>
      </p>
      </div>
      <Footer />
      </React.Fragment>
      );
  }
}
class Showcase extends React.Component{
  render(){
    
    // prdtName means the product name
    
    return(
      <GalleryItem 
      mainImgUrl={this.props.bigImg}
      secondaryImgUrl={this.props.smallImg}
      prdtName={this.props.productName}
      type={this.props.furnitureType}
      price={this.props.productPrice}
      />
      );
  }
}
class NameTag extends React.Component{
  render(){
    return (
      <React.Fragment>
      <div className="">
      <img src={this.props.img} className="rounded img2" alt="We make this"/>
      <div style={{
      maxWidth: "7rem",
      background: "rgba(255,255,255,1.0)",
      position: "relative", top: "-3.2rem",
      left:"0.5rem",
      zIndex:"1"
      }} className="p-2 rounded text-center">
      <span className="">
      {this.props.category}
      </span>
      </div>
      </div>
      </React.Fragment>
     );
  }
}


class GalleryItem extends React.Component{
  render(){
    /*  
    *xxx is price props and would be changed later
    */
    return(
      <React.Fragment>
      <div className="">
      <img src={this.props.mainImgUrl} className="img rounded" alt="Made by Adhelix"/>
      <div style={{
      maxWidth: "13rem",
      background: "rgba(255,255,255,0.85)",
      position: "relative", top: "-6.2rem",
      left:"0.5rem",
      zIndex:"1"
      }} className="p-2 rounded text-center">
      <div className="row">
     <div className="col-5">
     
     <img src={this.props.secondaryImgUrl} className="img rounded" style={{display: this.props.showDetails, width: this.props.imgWidth}} alt="Made by Adhelix"/>
     </div>
     
     <div className="col-7">
     <b className="text-della mb-0 pb-0"> {this.props.prdtName}
     </b>
    <br />
    <small className="bg-light text-muted px-2 rounded small" style={{display: this.props.showDetails}}>
    {this.props.type}
    </small>
    <div className="text-tomato"> &#8358; xxx
     </div>
     </div>
     </div>
     </div>
     </div>
      </React.Fragment>
      );
  }
}
class Footer extends React.Component{
  render(){
    return(
      <React.Fragment>
      <div className="bg-light text-dark text-center mb-0">
      <a href="tel:08023977807" className=""> Contact us</a>&nbsp; | &nbsp;
      <a href="/about">About us</a>
      <br />
      Follow us on <i className="fab fa-instagram"></i>
      &nbsp;
      <i className="fab fa-facebook"></i>
        &nbsp; @ Adhelix_luxe
      <p className="text-muted">Designed by DevOlumide (Ogunmola Samuel) +2349056681801</p>
      </div>
      </React.Fragment>
      );
  }
  
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
