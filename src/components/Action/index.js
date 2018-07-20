import React, { Component, createElement } from 'react'
import darkenColor from '../../utils/darkenColor.js'
import s from './styles'

const stdIconSide = 24

const Icon = ({ icon, width, height }) => {
  const style = s.img(width, height)
  if (icon) {
    if (typeof icon === 'string' || icon instanceof String)
      return <img style={style} src={icon} alt={''} />
    else {
      const image = findUnderlyingImage(icon)
      if (image) {
        return createElement(
          image.type,
          {
            style,
            ...(image.props.viewBox ? { viewBox: image.props.viewBox } : {})
          },
          image.props.children
        )
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
      `@Billes/components: Cannot read underlying implementation of ${
        icon.type.name
      } because it is an instance of "React.Component". Please use stateless components instead.`
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
      width = 'auto',
      flip = false,
      target = '_self',
      style = {}
    } = this.props

    const rawButtonStyle = {
      ...s.item(width),
      ...style
    }

    const buttonStyle = {
      ...rawButtonStyle,
      ...(this.state.hover && !disabled
        ? { background: darkenColor(rawButtonStyle.background, -25) }
        : {}),
      ...(disabled
        ? { ...s.disabled, color: darkenColor(rawButtonStyle.color, 90) }
        : {})
    }

    const iconComponent = icon ? icon.component || icon : null
    const iconWidth = icon && icon.width ? icon.width : stdIconSide
    const iconHeight = style.height < 24 ? style.height : stdIconSide

    const content = [
      <Icon
        key={'icon'}
        icon={iconComponent}
        width={iconWidth}
        height={iconHeight}
      />,
      <span key={'text'} style={s.span(iconWidth, icon, flip)}>
        {getText(label, name)}
      </span>
    ]

    const item = (
      <button
        ref={el => (this.element = el)}
        href={link}
        target={target}
        onClick={
          action && !disabled
            ? e => {
                e.preventDefault()
                action()
              }
            : null
        }
        style={buttonStyle}
        onMouseEnter={this.hovered}
        onMouseLeave={this.unhovered}>
        <span style={s.verticalAlignmentHelper} />
        {flip ? content.reverse() : content}
      </button>
    )

    if (link) return <a {...item.props} />

    return item
  }
}
