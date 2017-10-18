import React, { Component } from 'react'
import './App.css'
import { Dropdown } from 'billes'

const Icon = () => (
  <svg>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z" />
  </svg>
)

const Icon2 = () => <Icon />

const Icon3 = () => <Icon2 />

const props = {
  items: [
    {
      name: 'Stateless Icon',
      icon: <Icon />
    },
    {
      name: 'Stateless parent Icon',
      icon: <Icon2 />
    },
    {
      name: 'Stateless parent Icon',
      icon: <Icon3 />
    }
  ],
  name: 'Dropdown'
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="flexbox">
          <h1>With flexbox alignment</h1>
          <h2>Multiple elements</h2>
          <div>
            <Dropdown {...props} />
            <Dropdown {...props} />
            <Dropdown {...props} />
          </div>
          <h2>Multiple elements, right justification</h2>
          <div className="right">
            <Dropdown {...props} />
            <Dropdown {...props} />
            <Dropdown {...props} />
          </div>
          <h2>Single element</h2>
          <div>
            <Dropdown {...props} />
          </div>
          <h2>Single element, right justification</h2>
          <div className="right">
            <Dropdown {...props} />
          </div>
        </header>
        <header className="inlineBlock">
          <h1>With inline-block alignment</h1>
          <h2>Multiple elements</h2>
          <div>
            <Dropdown {...props} />
            <Dropdown {...props} />
            <Dropdown {...props} />
          </div>
          <h2>Multiple elements, right justification</h2>
          <div className="right">
            <Dropdown {...props} />
            <Dropdown {...props} />
            <Dropdown {...props} />
          </div>
          <h2>Single element</h2>
          <div>
            <Dropdown {...props} />
          </div>
          <h2>Single element, right justification</h2>
          <div className="right">
            <Dropdown {...props} />
          </div>
        </header>
      </div>
    )
  }
}

export default App
