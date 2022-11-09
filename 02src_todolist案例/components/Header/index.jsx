import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'
export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  heandlekeyUp = (event) => {
    // 换取结构赋值keyCode, target
    const { keyCode, target } = event
    // 判断回车
    if (keyCode !== 13) return
    // 不能为空
    if (target.value.trim() === '') {
      alert('不能为空')
      return
    }
    // 准备todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
    // 清空
    target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.heandlekeyUp} type="text" placeholder="  请输入你的，暗黑驱动确定" />
      </div>
    )
  }
}
