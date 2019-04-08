import axios from 'axios'
import { getRandomIntBetween } from '../utils/random'

const MAX_ID_RICKANDMORTY_API = 493
const NUMBER_CHARACTERS = 4

// Action types
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS'

// Action creators
export const fetchCharacters = () => async dispatch => {
  const characterIds = getRandomCharacterIds()
  const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterIds.join(',')}`)

  dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data })
}

const getRandomCharacterIds = () => {
  const characterIds = []
  while (characterIds.length < NUMBER_CHARACTERS) {
    const random = getRandomIntBetween(1, MAX_ID_RICKANDMORTY_API)
    if (!characterIds.includes(random)) characterIds.push(random)
  }
  return characterIds
}

const INITIAL_STATE = {
  characters: []
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload
      }
    default:
      return state
  }
}
