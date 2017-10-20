export const isElemVisibleHorizontally = (el, wrapper) =>
  isElemVisible(
    el,
    'right',
    wrapper,
    window.innerWidth || document.documentElement.clientWidth
  )

export const isElemVisibleVertically = (el, wrapper) =>
  isElemVisible(
    el,
    'bottom',
    wrapper,
    window.innerHeight || document.documentElement.clientHeight
  )

const isElemVisible = (el, direction, wrapper = false, condition) => {
  const dir = el.getBoundingClientRect()[direction]

  const honourCondition = wrapper
    ? dir <= document.getElementById(wrapper).getBoundingClientRect()[direction]
    : true

  return dir <= condition && honourCondition
}
