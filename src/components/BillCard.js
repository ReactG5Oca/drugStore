import { Component } from "react";

export default class BillCards extends Component {
    render(){
        return(
    <span>
    <span  className="billProducts">
        <span>{this.props.productName}</span>
        <span>{this.props.price}</span>
        </span>
    
    </span>
    
        )}};
