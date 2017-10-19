import React, { Component } from 'react'
import 'src/App.css'
import { randomString } from 'src/utils'
import Alerts from 'src/Alerts'
import ActionExample from 'src/ActionExample'
import DropdownExample from 'src/DropdownExample'
import { NestedIconEdgeCase } from 'src/Icons/IconEdgeCase'
import { Icon, NestedIcon2 } from 'src/Icons/Icon'

const props = action => ({
  items: [
    {
      label: 'what?',
      icon: <Icon />,
      action,
      disabled: true
    },
    {
      label: 'Stateless Nested Icon',
      icon: <NestedIcon2 />,
      action
    },
    {
      label: 'Stateless Nested Edgecase',
      icon: <NestedIconEdgeCase />,
      action
    }
  ],
  label: 'Dropdown'
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      alerts: {}
    }
  }

  setOpacityOnAlert(id, opacity) {
    this.setState(state => {
      const alerts = { ...state.alerts }
      alerts[id] = {
        opacity: opacity
      }
      return { alerts: alerts }
    })
  }

  triggerAlert() {
    const id = randomString(8)
    this.setOpacityOnAlert(id, 0)

    // fade in
    setTimeout(() => this.setOpacityOnAlert(id, 1), 10)
    // fade out
    setTimeout(() => this.setOpacityOnAlert(id, 0), 4000)
    // remove
    setTimeout(() => {
      this.setState(state => {
        const alerts = { ...state.alerts }
        delete alerts[id]
        return { alerts: alerts }
      })
    }, 5000)
  }

  render() {
    const { state } = this
    const action = this.triggerAlert.bind(this)

    return (
      <div className="App">
        <Alerts alerts={state.alerts} />
        <ActionExample {...props(action)} />
        <DropdownExample {...props(action)} />
      </div>
    )
  }
}

export default App
