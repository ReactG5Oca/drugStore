import React, { Component } from 'react'
import "../style/footer.css"
export class Footer extends Component {
    render() {
        return (
            <div className="Footer cont">
            <div className="Footer footer">
            <div className="Footer firstCol">
                <div>
                ABOUT
                </div>
                <div className="Footer about">
                Our store is more than just another average ondivne retailer. We sell not only top quality products, but give our customers a positive online shopping experience.
                </div>
            </div>
            <ul className="Footer secondCol"><br/>
            INFORMATION
            <li className="Footer Items">
            About Us
            </li> 
            <li className="Footer Items">
            Customer Service
            </li>
            <li className="Footer Items">
            Privacy Policy   
            </li>
            <li className="Footer Items">
            Contact Us
            </li>
            </ul>
            <ul className="Footer thirdCol"><br/>
            Shipping & Delivery
            <li className="Footer Items">
            Secure payment
            </li> 
            <li className="Footer Items">
            Guarantee
            </li>
            <li className="Footer Items">
            Terms & Conditions  
            </li>
            </ul>
            <ul className="Footer forthCol"><br/>
            CATEGORIES
            <li className="Footer Items">
            Home Medicine
            </li> 
            <li className="Footer Items">
            Baby & Child
            </li>
            <li className="Footer Items">
            Diet & Nutrition 
            </li>
            </ul>
            </div>
                <div className="Footer icons">
                    <span>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook account"/>
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="Linked account"/>
                <img src="https://img.icons8.com/ios-filled/45/4a90e2/github.png" alt="Github account"/>
                </span>
                <span className="copyright">&copy; Copyrights</span>
                </div>
            </div>
        )
    }
}

export default Footer
