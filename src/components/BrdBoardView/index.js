import React from 'react'
import BrdHeader from 'components/BrdHeader'
import BrdCardList from 'components/BrdCardList'
import BrdFormModal from 'components/BrdFormModal'
import BrdLabelModal from 'components/BrdLabelModal'
import BrdShareModal from 'components/BrdShareModal'
import BrdRoomInModal from 'components/BrdRoomInModal'
import BrdShareUrlModal from 'components/BrdShareUrlModal'
import classes from './style.module.scss'
import { useEffect } from 'react'
import { useUpdateCardList, useCardList } from 'hooks/CardListHooks'
import { useUpdateCardForm } from 'hooks/CardFormHooks'
import { useUpdateColorList} from 'hooks/ColorListHooks'
import { useUpdateLabels } from 'hooks/LabelListHooks'
import { usePush } from 'hooks/RouterHooks'
import { useModal, useOpenModal, useCloseModal, useCloseAllModal } from 'modules/modal'
import { useUserName } from 'hooks/ChannelHooks'
import * as api from 'api'

export default ({ match }) => {
  const [cardList] = useCardList()
  const openModal = useOpenModal()
  const [updateCardForm] = useUpdateCardForm()
  const closeAllModal = useCloseAllModal()
  const closeModal = useCloseModal()
  const updateCardList = useUpdateCardList()
  const [updateLabelList] = useUpdateLabels()
  const updateColorList = useUpdateColorList()
  const [userName, setUserName] = useUserName()
  const push = usePush()
  const handleClickCard = (card) => (e) => {
    e.stopPropagation()
    updateCardForm(card)
    openModal('BrdFormModal')
  }
  const { active: formModalActive } = useModal('BrdFormModal')
  const { active: labelsModalActive } = useModal('BrdLabelModal')
  const { active: shareModalActive } = useModal('BrdShareModal')
  const { active: roomInModalActive } = useModal('BrdRoomInModal')
  const { active: shareUrlModalActive } = useModal('BrdShareUrlModal')
  const id = (match.params && match.params.id) ? match.params.id : ''
  useEffect(
    () => {

      if (id) {
        roomIn(id)
      }
    }
  , [id])

  const roomIn = (id) => {
    api.roomIn(id).then((data) => {
      if (data.status == 'SUCCESS') {
        const promptUser = () => {
          let user = window.prompt('ユーザーネームを入力してください。')
          if (!user)  {
            user = promptUser()
          }
          return user
        }

        let user = promptUser()
        setUserName(user)
        updateLabelList(data.labels)
        updateCardList(data.cards)
        updateColorList(data.colors)
        let channel = api.createChannel(match.params.id, user)
        closeModal('BrdFormModal')
        closeModal('BrdLabelModal')
        closeModal('BrdShareModal')
        closeModal('BrdRoomInModal')
        return
      }
      if (data.status == 'NO_ROOM') {
        closeAllModal()
        push('/')
        alert('部屋が見つかりませんでした。')
        return
      }
      if (data.status == 'NO_USER') {
        closeAllModal()
        openModal('BrdRoomInModal')
        return
      }
      push('/')
    })
  }
  return  (
    <BrdBoardView 
      cardList={cardList} 
      handleClickCard={handleClickCard}
      room_id={id}
      formModalActive={formModalActive}
      labelsModalActive={labelsModalActive}
      shareModalActive={shareModalActive}
      roomInModalActive={roomInModalActive}
      shareUrlModalActive={shareUrlModalActive}
    />
  )
}
const BrdBoardView = ({ 
  cardList = [], 
  handleClickCard = () => {}, 
  formModalActive, 
  labelsModalActive, 
  shareModalActive, 
  roomInModalActive,
  shareUrlModalActive,
  room_id 
}) => {
  return (
    <div className={classes['BrdBoardView']}>
      <BrdHeader />      
      <BrdCardList cardList={cardList} handleClickCard={ handleClickCard } />
      { formModalActive && <BrdFormModal color={'#f6ecbf'} /> }
      { labelsModalActive && <BrdLabelModal />}
      { shareModalActive && <BrdShareModal />}
      { roomInModalActive && <BrdRoomInModal room_id={room_id} />}
      { shareUrlModalActive && <BrdShareUrlModal />}
    </div>
  )
}