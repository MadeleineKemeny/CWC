import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import WineDetails from "./pages/WineDetails";
// import MyCarousel from "./components/Carousel";
import NavAdmin from "./components/Admin/NavAdmin";
import Login from "./pages/Admin";
import Cart from "./pages/Cart";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import OurProducers from "./pages/OurProducers";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Terms from "./pages/Terms";
import FAQs from "./pages/FAQs";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "./img/sunrise-field.png";
import img2 from "./img/vineyard-misty-pond.png";
import img3 from "./img/sunset-field1.png";
import img4 from "./img/vineyard-mountains.png";
import img5 from "./img/vineyard-sunny1.png";
import img6 from "./img/vineyard-misty.png";
import Confirmation from "./pages/Confirmation"

class App extends React.Component {
  state = {
    User: null,
    cartItems: [],
    subtotal: 0,
    shippingCost: 19.99,
    tax: 0,
    orderTotal: 0
  };

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state));
  };

  handleAddToCart = wine => {
    console.log("add wine to cart", wine);
    var exisitingCart = this.state.cartItems;
    var priceTotal = this.state.subtotal; 
    var newSubtotal = priceTotal += wine.price; 
    var taxTotal = newSubtotal * .1;
    
    this.setState({
      cartItems: [...exisitingCart, wine],
      subtotal: newSubtotal,
      tax: taxTotal,
      orderTotal: newSubtotal + taxTotal + this.state.shippingCost
    });
  };

  handleItemDelete = item => {
    const previousCart = this.state.cartItems; //this is an array
    let indexItem = previousCart.indexOf(item);
    var priceTotal = this.state.subtotal;
    var newSubtotal = priceTotal -= item.price;
    var taxTotal = newSubtotal * .1;
    let itemRemoval = previousCart.splice(indexItem, 1);
    this.setState({
      cartItems: previousCart,
      subtotal: newSubtotal,
      tax: taxTotal,
      orderTotal: newSubtotal + taxTotal + this.state.shippingCost
    })
  }

  handleClearCart = () => {
    this.setState({
      cartItems: [],
      subtotal: 0
    })
  }

  render() {
    return (
      <Router>
        <div>
          <TopNav cartItems={this.state.cartItems}></TopNav>
          {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
          <div id="CWClogo">
            <img src="reverseLogo.png" width="150" height="176" alt=""/>
          </div>
          <Carousel
            className="myCarousel"
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={10000}
            transitionTime={5000}
          >
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
            <div>
              <img src={img5} alt="" />
            </div>
            <div>
              <img src={img6} alt="" />
            </div>
          </Carousel>

          <div className="wrapper">
            <div id="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/admin"
                  render={() => (
                    <Login updateGlobalState={this.updateGlobalState} />
                  )}
                />

                <Route
                  exact
                  path="/wines"
                  render={() => <Wines 
                    onAddToCart={this.handleAddToCart} />}
                />
                <Route
                  exact
                  path="/wine/:id"
                  render={routeProps => (
                    <WineDetails
                      onAddToCart={this.handleAddToCart}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart"
                  render={() => <Cart cartItems={this.state.cartItems} subtotal={this.state.subtotal} shippingCost={this.state.shippingCost} onDelete={this.handleItemDelete} tax={this.state.tax} orderTotal={this.state.orderTotal}/>}
                />
                <Route 
                exact path="/cart/confirmation" 
                render={() => <Confirmation orderTotal={this.state.orderTotal} clearCart={this.handleClearCart}/>}
                />
                <Route exact path="/producers" component={OurProducers} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/about" component={About} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/faqs" component={FAQs} />

                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
          <div id="footer">
            <BottomNav></BottomNav>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
