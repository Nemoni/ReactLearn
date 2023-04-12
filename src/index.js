import React from "react";
import ReactDOM from "react-dom/client";

// 类组件
class HelloMessage extends React.Component {
  handleClick() {
    console.log("点击了类组件中");
  }
  handleAClick(e) {
    e.preventDefault();
    console.log("点击了链接标签");
  }
  render() {
    return (
      <div>
        <p>hello {this.props.message}</p>
        <button onClick={() => this.handleClick()}>点击</button>
        <a href="www.baidu.com" onClick={this.handleAClick}>
          链接
        </a>
      </div>
    );
  }
}
// 函数组件
function FuncComponent(p) {
  function handleClick() {
    console.log("点击了");
  }
  return (
    <div>
      <h1>I'm function Component, received: {p.msg}</h1>
      <button onClick={handleClick}>点我</button>
    </div>
  );
}
// 箭头函数组件
const ArrowFuncComponent = (props) => (
  <h1>Arrow function to create component, received: {props.message}</h1>
);
// state setState
class IncNum extends React.Component {
  state = {
    count: 0,
  };
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  handleClick2 = ()=>{
    this.setState(prevState=>({count:prevState.count+1})); // state的值有可能变化，使用此处的方法更好
  }
  render() {
    return (
      <div>
        <p>count:{this.state.count}</p>
        {/* 在这里解决this指针问题 */}
        <button onClick={() => this.handleClick()}>+1</button> 
        {/* 在函数定义处解决this指针问题 */}
        <button onClick={this.handleClick2}>+1(方式2)</button> 
      </div>
    );
  }
}
// 受控组件（让html组件受react控制）
class BeControled extends React.Component{
  state = {
    text: ""
  };
  handleInputChange = e=>{
    this.setState({text:e.target.value});
    console.log(e.target.value);
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleInputChange}></input>
      </div>
    );
  }
}
// 所有的组件都放到Board上
class Board extends React.Component {
  render() {
    return (
      <div>
        {/* 不可见组件 */}
        <div style={{ display: "none" }}>
          <HelloMessage message="baby" />
          <FuncComponent msg="good" />
          <ArrowFuncComponent message="arrow" />
        </div>
        {/* 正常显示的组件 */}
        <div>
          <IncNum />
          <BeControled />
        </div>
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
