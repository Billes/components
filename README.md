# Billes Components
## Action
```
 <Action icon={ <ReactComponent /> } label={ 'Some label' } action={() => { console.log('hello world')}}>
```
```
{
    action = null // fn to be called on click,
    disabled = false // unable to use action and hovering is off
    icon = null, // A component or a string that would be used as img-src
    link = null, // Shows as link in statusfield, converts from button to a
    label // Label to be displayed
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
  }
],
label // Label to be displayed
wrapper = false // It can expand up or left based on a wrapper as well as a window. Wants an id of an element (no pound/hash sign)
```