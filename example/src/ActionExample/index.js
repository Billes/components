import React from 'react'
import { Action } from '@billes/components'
import { Icon } from 'src/Icons/Icon'

const withLink = {
  label: 'Stateless Icon',
  icon: <Icon />,
  link: 'https://www.npmjs.com/package/@billes/components'
}

const ActionExample = ({ items }) => (
  <header
    className="flexbox"
    style={{ backgroundColor: 'rgb(34, 34, 34)', color: '#fff' }}
  >
    <h1>Component &quot;Action&quot;</h1>
    <h2>Multiple elements</h2>
    <div>{items.map(actionView)}</div>
    <h2>Single element, Disabled</h2>
    <div>
      <Action {...items[0]} disabled={true} />
    </div>
    <h2>Using link instead of action</h2>
    <div>
      <Action {...withLink} />
    </div>
  </header>
)

const actionView = (item, index) => <Action key={index} {...item} />

export default ActionExample
