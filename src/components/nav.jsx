import React, {Component} from 'react'
import '../bootstrap-3.4.1-dist/css/bootstrap.min.css'
import './weather.css'
export default class Nav extends Component{
    render(){
        return(
            <div className="nav">
            <ul className="nav__bar">
                <li className="nav__bar__logo">
                    <img src="../asset/cloud.png" alt="logo_weatherapp" /> Weather APP
                    </li>
                <li className="nav__bar__date">Sunday,12th, Dec</li>
                <li className="nav__bar__more">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Go!</button>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        )
    }

}