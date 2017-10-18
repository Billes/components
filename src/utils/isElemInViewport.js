export const isElemInViewportHorizontally = el => {
  const rect = el.getBoundingClientRect()
  return (
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export const isElemInViewportVertically = el => {
  const rect = el.getBoundingClientRect()
  return (
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  )
}
