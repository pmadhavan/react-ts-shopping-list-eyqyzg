# react-ts-shopping-list-eyqyzg

### Summary

This is a small react challenge that implements a shopping list application. The app allows user to search as they type for a list of items fetched from a fake API. On selecting an item from list the item is added to the list with checkboxes and delete button enabling modication.

### UI

- ShoppingList
  - SearchBar
  - DropdownList
- ShoppingItem

### Data- State/Props

- Input value - state
- SearchResults - state, effect
- onSelect- prop
- shoppingList- state
- onChange- state

### My new learnings as part of this exercise

- The habit of planning the UI component structure and associated different data flow. This exercise of planning helps to identify the states and props in the app and if required lifting the state up or adding new component to hold a state.
- I also practiced the habit of making changes in an incremental way. Add ShoppingList, first to check the render logic, add input to check the controlled input.
- For searchbar it is common accessbility practice to use role=search either on the form or on the input. We can also add type="search"
- "name" attribute for the input should be considered as required field although it is optional, that way browsers can use to it to remember the value. The form data will be submitted as key value pairs.
- I also made a mistake of moving the state of the onChange checkbox event to parent to store the isChecked prop per item. However, that is unnecsessary, keeping state local as much as possible is recommended.
- Learnt about debounce, throttle and useDeferedValue as an optimization for UI and network call during user typing the search query. Debounce and useDeferefValue can be used togther to optmize UI rendering and the network call.
- For dropdown list of serach results, role="listbox" and role ="option" for accessibility is recommended. Although my example does not demonstrate.

- [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-ts-eyqyzg)
