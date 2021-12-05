import React, { Component } from 'react'
import OurTeam from './OurTeam'
import "../style/ourTeam.css"
export class MeetOurTeam extends Component {
    render() {
        let members=[
            {
                bg:"https://arabeducational.com/wp-content/uploads/2019/12/city-bg-796x445.jpg",
                src:"https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
                name:"Rania ABU Alnadi",
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                class:"memberBg",
                classCont:"teamCont"
            },
            {
                bg:"https://naaweb.org/media/k2/items/cache/4556f9757414c95d6b9db044b0c9421c_XL.jpg",
                src:"https://lh3.googleusercontent.com/proxy/L7B4SpY9ADh9iFp3cPt91jIs8qxA2AdLMjuPK3EwXn59nE-M0nva55NrICAg81tcZxfPgrM8BS902dms53hrVt3h0VwDBwy4U4MxwA8Myw2C12rBPRUa0Bb4sNXz3kTbliHf0glbbwKHcMQq",
                name:"Yaser.A",
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                class:"memberBgLeft",
                classCont:"teamContLeft"
            },
            {
                bg:"https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80g",
                src:"https://expow.org/wp-content/uploads/2021/07/8025287921598811056-512.png",
                name:"Fatema Ababnah",
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                class:"memberBgLeft",
                classCont:"teamContLeft"
            },
            {
                bg:"https://arabeducational.com/wp-content/uploads/2019/12/city-bg-796x445.jpg",
                src:"https://www.vinumstore.it/wp-content/uploads/2020/05/girl-icon-png-58.png",
                name:"Haneen Adinat",
                desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
                class:"memberBg",
                classCont:"teamCont"
            }
        ]
        let member=members.map((item,key)=>(
         <OurTeam memberName={item.name} src={item.src} desc={item.desc} bg={item.bg} class={item.class} className={item.classCont} key={key} />
        ))
        return (
            <>
                <h2 style={{color:"darkblue", margin:"3em auto 1em", display:"table"}}>Meet Our Great Team!!</h2>
            <div className="meetTeamCont">
                {member}
            </div>
            </>
        )
    }
}

export default MeetOurTeam
