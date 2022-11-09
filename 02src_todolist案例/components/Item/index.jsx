import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  state = { mouse: false }//标识鼠标移入移出
  // 鼠标移入移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }
  // 勾选回调
  heandleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 删除一个todo回调
  heandleDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
    // console.log(id); 
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#df7171' : 'white' }} onMouseOver={this.handleMouse(true)} onMouseOut={this.handleMouse(false)}>
        <label >
          <input type="checkbox" checked={done} onChange={this.heandleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => { this.heandleDelete(id) }} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
      </li>
    )
  }
}
