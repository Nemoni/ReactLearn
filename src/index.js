import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

class First extends React.Component{
  render(){
    return (
      <div>
        <p>这是First组件</p>
      </div>
    )
  }
}

function Second(){
  return (
    <div>
      <p>这是Second组件</p>
    </div>
  )
}

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <h1>路由专题</h1>
          <Link to="/First">页面一 </Link>
          <Link to="/Second">页面二</Link>
          <Routes>
            <Route path="/First" Component={First}></Route>
            <Route path="/Second" Component={Second} />
          </Routes>
        </div>
      </Router>
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
