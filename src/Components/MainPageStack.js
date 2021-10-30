import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default class MainPageStack extends Component {
    render(props) {
        return (
            <div>
                <ol className="list-group my-4">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                        <h1 className="fw-bold text-primary "> ✔️ {this.props.name}</h1>
                        {this.props.desc}
                        </div>
                        <Link to={"/" + this.props.link} className="btn btn-danger position-absolute top-0 start-100 translate-middle">Read</Link>
                        <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">New</span>
                    </li>
                    
                    </ol>
            </div>
        )
    }
}

