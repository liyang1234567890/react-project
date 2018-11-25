import React from 'react'

export default class Child extends React.Component{

    render(){
        return <div>
            <p>这里来自子组件</p>
            <p>{this.props.number}</p>
        </div>
    }
}