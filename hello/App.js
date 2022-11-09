// 创建‘外壳’组件a
import React from "react";
import Hllo from './component/Hllo'
class App extends React.Component {
  render() {
    return (
      <div><Hllo />
      </div>
    )
  }
}
// 暴露APP到页面
export default App
