import React, { Component } from 'react'
import Item from '../../Action'
import {
  isElemVisibleHorizontally,
  isElemVisibleVertically
} from '../../../utils/isElemVisible'

export default class DropdownItem extends Component {
  componentDidMount() {
    const {
      element: { element: childElement },
      props: { alignDropdown, wrapper }
    } = this
    if (alignDropdown && childElement) {
      // Right, bottom
      const alignments = [
        !isElemVisibleHorizontally(childElement, wrapper),
        !isElemVisibleVertically(childElement, wrapper)
      ]
      alignDropdown(alignments)
    }
  }

  render() {
    const props = { ...this.props }
    delete props.alignDropdown
    delete props.wrapper

    return <Item ref={el => (this.element = el)} {...props} width={'100%'} />
  }
}
