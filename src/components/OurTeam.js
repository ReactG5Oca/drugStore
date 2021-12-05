import React, { Component } from 'react'
import "../style/ourTeam.css"
export class OurTeam extends Component {
    render() {
        return (
            <>
               <div className={this.props.className}>
                   <img alt="memberBg" className={this.props.class} src={this.props.bg}/>
                   <img className="teamMemberImg" alt="member1"  src={this.props.src}/>
                   <p className="memberName">{this.props.memberName}</p>
                   <p className="memberName">{this.props.desc}</p>
                </div> 
            </>
        )
    }
}

export default OurTeam
