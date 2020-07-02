import { useDispatch } from 'react-redux'
import { useCardFormValue } from 'hooks/CardFormHooks'
import { useAddCard, useUpdateCard } from 'hooks/CardListHooks'
import { useCloseModal } from 'modules/modal'
import { useChannelValue, useChannelPostCards } from 'hooks/ChannelHooks'
import * as api from 'api'
import store from 'store'

export default () => {
  const dispatch = useDispatch()
  const formData = useCardFormValue()
  const addCard = useAddCard()
  const updateCard = useUpdateCard()
  const closeModal = useCloseModal()
  const channel = useChannelValue()
  const postCards = useChannelPostCards()

  return {
    onClick() {
      if (formData.id) {
        dispatch(() => {
          updateCard(formData)
          postCards(store.getState().cardList.cardList)
        })
      } else {
        dispatch(() => {
          addCard(formData)
          postCards(store.getState().cardList.cardList)
        })
      }
      if (channel && channel.identifier) {
        let name = JSON.parse(channel.identifier).room_id
        api.updateData(name, {
          cards: store.getState().cardList.cardList
        })
      }
      closeModal('BrdFormModal')
    }
  }
}