import React, { Component } from 'react'

export class Person extends Component {
    render() {
        return (
            <div>
                 <div className={this.props.className}>
                <img className="avatarImg" alt="avatar" src={this.props.avatar}/>
                  <div className="msgTxt"> 
                    <h2>{this.props.name}</h2>
                <div>{this.props.msg} <br/>
                 {this.props.rate}
                <img alt="star1" src="https://img.icons8.com/fluency/30/ffffff/star.png"/>
                <img alt="star2" src="https://img.icons8.com/fluency/30/ffffff/star.png"/>
                <img alt="star3" src="https://img.icons8.com/fluency/30/ffffff/star.png"/>
                <img alt="star4" src="https://img.icons8.com/fluency/30/ffffff/star.png"/>
                <img alt="star5" src="https://img.icons8.com/fluency/30/ffffff/star.png"/>
                </div>
            </div> 
            </div>
           </div>
        )
    }
}

export default Person
