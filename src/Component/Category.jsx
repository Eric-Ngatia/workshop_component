import React, { Component } from 'react'
import './Category.css'
import "bootstrap/dist/css/bootstrap-grid.min.css";

export default class Category extends Component {
    render() {
    return (
        <div className='container'>
            <h2>Category container</h2>
            <div class="grid">
                <div class="g-col-4">Category Card</div>
                <div class="g-col-4">Category Card</div>
                <div class="g-col-4">Category Card</div>
                <div class="g-col-4">Category Card</div>
            </div>
        </div>
    )
}

}
