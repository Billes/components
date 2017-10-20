import React from 'react'
import { Dropdown } from '@billes/components'

const DropdownExample = props => (
  <header
    className="flexbox"
    style={{ backgroundColor: 'rgb(48, 48, 48)', color: '#fff' }}
  >
    <h1>Component &quot;Dropdown&quot;</h1>
    <h2>Multiple elements</h2>
    <div>{dropdownViews(4, props)}</div>
    <h2>Single element</h2>
    <div>
      <Dropdown {...props} />
    </div>
    <h2>Multiple elements, right justification</h2>
    <div className="right">{dropdownViews(3, props)}</div>
    <h2>Multiple disabled elements</h2>
    <div>{dropdownViews(2, { ...props, disabled: true })}</div>
    <h2>Honouring chosen elements border</h2>
    <div
      id="honour-me"
      style={{
        border: '4px solid rgb(190, 190,190)',
        padding: 10,
        width: 280,
        height: 140,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}
    >
      {dropdownViews(2, { ...props, wrapper: 'honour-me' })}
    </div>
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
