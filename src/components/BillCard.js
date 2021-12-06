import { Component } from "react";

export default class BillCards extends Component {
    render(){
        return(
    <span>
    <span  className="billProducts">
        <span>{this.props.index}- {this.props.productName} * {this.props.quantity}</span>
        <span>{this.props.price}Jd</span>
        </span>
           
    </span>
    
        )}};
