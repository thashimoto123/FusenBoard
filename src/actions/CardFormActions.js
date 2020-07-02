import * as Actions from 'constants/ActionTypes'

export const updateCardForm = (card) => ({
  type: Actions.UPDATE_CARD_FORM,
  card
})

export const updateCardFormText = (text) => ({
  type: Actions.UPDATE_CARD_FORM_TEXT,
  text
})


export const updateCardFormColor = (color) => ({
  type: Actions.UPDATE_CARD_FORM_COLOR,
  color
})

export const updateCardFormLabel = (id, value) => ({
  type: Actions.UPDATE_CARD_FORM_LABEL,
  id,
  value
})

export const initializeCardForm = () => ({
  type: Actions.INITIALIZE_CARD_FORM
})