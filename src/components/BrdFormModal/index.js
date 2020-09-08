import React from 'react'
import BrdForm from 'components/BrdForm'
import BrdModal from 'components/BrdModal'
import BrdButton from 'components/BrdButton'
import BrdFormModalSaveButton from 'components/BrdFormModalSaveButton'
import BrdFormModalRemoveButton from 'components/BrdFormModalRemoveButton'
import classes from './style.module.scss'
import { useCardFormColorValue, useCardFormValue } from 'hooks/CardFormHooks'
import { useCloseModal, useOpenModal } from 'modules/modal' 


export default () => {
  const color = useCardFormColorValue()
  const closeModal = useCloseModal()
  const openModal = useOpenModal()
  const cardData = useCardFormValue()

  const handleClickLabelEditButton = (e) => {
    e.stopPropagation()
    openModal('BrdLabelModal')
  }

  const handleClickCancelButton = (e) => {
    e.stopPropagation()
    closeModal('BrdFormModal')
  }

  return (
    <BrdFormModal 
      color={color}
      handleClickLabelEditButton={handleClickLabelEditButton}
      handleClickCancelButton={handleClickCancelButton}
      cardData={cardData}
    />
  )
}

function BrdFormModal ({color, handleClickLabelEditButton,  handleClickCancelButton, cardData})  {
  return (
    <BrdModal color={color}  modalId="BrdFormModal">
      <BrdForm handleClickLabelEditButton={handleClickLabelEditButton} />
      <div className={classes["btns-wrap"]}>
        { cardData.id && <BrdFormModalRemoveButton /> }
        <BrdButton onClick={handleClickCancelButton}>キャンセル</BrdButton>
        <BrdFormModalSaveButton />
      </div>
    </BrdModal>
  )
}