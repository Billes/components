# Billes Components
## Install
```
yarn add @billes/components
```
## Action
```
 <Action icon={ <ReactComponent /> } label={ 'Some label' } action={() => { console.log('hello world')}}>
```
```
{
    action = null // fn to be called on click,
    disabled = false // unable to use action and hovering is off
    icon = null, // An object, component or a string that would be used as img-src
    link = null, // Shows as link in statusfield, converts from button to a
    label // Label to be displayed
    style = {} // Custom styling of action. caveats: background must be hex
    flip = false // puts the icon on the right side with label still aligned to the left 
}
```
### Icon object passed to action
```
icon: {
    component: <Component />,
    width: 40 // integer for setting a custom width. Height is locked to 24px or less depending on main style
}
```
## Dropdown
Dropdown is basically an elaborate collection of \<Action />.
The dropdown button itself is converted to \<Action /> with a custom action that displays items. The items will convert to a list of \<Action>.
The dropdown will expand left or up if it will render outside of viewport
#### NOTE: items array does not take the \<Action /> (the react-component) as a valid item
```
 <Dropdown icon={ <ReactComponent /> } name={ 'Label' } items={ items } />
```
```
disabled = false // unable to use action and hovering is off
icon // A component or a string that would be used as img-src
items: [
  {
    action = null // fn to be called on click,
    disabled = false // unable to use action and hovering is off
    icon = null, // A component or a string that would be used as img-src
    link = null, // Shows as link in statusfield, converts from button to a
    label // Label to be displayed
    style = {} // Custom styling of action. caveats: background must be hex
    flip = false // puts the icon on the right side with label still aligned to the left 
  }
],
label // Label to be displayed
style = {} // Custom styling of action
flip = false // puts the icon on the right side with label still aligned to the left 
wrapper = false // It can expand up or left based on a wrapper as well as a window. Wants an id of an element (no pound/hash sign)
chevron = false // if you want to display chevron or not 
```
