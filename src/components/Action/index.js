import React, { Component, cloneElement } from 'react'
import s from './styles'

const getIcon = icon => {
  if (icon) {
    if (typeof icon === 'string' || icon instanceof String)
      return <img style={s.img} src={icon} alt={''} />
    else {
      const image = findUnderlyingImage(icon)
      if (image) {
        return image
      }
    }
  }
  return <span style={s.verticalAlignmentHelper} />
}

const findUnderlyingInChildrenRec = ([child, ...children]) => {
  if (child === undefined) return false

  return findUnderlyingImage(child) || findUnderlyingInChildrenRec(children)
}

// Searching for something to display in passed element
const findUnderlyingImage = (icon = {}) => {
  if (icon.type === 'svg' || icon.type === 'img') {
    // If a display element is found
    return cloneElement(icon, { style: s.img })
  } else if (typeof icon.type === 'string') {
    // if underlying is a dom-element
    return findUnderlyingInChildrenRec(
      React.Children.toArray(icon.props.children)
    )
  } else if (!icon.type.prototype.render && typeof icon.type === 'function') {
    // if it is stateless
    return findUnderlyingImage(icon.type()) // Calling types instantiates it so we can look for more
  } else if (typeof icon.type !== 'string' && icon.type.prototype.render) {
    console.error(
      `Billes: Cannot read underlying implementation of ${icon.type
        .name} because it is an instance of "React.Component". Please use stateless components instead.`
    )
  }

  return false
}

export default class Item extends Component {
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
    const { action, icon = null, link = null, name } = this.props
    // If not a string (image-reference), assume component

    const buttonStyle = {
      ...s.item,
      ...(this.state.hover ? s.itemHover : {})
    }

    const item = (
      <button
        ref={el => (this.element = el)}
        href={link}
        onClick={action ? () => action() : null}
        style={buttonStyle}
        onMouseEnter={this.hovered}
        onMouseLeave={this.unhovered}
      >
        {getIcon(icon)}
        <span style={s.span}>{name}</span>
      </button>
    )

    if (link) return <a {...item.props}> </a>

    return item
  }
}