import React from 'react';
import ReactDOM from 'react-dom';

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
/* class App extends React.Component{
    render(){
        return <Title text="123456"/>
    }
}
const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
    // text: React.PropTypes.string.isRequired
    text(props,propName,component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`)
        }
    }
} */


// Normalize Events with Reacts Synthetic Event System
/*class App extends  React.Component{
    constructor(){
        super();
        this.state = {currentEvent: '---'}
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            currentEvent: e.type
        })
    }
    render(){
        return (
            <div>
                <textarea
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10" />
                <h1>{this.state.currentEvent}</h1>
           </div>
        )
        
    }
} */


// use ref
/* class App extends React.Component{
    constructor(){
        super();
        this.state = {a:''}
    }
    update(e){
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }
    render(){
        return (
            <div>
                <Input 
                    ref={component => this.a = component}
                    update={this.update.bind(this)}/>
                {this.state.a}
                <hr/>
                <input type="text"
                    ref="b"
                    onChange={this.update.bind(this)}
                    />
                {this.state.b}
            </div>
        )
    }
}
class Input extends React.Component{
    render(){
        return <div><input ref="input" type="text" onChange={this.props.update}/></div>
    }
} */

//  React Component Lifecycle
class App extends React.Component{
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log('componentWillMount');
        this.setState({m: 2})
    }
    render(){
        console.log('render');
        return <button onClick={this.update}>
                    {this.state.val * this.state.m}
               </button>
    }
    componentDidMount(){
        console.log('componentDidMout');
        console.log(ReactDOM.findDOMNode(this))
        this.inc = setInterval(this.update,500)
    }
    componentWillUnmount(){
        console.log('componentWillUnmout');
        clearInterval(this.inc)
    }
}
class Wrapper extends React.Component{
    mount(){
        ReactDOM.render(<App />,document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}
export default Wrapper

// export default App







