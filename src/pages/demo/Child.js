import React from 'react'
export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }
    // 组件初始化
    componentWillMount(){
        console.log('will mount');
    }
    //两者成对出现
    componentDidMount(){
        console.log('did mount');
    }
    //接受属性 有参数
    componentWillReceiveProps(newProps){
        console.log('will props 接受来自父组件的属性'+ newProps.num);
    }

    //调用setState()就会更新的方法 return true
    //return false 后面的生命周期就不会走了
    shouldComponentUpdate(){//调用this.setState()一次就要用这个方法一次
        console.log('should update');
        return true;
    }
    //组件更新之前
    componentWillUpdate(){
        console.log('will update');
    }
    //组件更新之后  
    componentDidUpdate(){
        console.log('did update');
    }

    render(){//
        //will mount 是文字渲染之前打印的
        //did mount 是文字渲染之后打印的
        return <div>
            <p>这里是子组件，测试子组件的生命周期</p>
            {/* props接受来自Life.js父组件中的值*/}
            <p>{this.props.num}</p>
        </div>
    }


}