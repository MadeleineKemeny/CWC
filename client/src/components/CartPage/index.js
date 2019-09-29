import React from "react";

export function CartCard({ children }) {
    return <div className="card">{children}</div>
}

export function CartTable({ children }) {
    return (
        <div>
            <table className="cartItems table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                { children }
            </table>
        </div>
    )
}

export function CartItems(props) {
    return (
            <tbody>
                <tr>
                    <td>
                    <button onClick={props.onViewDetails} class="btn btn-link">{props.productName}</button>
                    </td>
                    <td>{props.quantity}</td>
                    <td>{props.price}</td>
                    <td>{props.children}</td>
                </tr>
            </tbody>
    )
}

export function Subtotal(props) {
    return (
        <tbody>
            <tr>
                <td>Merchandise Total</td>
                <td>{props.totalQty}</td>
                <td>{props.totalPrice}</td>
                <td></td>
            </tr>
            <tr>
                <td>Shipping &amp; Handling</td>
                <td></td>
                <td>${props.shippingCost}</td>
                <td></td>
            </tr>
            <tr>
                <td>Tax</td>
                <td></td>
                <td>${props.tax}</td>
                <td></td>
            </tr>
            <tr>
                <td>Order Total</td>
                <td></td>
                <td>${props.orderTotal}</td>
                <td></td>
            </tr>
            <button className="btn btn-primary">Checkout</button>
        </tbody>
    )
}