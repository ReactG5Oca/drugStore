import React, { Component } from 'react'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <FeaturedProducts/>
            </div>
        )
    }
}

export default LandingPage
