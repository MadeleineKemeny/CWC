import React from "react";
import { CartCard, CartTable, CartItems, Subtotal } from "../components/CartPage";
import OrdersAPI from "../utils/OrdersAPI"

class Cart extends React.Component {
    // saveOrder = () => {
    //     OrdersAPI.saveOrder({
    //         wineName:
    //         wineQty:
    //         winePrice:
    //         firstName:
    //         lastName:
    //         address1:
    //         address2:
    //         city:
    //         state:
    //         zip:
    //     })
    // }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(value)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.saveOrder();       
    };
    
    render() {
        return (
            <div className="scroll">
                <CartCard>
                    <h1 className="card-title">Cart: {this.props.cartItems.length} items</h1>
                    {this.props.cartItems.length > 0 ?
                        (<CartTable>
                            {this.props.cartItems.map(cartItem => (
                                <CartItems
                                    productName={cartItem.name}
                                    quantity="1"
                                    price={"$" + cartItem.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                                >
                                <i className="far fa-trash-alt" onClick={() => this.props.onDelete(cartItem)}></i>
                                </CartItems>
                            ))}
                            <Subtotal 
                            totalQty = {this.props.cartItems.length}
                            totalPrice = {"$" + this.props.subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                            />
                        </CartTable>

                        ) : <div>Looks a little empty. Browse our collection of wines.</div>}
                </CartCard>
                <CartCard>
                    <h1 className="card-title">Shipping Information</h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="firstNameInput" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="LastNameInput" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Street Address" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" id="inputCity" placeholder="City" />
                        </div>
                        <div className="form-group col-md-4">
                            <select id="inputState" className="form-control">
                                <option selected>State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" />
                        </div>
                        </div>
                        <h1 className="card-title">Payment Information</h1>
                        <div className="form-group row">
                            <label for="cardholderInput" className="col-sm-2 col-form-label">Cardholder Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="cardholderInput" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label for="cardNumberInput" className="col-sm-2 col-form-label">Card Number</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="cardNumberInput" />
                                </div>
                        </div>
                        <div className="form-group row">
                            <label for="expMthInput" className="col-sm-2 col-form-label">Expiration Month</label>
                                <div className="col-sm-2">
                                    <select id="expMthInput" className="form-control">
                                    <option selected>Month</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    </select>
                                </div>
                            <label for="expYrInput" className="col-sm-2 col-form-label">Expiration Year</label>
                                <div className="col-sm-2">
                                <select id="expYrInput" className="form-control">
                                    <option selected>Year</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    </select>
                                </div>
                            <label for="securityCodeInput" className="col-sm-2 col-form-label">Security Code</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control" id="securityCodeInput" />
                                </div>
                        </div>
                        <button className="btn btn-primary">Complete Order</button>
            </CartCard>
            </div>
                                    )
                                }
                            }
                            
export default Cart;