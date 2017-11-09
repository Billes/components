import React, { Component, createElement } from 'react'
import s from './styles'

const getIcon = icon => {
  if (icon) {
    if (typeof icon === 'string' || icon instanceof String)
      return <img style={s.img} src={icon} alt={''} />
    else {
      const image = findUnderlyingImage(icon)
      if (image) {
        return createElement(image.type, { style: s.img }, image.props.children)
      }
    }
  }
  return null
}

const findUnderlyingInChildrenRec = ([child, ...children]) => {
  if (child === undefined) return false

  return findUnderlyingImage(child) || findUnderlyingInChildrenRec(children)
}

// Searching for something to display in passed element
const findUnderlyingImage = (icon = {}) => {
  if (icon.type === 'svg' || icon.type === 'img') {
    // If a display element is found
    return icon
  } else if (typeof icon.type === 'string') {
    // if underlying is a dom-element
    return findUnderlyingInChildrenRec(
      React.Children.toArray(icon.props.children)
    )
  } else if (!icon.type.prototype.render && typeof icon.type === 'function') {
    // if it is stateless
    return findUnderlyingImage(icon.type(icon.props)) // Calling types instantiates it so we can look for more
  } else if (typeof icon.type !== 'string' && icon.type.prototype.render) {
    console.error(
      `@Billes/components: Cannot read underlying implementation of ${icon.type
        .name} because it is an instance of "React.Component". Please use stateless components instead.`
    )
  }

  return false
}

const getText = (label, name) => {
  if (label) return label
  else if (name) {
    console.warn(
      '@Billes/components: Property "name" is deprecated. Please use "label" instead.'
    )
    return name
  }

  return ''
}

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }

    this.hovered = this.setHover.bind(this)
    this.unhovered = this.setHover.bind(this, false)
  }

  setHover(isHovered) {
    this.setState(() => ({ hover: isHovered }))
  }

  render() {
    const {
      action,
      icon = null,
      link = null,
      name,
      label,
      disabled = false,
      width = 'auto'
    } = this.props

    const buttonStyle = {
      ...s.item(width),
      ...(this.state.hover && !disabled ? s.itemHover : {}),
      ...(disabled ? s.disabled : {})
    }

    const item = (
      <button
        ref={el => (this.element = el)}
        href={link}
        onClick={action && !disabled ? () => action() : null}
        style={buttonStyle}
        onMouseEnter={this.hovered}
        onMouseLeave={this.unhovered}
      >
        <span style={s.verticalAlignmentHelper} />
        {getIcon(icon)}
        <span style={s.span}>{getText(label, name)}</span>
      </button>
    )

    if (link) return <a {...item.props} />

    return item
  }
}
