import { getDecks} from '../utils/_DATA'

export const ADD_NEW_DECK = 'ADD_NEW_DECK'
export const ADD_NEW_CARD = 'ADD_NEW_CARD '
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'

export function addDeck(newDeck){
    return {
        type: ADD_NEW_DECK,
        newDeck,
    }
}

export function addNewCard(deck, question){
    return {
        type:  ADD_NEW_CARD,       
        question,
        deck,
    }
}

export function receiveDecks(decks){
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function removeDeck(id){
    return {
        type: REMOVE_DECK,
        id,
    }
}

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}