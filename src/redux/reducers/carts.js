const initialState = {
  items: [],
}

const carts = (state = initialState, action) => {
  switch (action.type) {
    case 'CARTS_ADD_ITEM': {
      return {
        ...state,
        items: [...state.items, ...[action.payload]]
      }
    }
    case 'CARTS_RESET': {
      return {
        ...state,
        items: []
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default carts
