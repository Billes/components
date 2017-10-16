import React, { Component } from 'react'
import Item from 'components/Item'

const s = {
  dropdown: {
    position: 'relative',
    maxWidth: '100%',
    outline: 0
  },
  list: {
    position: 'absolute',
    boxShadow:
      '0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)',
    minWidth: '100%',
    zIndex: 1000
  }
}

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.showList = this.showList.bind(this)
    this.hideList = this.hideList.bind(this)
  }

  showList() {
    this.setState({ show: true })
  }

  hideList(e = false) {
    const target = e.currentTarget

    setTimeout(() => {
      if (!e || !target.contains(document.activeElement))
        this.setState({ show: false })
    }, 0)
  }

  render() {
    const { icon, name, items } = this.props
    const { show } = this.state

    return (
      <div tabIndex={0} style={style.dropdown} onBlur={this.hideList}>
        <Item name={name} icon={icon} action={this.showList} />
        {show ? getList(items, this.hideList) : null}
      </div>
    )
  }
}

const getList = (items, hideList) => {
  return (
    <div style={style.list}>
      {items.map((item, index) => {
        const action = item.action
        if (typeof action !== 'undefined')
          item.action = () => {
            hideList()
            action()
          }
        return <Item key={index} {...item} />
      })}
    </div>
  )
}

export default DropDown
