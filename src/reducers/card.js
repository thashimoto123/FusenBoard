import * as Actions from 'constants/ActionTypes'
import { initialColorList as colorList } from 'reducers/colorList'

const initialState = {
  id: '',
  text: '',
  color: colorList[0],
  labels: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case Actions.UPDATE_CARD_FORM:
      return { ...action.card }
    case Actions.INITIALIZE_CARD_FORM:
      return initialState
    case Actions.UPDATE_CARD_FORM_COLOR:
      return {
        ...state,
        color: action.color
      }
    case Actions.UPDATE_CARD_FORM_TEXT:
      return {
        ...state,
        text: action.text
      }
    case Actions.UPDATE_CARD_FORM_LABEL:
      let index = state.labels.findIndex(label =>  label.id === action.id)
      let labels = [...state.labels]
      index = index !== -1 ? index : labels.length
      labels[index] = {id: action.id, value: action.value}
      return {
        ...state,
        labels
      }
    default:
      return state
  }
}