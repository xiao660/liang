import React, { Component } from 'react'
import './index.css'
export default class Footr extends Component {
  // 全选回调
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked)
  }
  // 清除所有完成的
  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 已完成 
    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
    // 和总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label >
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>已完成{doneCount}</span> /全部{total}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">删除全部已完成</button>
      </div>
    )
  }
}
