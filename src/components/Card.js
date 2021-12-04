import React, { Component } from 'react';
import '../style/Card.css';


class Card extends Component{
    render(){
    
        return(

     <div className="Card">
          <div className="image-container">
          <img src={this.props.srcImg} alt={this.props.name} />
          </div>
          <div className="information-container">
          <h1>{this.props.Name}</h1>
            <div className="card-brief-description">
            <p>{this.props.Description}</p>
            </div>
            <div className="Price"> Price :{this.props.price}</div>
            <div className="add-to-cart-btn">
              <div className="btn-icon">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <div className="btn-text"> Add to Cart</div>
            </div>
          </div>
        </div>



        )
    }
}

export default Card;