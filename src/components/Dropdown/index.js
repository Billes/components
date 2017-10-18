import React, { Component } from 'react'
import Item from './Item'
import s from './styles'

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fold: {
        left: false,
        top: false
      },
      show: false
    }

    this.showList = this.showList.bind(this)
    this.hideList = this.hideList.bind(this)
    this.alignDropdown = this.alignDropdown.bind(this)
  }

  showList() {
    this.setState(() => ({ show: true }))
  }

  hideList(e = false) {
    const target = e.currentTarget

    setTimeout(() => {
      if (!e || !target.contains(document.activeElement))
        //resetState
        this.setState(() => ({
          fold: {
            left: false,
            top: false
          },
          show: false
        }))
    }, 0)
  }

  alignDropdown([horizontal, vertical]) {
    this.setState(() => ({
      fold: {
        left: horizontal,
        top: vertical
      }
    }))
  }

  render() {
    const { icon, name, items } = this.props
    const { show } = this.state

    return (
      <div tabIndex={0} style={s.dropdown} onBlur={this.hideList}>
        <Item name={name} icon={icon} action={this.showList} />
        {show
          ? getList(this.state, items, this.hideList, this.alignDropdown)
          : null}
      </div>
    )
  }
}

const getList = ({ fold }, items, hideList, alignDropdown) => {
  const style = {
    ...s.list,
    ...(fold.left ? s.justifyRight : {}),
    ...(fold.top ? s.valignTop : {})
  }

  return (
    <div style={style}>
      {items.map((item, index) => {
        const action = item.action
        if (typeof action !== 'undefined')
          item.action = () => {
            hideList()
            action()
          }
        item.alignDropdown = alignDropdown
        return <Item key={index} {...item} />
      })}
    </div>
  )
}

export default DropDown
