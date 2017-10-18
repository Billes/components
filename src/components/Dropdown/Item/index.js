import React, { Component } from 'react'
import Item from '../../Action'
import {
  isElemInViewportHorizontally,
  isElemInViewportVertically
} from '../../../utils/isElemInViewport'

export default class DropdownItem extends Component {
  componentDidMount() {
    const {
      element: { element: childElement },
      props: { alignDropdown }
    } = this
    if (alignDropdown && childElement) {
      // Right, bottom
      const alignments = [
        !isElemInViewportHorizontally(childElement),
        !isElemInViewportVertically(childElement)
      ]
      alignDropdown(alignments)
    }
  }

  render() {
    const props = { ...this.props }
    delete props.alignDropdown

    return <Item ref={el => (this.element = el)} {...this.props} />
  }
}
