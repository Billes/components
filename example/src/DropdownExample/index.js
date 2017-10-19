import React from 'react'
import { Dropdown } from '@billes/components'

const DropdownExample = props => (
  <header className="flexbox">
    <h1>Component &quot;Dropdown&quot;</h1>
    <h2>Multiple elements</h2>
    <div>{dropdownViews(4, props)}</div>
    <h2>Single element</h2>
    <div>
      <Dropdown {...props} />
    </div>
    <h2>Multiple elements, right justification</h2>
    <div className="right">{dropdownViews(3, props)}</div>
  </header>
)

const dropdownViews = (count, props, views = []) => {
  if (!count) return views

  return dropdownViews(count - 1, props, [
    ...views,
    <Dropdown key={views.length} {...props} />
  ])
}

export default DropdownExample
