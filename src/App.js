// 创建‘外壳’组件a
import React from "react";
import axios from 'axios'
class App extends React.Component {
  getStuden = () => {
    axios.get('').then(
      response => { },
      error => { }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStuden}>点击</button>
      </div>
    )
  }
}
// 暴露APP到页面
export default App
