import * as Actions from 'constants/ActionTypes'

export const updateColorList = (colorList) => ({
  type: Actions.UPDATE_COLOR_LIST,
  colorList
})

export const addColorList = (color) => ({
  type: Actions.ADD_COLOR_LIST,
  color
})

export const removeColorList = (color) => ({
  type: Actions.REMOVE_COLOR_LIST,
  color
})

export const initializeColorList = () => ({
  type: Actions.INITIALIZE_COLOR_LIST
})