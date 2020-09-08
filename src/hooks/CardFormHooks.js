import * as act from 'actions/CardFormActions'
import { useSelector, useDispatch } from 'react-redux'
import { useLabelList } from 'hooks/LabelListHooks'

export const useUpdateCardForm = () => {
  const dispatch = useDispatch()
  const updateCardForm = (card) => {
    dispatch(act.updateCardForm(card))
  }

  return updateCardForm
}

export const useCardFormValue = () => {
  const cardData = useSelector(state => state.card)
  return cardData
}

export const useCardForm = () => {
  const cardData = useCardFormValue()
  const updateCardForm = useUpdateCardForm()
  return [cardData, updateCardForm]
}

export const useCardFormTextValue = () => {
  const text = useSelector(state => state.card.text)
  return text
}

export const useUpdateCardFormText = () => {
  const dispatch = useDispatch()
  const updateCardFormText = (text) => {
    dispatch(act.updateCardFormText(text))
  }
  return updateCardFormText
}

export const useCardFormText = () => {
  const text = useCardFormTextValue()
  const updateCardFormText = useUpdateCardFormText()
  return [text, updateCardFormText]
}

export const useCardFormColorValue = () => {
  const color = useSelector(state => state.card.color)
  return color
}

export const useUpdateCardFormColor = () => {
  const dispatch = useDispatch()
  const updateCardFormColor = (color) => {
    dispatch(act.updateCardFormColor(color))
  }
  return updateCardFormColor
}

export const useCardFormColor = () => {
  const color = useCardFormColorValue()
  const updateCardFormColor = useUpdateCardFormColor()
  return [color, updateCardFormColor]
}

export const useCardFormLabelValue = () => {
  const labels = useSelector(state => state.card.labels)
  return labels
}
export const useUpdateCardFormLabel = () => {
  const dispatch = useDispatch()
  const updateCardFormLabel = (id, value) => {
    dispatch(act.updateCardFormLabel(id, value))
  }
  return updateCardFormLabel
}
export const useCardFormLabel = () => {
  const labels = useCardFormLabelValue()
  const updateCardFormLabel = useUpdateCardFormLabel() 
  return [labels, updateCardFormLabel]
}

export const useCardFormLabelWithName = () => {
  const [labelList] = useLabelList()
  const [cardFormLabels, updateCardFormLabel] = useCardFormLabel()
  const list = labelList.map(label => {
    const l = cardFormLabels.find(l => l.id === label.id)
    return {
      ...label,
      value: (l && l.value ? l.value : '')
    }
  })
  
  return [list, updateCardFormLabel]
}

export const useInitializeCardForm = () => {
  const dispatch = useDispatch()
  return () => {dispatch(act.initializeCardForm())}
}