import React, { Component } from 'react'
import ShowTheData from './ShowTheData'

export default class GettheRequest extends Component {
    render(props) {
        return (
            <div>
                <h1 className="container my-3 ">{this.props.info.title}</h1>
                {
                this.props.info.data.map((e,count=1) => {
                return <>
                <ShowTheData snippet={e.snippet} desc={e.desc} key = {e.count} count = {e.count}/>
                </>
                
                })
        
                }
            </div>
        )
    }
}
