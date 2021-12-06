import { Component } from "react";

export default class BillCards extends Component {
    render(){
        // let total=0;
        // total+=this.props.price
        return(
    <span>
    <span  className="billProducts">
        <span>{this.props.index}- {this.props.productName} * {this.props.quantity}</span>
        <span>{this.props.price}Jd</span>
        </span>
           
    </span>
    
        )}};
