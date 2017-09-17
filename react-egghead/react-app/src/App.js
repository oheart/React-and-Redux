import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

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
/* class App extends React.Component{
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
export default Wrapper */


// control React Component updates when new props are received
/* class App extends React.Component{
    constructor(){
        super();
        this.state = {increasing: false}
    }
    update(){
        ReactDOM.render(
            <App val={this.props.val + 1}/>,
            document.getElementById('root')
        )
    }
    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val})
    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.val % 5 === 0;
    }
    render(){
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        )
    }
    componentDidUpdate(prevProps,prevState){
        console.log(`prevProps: ${prevProps.val}`)
    }
}
App.defaultProps = {val: 0} */


// use map to Create React Components from Arrays of Data- search
/* class App extends React.Component{
    constructor(){
        super();
        this.state = {items:[]}
    }
    componentWillMount(){
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(({results: items}) => this.setState({items}))
    }
    filter(e){
        this.setState({filter: e.target.value})
    }
    render(){
        let items = this.state.items;
        if(this.state.filter){
            items = items.filter(
                item => 
                    item.name.toLowerCase()
                    .includes(this.state.filter.toLowerCase())
            )
        }
        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(item => 
                    <Person key={item.name} person={item} />)}
            </div>
        )
    }
}
const  Person = (props) => <h4>{props.person.name}</h4> */


// Compose React Component Behavior with Higher Order Components - 使用高阶组件
/* const HOC = (InnerComponent) => class extends React.Component{
    constructor(){
        super();
        this.state = {count:0}
    }
    update(){
        this.setState({count: this.state.count + 1})
    }
    componentWillMount(){
        console.log('will mount');
    }
    render(){
        return (
            <InnerComponent 
                {...this.props}
                {...this.state}
                update={this.update.bind(this)}
                />
        )
    }
}
class App extends React.Component{
    render(){
        return (
            <div>
                <Button>button</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}
const Button = HOC((props) => 
    <button onClick={props.update}>{props.children} - {props.count}</button>
)
class Label extends React.Component{
    componentWillMount(){
        console.log('label will mount');
    }
    render(){
        return(
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}
const LabelHOC = HOC(Label); */

// Build a JSX Live Compiler as a React Component  And Understand JSX at a Deeper Level
/* class App extends React.Component{
    constructor(){
        super();
        this.state = { 
            input:  "/*add your jsx here/",
            output: '',
            err: ''
        }
    }
    update(e){
        let code = e.target.value;
        try{
            this.setState({
                output: window.Babel
                .transform(code,{presets:['es2015','react']})
                .code,
                err:''
            })
        }catch(err){
            this.setState({err: err.message})
        }
    }
    render(){
        return(
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea 
                        onChange={this.update.bind(this)}
                        defaultValue={this.state.input}
                        />
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        )  
    }
}  */

// Understand React.Children Utilities
/* class App extends React.Component{
    render(){
        return (
            <Parent>
                <div className="childA"></div>
            </Parent>
        )
    }
}
class Parent extends React.Component{
    render(){
        // React.Children的map方法
        // console.log(React.Children)
        // console.log(this.props.children);
        // let items = React.Children.map(this.props.children,child => child);  

        // React.Children的forEach方法
        // let items = React.Children.forEach(this.props.children,child => console.log(child.props.className));
       
        // React.Children的toArray方法
        // let items = React.Children.toArray(this.props.children);

        // React.Children的only方法
        // let items = React.Children.only(this.props.children);
        
        console.log(items);
        return null;
    }
} */


// use React.cloneElement to Extend Functionality of Children Components
/* class App extends React.Component{
    render(){
        return (
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        )
    }
}
class Buttons extends React.Component{
    constructor(){
        super();
        this.state = {selected: 'None'}
    }
    selectItem(selected){
        this.setState({selected})
    }
    render(){
        console.log(React.Children);
        console.log(React.cloneElement);
        let fn = child =>
            React.cloneElement(child,{
                onClick: this.selectItem.bind(this,child.props.value)
            })
        let items = React.Children.map(this.props.children,fn);
        return (
            <div>
                <h2>You have Selected: {this.state.selected}</h2>
                {items}
            </div>
        )
    }
} */

// Write More Reusable React Components with  Composable APIs
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 0
        }
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
        })
    }
    render(){
        return (
            <div>
                <NumInput 
                    ref="red" 
                    min={0}
                    max={255}
                    step={1}
                    val={+this.state.red}
                    label="Red"
                    type="range"
                    update={this.update}/>
                {this.state.red}
            </div>
        )
    }
}
class NumInput extends React.Component{
    render(){
        let label = this.props.lable !== '' ? <label>{this.props.label} - {this.props.val}</label> : ''
        return (
            <div>
                <input ref="inp" 
                    type={this.props.type}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    defaultValue={this.props.val}
                    onChange={this.props.update} />
                    {label}
            </div>
        )
    }
}

NumInput.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    step: React.PropTypes.number,
    val: React.PropTypes.number,
    label: React.PropTypes.string,
    update: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['number','range'])
}
NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type:'range'
}


export default App







