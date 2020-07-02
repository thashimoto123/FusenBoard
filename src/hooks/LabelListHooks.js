import * as act from 'actions/LabelListActions'
import { useSelector, useDispatch } from 'react-redux'

export const useLabel = (id) => {
  const dispatch = useDispatch()
  const labelList = useSelector(state => state.labelList.labelList)
  const label = labelList.find(label => label.id === id)
  const index = labelList.indexOf(label)
  const updateLabelName = (name) => {
    const newLabelList = [...labelList]
    newLabelList[index] = {
      ...label,
      name
    }
    dispatch(act.updateLabels(newLabelList))
  }

  return [label, updateLabelName]
}

export const useUpdateLabels = () => {
  const dispatch = useDispatch()
  const updateLabels = (labelList) => {
    dispatch(act.updateLabels(labelList))
  }

  return [updateLabels]
}

export const useLabelList = () => {
  const dispatch = useDispatch()
  const labelList = useSelector(state => state.labelList.labelList)
  const updateLabels = (labelList) => {
    dispatch(act.updateLabels(labelList))
  }

  return [labelList, updateLabels]
}


export const useInitializeLabels = () => {
  const dispatch = useDispatch()
  const initializeLabels = () => {
    dispatch(act.initializeLabels())
  }
  return initializeLabels
}
