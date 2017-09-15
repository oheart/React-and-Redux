import React from 'react';

//法一
/*class App extends React.Component{
    render(){
        return React.createElement('h1',null,'Hello Series')
    }
}*/
//法二
/*class App extends React.Component{
    render(){
        return <h1>Hello Series</h1>
    }
}*/
//法三:
//const App = () => <h1>Hello Series</h1>


//使用JSX
/* class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <b>Bold</b>
            </div>
        )
    }
} */


// 使用props
/* class App extends React.Component{
    render(){
        let txt = this.props.txt;
        return <h1>{txt}</h1>
    }
}
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
    txt: "this is the default txt"
} */



// 使用state
/* class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt',
            cat: 0
        }
    }
    update(e){
        this.setState({
            txt: e.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text"
                    onChange={this.update.bind(this)}/>
                <h1>{this.state.txt} - {this.state.cat}</h1>
            </div>
        )
    }
} */

// 拆分出小组件
/* class App extends React.Component{
    constructor(){
        super();
        this.state = {
            txt: 'this is the state txt'
        }
    }
    update(e){
        this.setState({
            txt: e.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.txt}</h1>
                <Widget update={this.update.bind(this)}/>
                <Widget update={this.update.bind(this)}/>
                <Widget update={this.update.bind(this)}/>
            </div>
        )
    }
}
const  Widget = (props) => 
    <input type="text" onChange={props.update}/>; */



// 嵌套组件和props.children   
/* class App extends React.Component{
    render(){
        return <Button>I <Heart/> React</Button>
    }
} 
const Button = (props) => <button>{props.children}</button>
class Heart extends React.Component{
    render(){
        return <span>&hearts;</span>
    }
} */


// 添加自定义propType验证
class App extends React.Component{
    render(){
        return <Title text="The Text"/>
    }
}
const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
    // text: React.PropTypes.string.isRequired
    text(props,propName,component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
    }
}


export default App







