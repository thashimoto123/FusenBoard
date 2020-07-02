import React from 'react'
import BrdForm from 'components/BrdForm'
import BrdModal from 'components/BrdModal'
import BrdButton from 'components/BrdButton'
import BrdFormModalSaveButton from 'components/BrdFormModalSaveButton'
import classes from './style.module.scss'
import { useCardFormColor } from 'hooks/CardFormHooks'
import { useCloseModal, useOpenModal } from 'modules/modal' 


export default () => {
  const [color] = useCardFormColor()
  const closeModal = useCloseModal()
  const openModal = useOpenModal()

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
    />
  )
}

function BrdFormModal ({color, handleClickLabelEditButton,  handleClickCancelButton})  {
  return (
    <BrdModal color={color}  modalId="BrdFormModal">
      <BrdForm handleClickLabelEditButton={handleClickLabelEditButton} />
      <div className={classes["btns-wrap"]}>
        <BrdButton onClick={handleClickCancelButton}>キャンセル</BrdButton>
        <BrdFormModalSaveButton />
      </div>
    </BrdModal>
  )
}