import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import img1 from "./img/sunrise-field.png";
import img2 from "./img/vineyard-misty-pond.png";
import img3 from "./img/sunset-field1.png";
import img4 from "./img/vineyard-mountains.png";
import img5 from "./img/vineyard-sunny1.png";
import img6 from "./img/vineyard-misty.png";

import Superpage from "./Superpage";

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
      <div>
        <Carousel
          showIndicators={false}
          showArrows={false}
          className="myCarousel"
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={10000}
          transitionTime={5000}
          stopOnHover={false}
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
        <Superpage />
      </div>
    );
  }
}

export default App;
