import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BottomNav from "./components/BottomNav";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Login from "./pages/Admin";
import NavAdmin from "./components/Admin/NavAdmin";
import NoMatch from "./pages/NoMatch";
import OurProducers from "./pages/OurProducers";
import TopNav from "./components/TopNav";
import Terms from "./pages/Terms";
import Wines from "./pages/Wines";
import WineDetails from "./pages/WineDetails";

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
    var newSubtotal = (priceTotal += wine.price);
    var taxTotal = newSubtotal * 0.1;

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
    var newSubtotal = (priceTotal -= item.price);
    var taxTotal = newSubtotal * 0.1;
    previousCart.splice(indexItem, 1);
    this.setState({
      cartItems: previousCart,
      subtotal: newSubtotal,
      tax: taxTotal,
      orderTotal: newSubtotal + taxTotal + this.state.shippingCost
    });
  };

  handleClearCart = () => {
    this.setState({
      cartItems: [],
      subtotal: 0
    });
  };

  render() {
    return (
      <Router>
        <div>
          <TopNav cartItems={this.state.cartItems}></TopNav>
          {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
          <div id="CWClogo">
            <Nav.Link as={Link} to="/home">
              <img src="reverseLogo.png" width="150" height="176" alt="" />
            </Nav.Link>
          </div>

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
                  render={() => <Wines onAddToCart={this.handleAddToCart} />}
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
                  render={routeProps => (
                    <Cart
                      cartItems={this.state.cartItems}
                      subtotal={this.state.subtotal}
                      shippingCost={this.state.shippingCost}
                      onDelete={this.handleItemDelete}
                      tax={this.state.tax}
                      orderTotal={this.state.orderTotal}
                      onAddToCart={this.handleAddToCart}
                      {...routeProps}
                    />
                  )}
                />
                <Route
                  exact
                  path="/cart/confirmation"
                  render={() => (
                    <Confirmation
                      orderTotal={this.state.orderTotal}
                      clearCart={this.handleClearCart}
                    />
                  )}
                />
                <Route exact path="/producers" component={OurProducers} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/about" component={About} />
                <Route exact path="/terms" component={Terms} />
                <Route exact path="/faqs" component={FAQs} />
                <Route exact path="/home" component={Home} />
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
