import React from 'react'

const alertView = (id, alert) => (
  <div
    key={id}
    style={{
      padding: '10px 25px',
      marginBottom: 5,
      background: '#fff',
      transition: 'opacity 1000ms',
      opacity: alert.opacity
    }}
  >
    <p>You clicked on an action</p>
  </div>
)

const Alerts = ({ alerts }) => {
  return (
    <div style={{ position: 'absolute', top: 5, left: 5 }}>
      {Object.entries(alerts).map(([id, alert]) => alertView(id, alert))}
    </div>
  )
}

export default Alerts
