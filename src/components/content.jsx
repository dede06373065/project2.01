import React, {Component} from 'react'
import './weather.css'
export default class Content extends Component{
    render(){
        return(
            <div className="content">
                <div className="content__top">
                        <div className="content__top__details">
                            <div className="degree">12 degree</div>
                            <h3>cloudy</h3>
                            <ul className="otherdetails">
                                <li>
                                    <h4>Humidity</h4>4%
                    </li>
                                <li className="border">
                                    <h4>Wind</h4>12km/h
                    </li>
                            </ul>
                        </div>
                        <div className="content__top__location">FRANCE</div>
                    </div>
                    <div className="content__ground">
                        <ul className="row">
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>Sun</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>Sun</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>Sun</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>Sun</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                            <li className="card">
                                <h4>Mon</h4>
                                <h3>Sun</h3>
                                <h3>15du</h3>
                                <p>Cloudy</p>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}