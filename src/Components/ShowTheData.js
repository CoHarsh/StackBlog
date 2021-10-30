import React, { Component } from 'react'

export default class ShowTheData extends Component {
    render(props) {
        return (
            <div>
                <div className="card container my-4">
                   
                    <div className="card-body">
                        <p className="card-text">{this.props.desc}</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                    <h5 className="card-header bg-dark h5-dark text-warning fontconsole">{this.props.snippet}</h5>
                    <span className="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger">{this.props.count}</span>
                </div>
            </div>
        )
    }
}
