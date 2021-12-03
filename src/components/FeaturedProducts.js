import React, { Component } from "react";
import Card from "./Card";
import '../style/FeaturedProducts.css'


class  FeaturedProducts  extends Component{

    constructor(){
        super();

        this.state={
        ArrProducts:[
            {
              id:'0',
              srcImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98QU8pDIoG_EdQNM-YA8AenqatBFiLSgQEoiGGSVdeYmTpDB-OoKc3lq-CkUompjW7B0&usqp=CAU',
              Name:'haneen1',
              Description:'haneen',
              price:'20'
            },
            {
                id:'1',
                srcImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98QU8pDIoG_EdQNM-YA8AenqatBFiLSgQEoiGGSVdeYmTpDB-OoKc3lq-CkUompjW7B0&usqp=CAU',
                Name:'haneen1',
                Description:'haneen',
                price:'20'
            },
            {
                id:'2',
                srcImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS98QU8pDIoG_EdQNM-YA8AenqatBFiLSgQEoiGGSVdeYmTpDB-OoKc3lq-CkUompjW7B0&usqp=CAU',
                Name:'haneen1',
                Description:'haneen',
                price:'20'
            }]
        }

        this.Element=this.state.ArrProducts.map(function (element){
            return <Card key={element.id}
                         srcImg={element.srcImg}
                         Name={element.Name}
                         Description={element.Description}
                         price={element.price}/>
         })
     
    }
    
    render(){
        return(
            <div className="FeaturedProductsMain">
            <div className="FeaturedProductsh1">
            <h3>Featured Products</h3>
            </div>
            <div className="FeaturedProducts">
             {this.Element}
            </div>
            </div>
           
        )
    }
}

export default FeaturedProducts;