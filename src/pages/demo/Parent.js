import React from 'react'
import Child from './Child'
export default class Parent extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         count:0
    //     };
    // }
    // 一个道理 
    state = {
        count: 0
    }

    handleAdd=()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return <div style={{padding: 50}}>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>再点击一下</button>
            <p>{this.state.count}</p>
            <Child num={this.state.count}></Child>
        </div>
    }
}

// import React from 'react'
// import Child from './Child'

// export default class Parent extends React.Component{
//     state = {
//         count : 0
//     }
//     handleAdd=()=>{
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
//     anotherhandleAdd(){
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
//     render(){
//         return <div>
//             <button onClick={this.handleAdd}>点击一次</button>
//             <button onClick={this.anotherhandleAdd.bind(this)}>再点击一次</button>
//             <p>{this.state.count}</p>
//             <Child number={this.state.count}></Child>
//         </div>

//     }
// }