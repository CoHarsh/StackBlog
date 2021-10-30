import React, { Component } from 'react'
import list from '../Data/DataList.json'
import MainPageStack from './MainPageStack'

export default class MainPageList extends Component {
    render() {
        return (
            <div className="container my-3 py-4 px-5">
                {/* <h1 className="container my-3 ">{info.title}</h1> */}
                {
                list.titles.map((e) => {
                return <>
                <MainPageStack name={e.name} desc={e.desc} link={e.link}/>
                </>
                
                })
        
                }
            </div>
        )
    }
}
