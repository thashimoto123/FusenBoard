import { useSelector, useDispatch } from 'react-redux'
import * as act from 'actions/ColorListActions'

export const useColorListValue = () => {
  const colorList = useSelector(state => state.colorList.colorList)
  return colorList
}

export const useUpdateColorList = () => {
  const dispatch = useDispatch()
  const updateColorList = (colorList) => {
    dispatch(act.updateColorList(colorList))
  }
  return updateColorList
}

export const useColorList = () => {
  const colorList = useColorListValue()
  const updateColorList = useUpdateColorList()
  return [colorList, updateColorList]
}


export const useAddColorList = () => {
  const dispatch = useDispatch()
  const addColorList = (color) => {
    dispatch(act.addColorList(color))
  }
  return addColorList
}

export const useRemoveColorList = () => {
  const dispatch = useDispatch()
  const removeColorList = (color) => {
    dispatch(act.removeColorList(color))
  }
  return removeColorList
}

export const useInitializeColorList = () => {
  const dispatch = useDispatch()
  const initializeColorList = () => {
    dispatch(act.initializeColorList())
  }
  return initializeColorList
}