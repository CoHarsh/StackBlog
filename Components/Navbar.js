// navbar(topic option)
// data
// footer
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import React, { Component } from 'react'

export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.state = {
            search:""
        }
    }
    handleOnChange = (e) =>{
        this.setState({search:e.target.value.toLowerCase()})
    }

    handleOnClick = (e) =>{
        e.preventDefault();
        console.log(this.state.search);
        
    }
    componentDidMount() {
        return this.state.search;
    }
    
    render(props) {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">StackBlog</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                            <Link className="nav-link" to="/">Add Stack</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleOnChange} value={this.state.search}/>
                            <button className="btn btn-outline-success" type="submit" onClick={this.handleOnClick}>Search</button>
                        </form>
                        </div>
                    </div>
                    </nav>
            </div>
        )
    }
}

