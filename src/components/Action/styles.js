export default {
  item: (width = 'auto', chevron, flip) => ({
    boxSizing: 'border-box',
    background: '#fff',
    color: '#6e6e6e',
    border: 0,
    fontSize: 12,
    fontWeight: '400',
    padding: `${chevron && !flip
      ? '0 4px 0 16px'
      : chevron && flip ? '0 16px 0 5px' : '0 16px'}`,
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
  span: (iconWidth, hasSibling, flip, chevron) => {
    const width =
      hasSibling && chevron
        ? iconWidth * 2
        : hasSibling || chevron ? iconWidth : 0

    console.log(width)
    const paddingLeft =
      hasSibling && chevron
        ? 6
        : hasSibling && !flip ? 6 : chevron && flip ? 6 : 0
    const paddingRight =
      hasSibling && chevron
        ? 6
        : hasSibling && flip ? 6 : chevron && !flip ? 6 : 0

    return {
      textAlign: 'left',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
      display: 'inline-block',
      paddingLeft,
      paddingRight,
      width: `calc(100% - ${width}px)`,
      fontFamily: 'system-ui, sans-serif',
      textDecoration: 'none'
    }
  },
  verticalAlignmentHelper: {
    display: 'inline-block',
    height: '100%',
    verticalAlign: 'middle'
  }
}
