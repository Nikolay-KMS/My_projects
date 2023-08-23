
const initialState = {
  idCardsInBasket: {},
}

export const basketReducer= (state= initialState, action) => {
  switch (action.type) {

    case 'GET_ID_CARDS_IN_BASKET':
      return {...state, idCardsInBasket: action.payload.idCardsInBasket}

    case 'ADD_ID_CARD_IN_BASKET':
      return {...state, idCardsInBasket: {...state.idCardsInBasket, [action.payload.id]: 1}}

    case 'INCREASE_QUANTITY_CARD_IN_BASKET':
      return {...state, idCardsInBasket: 
        {...state.idCardsInBasket, [action.payload.id]: state.idCardsInBasket[action.payload.id] + 1}}
        
    case 'REMOVE_CARD_IN_BASKET':
      const newObj = {...state.idCardsInBasket};
      delete newObj[action.payload.id];
      return {...state, idCardsInBasket: newObj}
  
    default:
      return state;
  }
}