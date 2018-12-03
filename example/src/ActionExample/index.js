import React from 'react'
import { Action } from '@billes/components'
import { Icon } from 'src/Icons/Icon'

const withLink = {
  label: 'Stateless Icon',
  icon: <Icon />,
  link: 'https://www.npmjs.com/package/@billes/components'
}

const styled = [
  {
    label: 'H: 15px, blue',
    icon: <Icon />,
    style: { background: '#00b3ff', color: '#000', height: 30 }
  },
  {
    label: 'H: auto, green',
    chevron: true,
    style: { background: '#4fff65', color: '#000', height: 'auto' }
  },
  {
    label: 'H: 100%, yellow',
    chevron: true,
    flip: true,
    style: { background: '#fbff00', color: '#000', height: '100%' }
  },
  {
    label: 'Link, H: 15px, hex darkblue',
    icon: <Icon />,
    link: 'https://www.npmjs.com/package/@billes/components',
    style: { background: '#004765', color: '#fff', height: 30 }
  },
  {
    label: 'Link, H: auto, rgba darkgreen',
    icon: <Icon />,
    link: 'https://www.npmjs.com/package/@billes/components',
    style: { background: 'rgba(0, 101, 22, 1)', color: '#fff', height: 'auto' }
  },
  {
    label: 'Link, H: 100%, rgb darkyellow',
    icon: <Icon />,
    link: 'https://www.npmjs.com/package/@billes/components',
    style: { background: 'rgb(95, 101, 0)', color: '#fff', height: '100%' }
  }
]

const ActionExample = ({ items }) => (
  <header
    className="flexbox"
    style={{ backgroundColor: 'rgb(34, 34, 34)', color: '#fff' }}
  >
    <h1>Component &quot;Action&quot;</h1>
    <h2>Multiple elements</h2>
    <div>{items.map(actionView)}</div>
    <h2>Styled Elements</h2>
    <div>{styled.map(actionView)}</div>
    <h2>Single element, Disabled</h2>
    <div>
      <Action {...items[0]} disabled={true} />
      <Action {...withLink} disabled={true} />
      <Action {...styled[0]} disabled={true} />
      <Action {...styled[3]} disabled={true} />
      <Action {...styled[4]} disabled={true} />
    </div>
    <h2>Using link instead of action</h2>
    <div>
      <Action {...withLink} />
    </div>
    <h2>But if action exists, prevent link</h2>
    <div>
      <Action {...{ ...items[0], ...withLink }} />
    </div>
    <h2>Open link in _blank target</h2>
    <div>
      <Action {...withLink} target={'_blank'} />
    </div>
  </header>
)

const actionView = (item, index) => <Action key={index} {...item} />

export default ActionExample
