import * as Actions from 'constants/ActionTypes'
import shortid from 'shortid'

const initialState = {
  labelList: [
    {
      id: 1,
      name: '作成者'
    },
    {
      id: 2,
      name: 'カテゴリー'
    }
  ]
}

export default (state = initialState, action) => {
  let labelList
  let index
  switch(action.type) {
    case Actions.UPDATE_LABELS:
      return {
        labelList: [...action.labelList]
      }
    case Actions.ADD_LABEL:
      if (state.labelList.find(label => label.name === action.label.name) !== -1) {
        console.error(`Label "${action.label.name}" is already exists`)
        return state;
      }
      const label = {
        ...action.label,
        id: shortid.generate()
      }
      return {
        labelList: [...state.labelList, label]
      }

    case Actions.UPDATE_LABEL:
      index = state.labelList.findIndex(label => label.id === action.label.id)
      if (index === -1) {
        console.error('Not find label')
        return state
      }
      labelList = [...state.labelList]
      labelList[index] = {...action.label}
      return {
        labelList
      }

    case Actions.REMOVE_LABEL:
      index = state.labelList.findIndex(label => label.id = action.id)
      if (index === -1) {
        console.error('Not find label')
        return state
      }
      labelList = [...state.labelList]
      labelList.splice(index, 1)
      return {
        labelList
      }

    case Actions.INITIALIZE_LABELS:
      return initialState

    default: 
      return state

  }
}