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
  disabled: {
    cursor: 'default'
  },
  img: (width, height) => ({
    verticalAlign: 'middle',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fill: 'currentColor',
    color: 'inherit !important',
    height: height,
    width: width
  }),
  span: (iconWidth, hasSibling, flip) => ({
    textAlign: 'left',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    display: 'inline-block',
    paddingLeft: hasSibling && !flip ? 6 : 0,
    paddingRight: hasSibling && flip ? 6 : 0,
    width: `calc(100% - ${hasSibling ? iconWidth : 0}px)`,
    fontFamily: 'system-ui, sans-serif',
    textDecoration: 'none'
  }),
  verticalAlignmentHelper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle'
  }
}
