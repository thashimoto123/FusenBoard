import * as Actions from 'constants/ActionTypes'
const initialState = {
  channel: null,
  userName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE_CHANNEL:
      return { 
        ...state,
        channel: action.channel 
      }

    case Actions.UPDATE_USER_NAME:
    return {
      ...state,
      userName: action.userName
    }
    default:
      return state
  }
}