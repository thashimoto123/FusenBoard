import * as Actions from 'constants/ActionTypes'
import * as Sort from 'constants/SortTypes'
import * as Order from 'constants/OrderTypes'
import shortid from 'shortid'

const initialState = {
  cardList: [
  
  ],
  sortBy: {
    type: Sort.TEXT,
    value: 'テキスト'
  },
  orderBy: Order.ASC
}

export default function(state = initialState, action) {
  switch(action.type) {
    case Actions.UPDATE_CARD_LIST:
      return {
        ...state,
        cardList: action.cardList
      }
      
    case Actions.ADD_CARD:
      return {
        ...state,
        cardList: [...state.cardList,
          {
            ...action.card,
            id: shortid.generate()
          }
        ]
      }
        
    case Actions.REMOVE_CARD:
      return (() => {
        const index = state.cardList.findIndex((card) => card.id === action.id)
        let newCardList = [...state.cardList]
        newCardList.splice(index, 1)
        return {
          ...state,
          cardList: newCardList
        }
      })()

    case Actions.UPDATE_CARD:
      return (() => {
        const index = state.cardList.findIndex((card) => card.id === action.card.id)
        const cardList = [...state.cardList]
        cardList[index] = action.card
        return {
          ...state,
          cardList
        }
      })()

    case Actions.UPDATE_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy
      }

    case Actions.UPDATE_ORDER_BY:
      return {
        ...state,
        orderBy: action.orderBy
      }

    default: 
      return state
  }
}