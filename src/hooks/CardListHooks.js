import * as act from 'actions/CardListActions'
import * as Sort from 'constants/SortTypes'
import * as Order from 'constants/OrderTypes'
import { useSelector, useDispatch } from 'react-redux'
import { useLabelList } from 'hooks/LabelListHooks'

export const useUpdateCardList = () => {
  const dispatch = useDispatch()
  const updateCardList = (cardList) => {
    dispatch(act.updateCardList(cardList))
  }
  return updateCardList
}
export const useCardList = () => {
  const [labelList] = useLabelList()
  const [sort] = useCardSort()
  const [order] = useCardOrder()
  const cardList = useSelector(state => state.cardList.cardList)
  switch (sort.type) {
    case Sort.TEXT:
      cardList.sort((a, b) => {
        let A = a.text.toUpperCase()
        let B = b.text.toUpperCase()
        if (order === Order.DESC) {
          A = b.text.toUpperCase()
          B = a.text.toUpperCase()
        }
        if (A < B) return -1
        if (A > B) return 1
        return 0
      })
      break
    case Sort.LABEL:
      const labelId = sort.value
      cardList.forEach((card) => {
        const label = card.labels.find(label => label.id === labelId)
        const labelName = labelList.find(label => label.id === labelId).name
        const labelValue = label ? label.value : ''
        card.description = `${labelName}: ${labelValue}`
      })
      cardList.sort((a, b) => {
        let labelA = a.labels.find(label => label.id === labelId)
        let labelB = b.labels.find(label => label.id === labelId)
        if (order === Order.DESC) {
          labelA = b.labels.find(label => label.id === labelId)
          labelB = a.labels.find(label => label.id === labelId)
        }
        if ((!labelB || !labelB.value) && (labelA && labelA.value)) return -1
        if ((!labelA || !labelA.value) && (labelB && labelB.value)) return 1
        if ((!labelA || !labelA.value)  && (!labelB || !labelB.value)) return 0
        if (labelA.value < labelB.value) return -1
        if (labelA.value > labelB.value) return 1
        return 0
      })
      break
    case Sort.COLOR:
      cardList.sort((a, b) => {
        let colorA = a.color
        let colorB = b.color
        if (order === Order.DESC) {
          colorA = b.color
          colorB = a.color
        }
        if (colorA < colorB) return -1
        if (colorA > colorB) return 1
        return 0
      })
      break

    default: cardList.sort()
  }
  const updateCardList = useUpdateCardList()
  return [cardList, updateCardList]
}

export const useCardListOrigin = () => {
  const cardList = useSelector(state => state.cardList.cardList)
  const updateCardList = useUpdateCardList()
  return [cardList, updateCardList]
}

export const useCard = (id) => {
  const dispatch = useDispatch()
  const card = useSelector(state => state.cardList.cardList.find(card => card.id === id))
  const updateCard = (updateData) => {
    dispatch(act.updateCard({
      ...card,
      ...updateData
    }))
  }
  return [card, updateCard]
}

export const useAddCard = () => {
  const dispatch = useDispatch()
  const addCard = (card) => {
    dispatch(act.addCard(card))
  }
  return addCard
}

export const useUpdateCard = () => {
  const dispatch = useDispatch()
  const updateCard = (card) => {
    dispatch(act.updateCard(card))
  }
  return updateCard
}

export const useRemoveCard = () => {
  const dispatch = useDispatch()
  const removeCard = (id) => {
    dispatch(act.removeCard(id))
  }
  return removeCard
}

export const useAllCardLabelValues = (labelId) => {
  const cardList = useSelector(state => state.cardList.cardList)
  const values = []
  let value, label

  cardList.forEach(card => {
    label = card.labels.find(label => label.id === labelId )
    if (!label || !label.value) return
    value = label.value
    if (values.indexOf(value) === -1) values.push(value) 
  })
  return [values]
}

export const useUpdateCardSort = () => {
  const dispatch = useDispatch()
  const updateSortBy = (type) => { 
    dispatch(act.updateSortBy(type)) 
  }
  return [updateSortBy]
}

export const useCardSort = () => {
  const sort = useSelector(state => state.cardList.sortBy)

  const [updateSortBy] = useUpdateCardSort()
  return [sort, updateSortBy]
}

export const useUpdateCardOrder = ()  => {
  const dispatch = useDispatch()
  const updateOrderBy = (type) => {
    dispatch(act.updateOrderBy(type))
  }
  return [updateOrderBy]
}

export const useCardOrder = () => {
  const order = useSelector(state => state.cardList.orderBy)
  const [updateOrderBy] = useUpdateCardOrder()
  return [order, updateOrderBy]
}