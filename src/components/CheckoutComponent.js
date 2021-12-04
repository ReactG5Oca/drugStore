import { Component } from "react";
import BillCards from "./BillCard";
import PlacedOrder from "./PlacedOrder";
import "../style/checkout.css"
export default class Checkout extends Component {
    state={
        submitState:""
    }
    submitted=()=>{
        this.setState({submitState:"submitted"})
    }
    render(){
        let data=[
            {   total:"JOD 69",
                taxes:"JOD 0"},
            {
                productName:"Drug 1",
                price:"JOD 20",
            },
            {
                productName:"Drug 2",
                price:"JOD 11",
            },
            {
                productName:"Drug 3",
                price:"JOD 8",
            },
            {
                productName:"Drug 4",
                price:"JOD 30",
            }
        ]
        let values=data.map((item,key)=>(
           <BillCards price={item.price} productName={item.productName} totalPrice={item.total} key={key} />
           
        )
        )
        if(this.state.submitState!=="submitted"){
        return(
            <div>
            <form className="form" onSubmit={this.submitted}>
                <div className="checkCont">
                <div>
                <h3 className="formTitle">Please fill your information</h3>
               <div>
                   <span>Personal Information:</span>
                <input type="text" placeholder="User Name" className="formInputs userName" required></input>
               <input type="email" placeholder="Email" className="formInputs email" required></input>
               <input type="tel" placeholder="Phone Number" className="formInputs phoneNumber" required></input>
               </div><br/>
               <div>
               <span>Address Information:</span>
               <input type="text" placeholder="Country" className="formInputs address" required></input>
               <input type="text" placeholder="City" className="formInputs address" required></input>
               <input type="text" placeholder="Address 2" className="formInputs address" required></input>
               </div>
               <div>
                   <br/>
                   <h3>Payment Method</h3>
                   <div>
                    <input type="checkbox" value="cash" name="cash" id="cash" placeholder="Cash" required></input>
                   <label htmlFor="cash">Cash on delivery</label>
                   </div>
                   <br/>
                   <input type="submit" value="Place your order" className="formInputs checkSubmit"></input>
               </div>
               </div>
               <div className="bill">
                <div className="billCard">
                <h3 className="billTitle">Your Order</h3>
                 <span className="products"> {values} </span><hr/>
                  <span className="totalTaxes">purchase
                  <span>{data[0].total}</span></span>
                  <span className="totalTaxes">Taxes
                  <span>{data[0].taxes}</span></span>
                  <hr/>
                  <div className="totalSection"><span>Total:  </span>
                  <span className="totalPrice"> {data[0].total}</span>
                  </div>
                  </div>
                  </div>
               </div>
            </form>
            </div>)}
                else{
                return(
                 <div className="orderMessage"> <PlacedOrder /> </div>
                 )}
        
    }
};
