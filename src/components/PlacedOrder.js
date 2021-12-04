import React, { Component } from 'react'

export class PlacedOrder extends Component {
    render() {
        return (
            <div className="orderCont">
                <h2 className="orderMessage">Thank You!!!</h2>
                <h3 className="orderMessage">Your order is placed, We appreciate your trust</h3>
            </div>
        )
    }
}

export default PlacedOrder
