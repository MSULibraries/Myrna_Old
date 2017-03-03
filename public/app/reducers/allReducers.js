//Redux Reducer, which takes the action described by the dispatcher,
//and then applies the result to the global Redux store
//THE REDUCER MUST REMAIN PURE !!!!!!!!
export default (state = parseInt(localStorage['shoppingCartItems']) || 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUB':
      return state - 1
    default:
      return state
  }
}