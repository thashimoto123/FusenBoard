import * as Actions from 'constants/ActionTypes'
export const updateLabels = (labelList) => {
  return {
    type: Actions.UPDATE_LABELS,
    labelList
  }
}

export const initializeLabels = () => {
  return {
    type: Actions.INITIALIZE_LABELS
  }
}