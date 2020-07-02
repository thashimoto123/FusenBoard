import * as Actions from 'constants/ActionTypes'

export const updateCardList = (cardList) => ({
  type: Actions.UPDATE_CARD_LIST,
  cardList
})

export const addCard = (card) => ({
  type: Actions.ADD_CARD,
  card
})

export const updateCard = (card) => ({
  type: Actions.UPDATE_CARD,
  card
})

export const removeCard = (id) => ({
  type: Actions.REMOVE_CARD,
  id
})

export const updateSortBy = (sortBy) => ({
  type: Actions.UPDATE_SORT_BY,
  sortBy
})

export const updateOrderBy = (orderBy) => ({
  type: Actions.UPDATE_ORDER_BY,
  orderBy
})