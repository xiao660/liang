import React from "react";
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'
class App extends React.Component {
  state = {
    todos:
      [{ id: '001', name: '进士', done: true },
      { id: '002', name: '秀才', done: false },
      { id: '003', name: '举人', done: true },
      ]
  }
  // 添加todo对象
  addTodo = (todoObj) => {
    // console.log('App', todoObj);
    // 获取原todos
    const { todos } = this.state;
    // 追加
    // todos.push(todoObj);
    const newTodos = [todoObj, ...todos]
    // 更新
    this.setState({ todos: newTodos });
  }
  // updateTodo 用于更新一个todo对象
  updateTodo = (id, done) => {
    // 换取状态中的todos
    const { todos } = this.state
    // 匹配 处理加工数据
    const newTodos = todos.map((todoObj) => {
      // 如果值一样 返回 复制并修改done的值done：done  简写
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  // deleteTodo 用于删除一个todo对象
  deleteTodo = (id) => {
    // 换取原
    const { todos } = this.state
    // 删除指定的id
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }
  // 用于全选
  checkAllTodo = (done) => {
    // 换取原
    const { todos } = this.state
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done: done }
    })
    // 更新状态
    this.setState({ todos: newTodos })
  }
  // 清除完成的
  clearAllDone = () => {
    // 获取
    const { todos } = this.state
    // 过滤数据
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    // 更新
    this.setState({ todos: newTodos })
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>

      </div>
    )
  }
}


export default App;