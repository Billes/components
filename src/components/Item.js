import React, { Component, cloneElement } from 'react'

const s = {
  item: {
    boxSizing: 'border-box',
    background: '#fff',
    color: 'rgba(0,0,0,0.57)',
    border: 0,
    fontSize: 12,
    fontWeight: '400',
    padding: '7px 16px',
    minWidth: 'inherit',
    textAlign: 'left',
    display: 'block',
    whiteSpace: 'nowrap',
    height: 30,
    outline: 'none',
    transition: 'all 100ms cubic-bezier(.55,0,.55,.2)'
  },
  itemHover: {
    background: '#E2E2E2'
  },
  svg: {
    verticalAlign: 'middle',
    display: 'inline-block',

    color: 'inherit !important',
    marginRight: 6,
    minHeight: '24px',
    minWidth: '24px'
  },
  img: {
    verticalAlign: 'middle',
    display: 'inline-block',

    color: 'inherit !important',
    marginRight: 6,
    height: 24,
    width: 24
  },
  span: {
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    display: 'inline-block'
  },
  verticalAlignmentHelper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle'
  }
}

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }

    this.hovered = this.toggleHover.bind(this, true)
    this.unhovered = this.toggleHover.bind(this, false)
  }

  toggleHover(isHovered) {
    this.setState({ hover: isHovered })
  }

  render() {
    let { action, icon = null, link = null, name } = this.props
    // If not a string (image-reference), assume component
    if (typeof icon === 'string' || icon instanceof String)
      icon = <img style={style.img} src={icon} alt={''} />

    if (!icon) icon = <span style={style.verticalAlignmentHelper} />
    else icon = cloneElement(icon, { style: style.img })

    const item = (
      <button
        href={link}
        onClick={action ? () => action() : null}
        style={Object.assign(
          {},
          style.item,
          this.state.hover && style.itemHover
        )}
        onMouseEnter={this.hovered}
        onMouseLeave={this.unhovered}
      >
        {icon}
        <span style={style.span}>{name}</span>
      </button>
    )

    if (link) return <a {...item.props} />

    return item
  }
}