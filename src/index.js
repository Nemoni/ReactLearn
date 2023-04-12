import React from "react";
import ReactDOM from "react-dom/client";
import img from "./images/pig.png"

// render props模式
// 获取鼠标位置的组件
class Mouse extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      x:0,
      y:0,
    };
  }
  // 鼠标位置更新的时候更新state中的鼠标位置
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }
  // 注册鼠标移动事件
  componentDidMount(){
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  // 解绑事件
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  render(){
    return this.props.render(this.state);
  }
}

class App extends React.Component{
  displayInMouse = (mouse) => {
    return <p>鼠标位置 x:{mouse.x}, y:{mouse.y}</p> 
  }
  render(){
    return (
      <div>
        <Mouse render={this.displayInMouse} />
        <Mouse render={(mouse)=>{
          return <img src={img} alt="pig" style={{
            position:"absolute",
            top:mouse.y-100,
            left:mouse.x-100,
          }} />
        }} />
      </div>

    )
  }
}

// 所有的组件都放到Board上
class Board extends React.Component {
  render() {
    return (
      <div>
        {/* 不可见组件 */}
        <div style={{ display: "none" }}>

        </div>
        {/* 正常显示的组件 */}
        <div>
          <App></App>
        </div>
      </div>
    );
  }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
