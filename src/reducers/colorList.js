import * as Actions from 'constants/ActionTypes'

export const initialColorList = ['#f6ecbf', '#D7E7F8', '#F6C6E4'];
const initialState = {
  colorList: initialColorList
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_COLOR_LIST:
      return {
        colorList: action.colorList
      }

    case Actions.ADD_COLOR_LIST:
      return {
        colorList: state.colorList.concat([action.color])
      }

    case Actions.REMOVE_COLOR_LIST:
      return {
        colorList: state.colorList.filter(color => {
          if (color === action.color) {
            return false
          } else {
            return true
          }
        })
      }

    case Actions.INITIALIZE_COLOR_LIST:
      return initialState

    default:
      return state
  }
}