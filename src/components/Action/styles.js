export default {
  item: (width = 'auto') => ({
    boxSizing: 'border-box',
    background: '#fff',
    color: 'rgba(0,0,0,0.57)',
    border: 0,
    fontSize: 12,
    fontWeight: '400',
    padding: '0px 16px',
    width: width,
    textAlign: 'left',
    display: 'block',
    whiteSpace: 'nowrap',
    height: 30,
    outline: 'none',
    transition: 'all 100ms cubic-bezier(.55,0,.55,.2)',
    cursor: 'pointer',
    borderRadius: 0
  }),
  itemHover: {
    background: '#E2E2E2'
  },
  disabled: {
    opacity: '0.4',
    cursor: 'default'
  },
  img: {
    verticalAlign: 'middle',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fill: 'currentColor',
    color: 'inherit !important',
    marginRight: 6,
    height: 24,
    width: 24
  },
  span: {
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    display: 'inline-block',
    fontFamily: 'system-ui, sans-serif',
    textDecoration: 'none'
  },
  verticalAlignmentHelper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle'
  }
}
