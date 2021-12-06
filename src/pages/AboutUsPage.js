import React, { Component } from 'react'
import Aboutus from '../components/Aboutus'
import Testimonials from '../components/Testimonials'
import MeetOurTeam from '../components/MeetOurTeam'

export class AboutUsPage extends Component {
    render() {
        return (
            <>
            <Aboutus/>
            <Testimonials/>
            <MeetOurTeam/>
            </>

        )
    }
}

export default AboutUsPage
