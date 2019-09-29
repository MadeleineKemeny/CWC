import React from "react";
import { CartCard } from "../components/CartPage";
import { Link } from "react-router-dom";

const confirmStyle = {
    textAlign: 'center'
}

class Confirmation extends React.Component {
    render() {
        return (
            <div style={confirmStyle}>
                <CartCard>
                    <h3>Thank you for your order!</h3>
                    <p>We hope you enjoy your purchase.</p>
                    <p>Your order total is {"$" + this.props.subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                    <Link to="/wines">
                    <button className="btn btn-primary" onClick={() => this.props.clearCart()}>Back to Browse</button>
                    </Link>
                </CartCard>
            </div>
        )
    }
}

export default Confirmation;