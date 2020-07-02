import * as Actions from 'constants/ActionTypes'

const initialState = {
  formModal: true,
  labelsModal: true,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case Actions.SET_VIEW_FORM_MODAL:
      return {
        ...state,
        formModal: action.status
      }
    case Actions.SET_VIEW_LABELS_MODAL:
      return {
        ...state,
        labelsModal: action.status
      }
    default:
      return state
  }
}