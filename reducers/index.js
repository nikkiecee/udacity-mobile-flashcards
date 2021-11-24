import {
    ADD_NEW_DECK,
    REMOVE_DECK,
    RECEIVE_DECKS,
    ADD_NEW_CARD,
  } from "../actions/index";
  
  function decks(state = {}, action) {
    switch (action.type) {
      case ADD_NEW_DECK:
        return {
          ...state,
          ...action.newDeck,
        };
  
      case ADD_NEW_CARD:
        return {
          ...state,
          [action.deck]: {
            ...state[action.deck],
            questions: state[action.deck].questions.concat(action.question),
          },
        };
  
      case REMOVE_DECK:
        let currState = [...state];
        const newState = currState.filter((id) => id !== action.id);
        return {
          newState,
        };
  
      case RECEIVE_DECKS:
        return {
          ...state,
          ...action.decks,
        };
    }
  }
  
  export default decks;
  