import AsyncStorage from '@react-native-async-storage/async-storage'

export const DECKLIST_STORAGE_KEY = 'FlashCards:decklist'

let deckListdata = {
  HTML: {
    title: "HTML",
    questions: [
      {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
      },
      {
        question: "What is the correct HTML element for the largest heading?",
        answer: "<h1>",
      },
      {
        question: "What is the correct HTML element for inserting line breaks?",
        answer: "<br>",
      },
      {
        question:
          "Inline elements are normally displayed without starting a new line",
        answer: "True",
      },
      {
        question:
          "Which HTML attribute specifies an alternate text for an image?",
        answer: "alt",
      },
    ],
  },

  CSS: {
    title: "CSS",
    questions: [
      {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which CSS property is used to change background color?",
        answer: "background-color",
      },
      {
        question: "Which CSS property is used to change text color?",
        answer: "color",
      },
      {
        question: "Which CSS property is used to change text size?",
        answer: "font-size",
      },
    ],
  },

  Javascript: {
    title: "Javascript",
    questions: [
      {
        question: "Inside which HTML element do we put javascript?",
        answer: "<script>",
      },
      {
        question: "Where is the correct place to insert javascript?",
        answer: "Both the head section and the body section.",
      },
      {
        question: "How do you add comment in javascript",
        answer: "using //",
      },
      {
        question: "Javascript is the same as Java",
        answer: "False",
      },
      {
        question: "What event occurs whwn a user clicks on an HTML elment?",
        answer: "onClick event.",
      },
      {
        question: "Is Javascript case sensitive?",
        answer: "Yes",
      },
    ],
  },
};


export async function getDeck(deckId) {
  return await AsyncStorage.getItem(DECKLIST_STORAGE_KEY)
    .then(res => JSON.parse(res)[deckId])
    .catch(err => console.log('There was an error in returning deck', err))
}


export const getDecks = async () => { 
  try {
    const result = await AsyncStorage.getItem(DECKLIST_STORAGE_KEY)

    if (!result) {
      AsyncStorage.setItem(DECKLIST_STORAGE_KEY, JSON.stringify(deckListdata))
    }
    return result !== null 
      ? JSON.parse(result)
      : deckListdata
  } catch(err) {
    console.error('There was an error in returning decklist ', err)
  }
}


export async function saveDeckTitle(title) {
  try {
    await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: { 
      title, 
      questions: []
    },
  }))
  } 
  catch(err) {
    console.log('There was an error in saving deck title', err)
  }
}


export async function addCardToDeck(deckId, questions) {
  const deck = await getDeck(deckId)
  const jsonCardMerge = JSON.stringify({
    [deckId]: {
      questions: [...deck.questions].concat(questions)
    }
  })
   await AsyncStorage.mergeItem(
    DECK_STORAGE_KEY, jsonCardMerge)
    .catch(err => console.log('There was an error in adding card to deck', err))
}


export async function deleteDeck(key) {
  await AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(res => {
      const deckListdata = JSON.parse(res)
      deckListdata[key] = undefined
      delete deckListdata[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deckListdata))
    })
    .catch(err => console.log('There was an error in deleting deck from decklist', err))
}
