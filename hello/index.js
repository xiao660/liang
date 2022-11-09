// 引入react核心库
import React from 'react';
// 引入ReactDOM 在 React 18 中，render 函数已被 createRoot 函数所取代。
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client';  // 修改后的引入路径
// 引入APP组件
import App from './App'
// 渲染APP到页面
// ReactDOM.render(<App />, document.getElementById('root'))

// 修改后的ReactDom方法
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);