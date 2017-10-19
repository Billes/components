import React from 'react'
import { Action } from '@billes/components'

const ActionExample = ({ items }) => (
  <header className="flexbox">
    <h1>Component &quot;Action&quot;</h1>
    <h2>Multiple elements</h2>
    <div>{items.map(actionView)}</div>
    <h2>Single element</h2>
    <div>
      <Action {...items[0]} />
    </div>
    <h2>Multiple elements, right justification</h2>
    <div className="right">{items.map(actionView)}</div>
  </header>
)

const actionView = (item, index) => <Action key={index} {...item} />

export default ActionExample
