import React from 'react'
import Child from './Child'

export default class Parent extends React.Component{
    state = {
        count : 0
    }

    handleAdd=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    anotherhandleAdd(){
        this.setState({
            count : this.state.count + 1
        })
    }
    render(){
        return <div>
            <button onClick={this.handleAdd}>点击一次</button>
            <button onClick={this.anotherhandleAdd.bind(this)}>再点击一次</button>
            <p>{this.state.count}</p>
            <Child number={this.state.count}></Child>
        </div>
    }
}