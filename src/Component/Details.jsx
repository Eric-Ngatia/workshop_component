import React, { Component } from 'react'
import './Details.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";


export default class Details extends Component {
    render() {
    return (
        <div className='card'>
            <div class="grids">
                <div class="g-col">
                    <div className='picture'> <img height="90px" width= "90px"  src={"image1.jpg"} /> </div>
                    <div>
                        <h3>Stays</h3>
                        <p>Homes, boutiques hotels and more</p>
                    </div>
                </div>

                <div class="g-col">
                    <div className='picture'> <img height="90px" width= "90px"  src={"image2.jpg"} /> </div>
                    <div>
                        <h3>Experiences</h3>
                        <p>Activities hosted by locals</p>
                    </div>
                </div>

                <div class="g-col">
                    <div className='picture'> <img height="90px" width= "90px"  src={"image3.jpg"} /> </div>
                    <div>
                        <h3>Adventures</h3>
                        <p>Hosted trips including</p>
                    </div>
                </div>

                <div class="g-col">
                    <div className='picture'> <img height="90px" width= "90px"  src={"image4.jpg"} /> </div>
                    <div>
                        <h3>Restaurants</h3>
                        <p>Popular stops to eat & drink</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

}
