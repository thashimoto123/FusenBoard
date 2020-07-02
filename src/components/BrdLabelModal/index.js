import React from 'react'
import BrdButton from 'components/BrdButton'
import BrdModal from 'components/BrdModal'
import BrdInput from 'components/BrdInput'
import BrdCheckBox from 'components/BrdCheckBox'
import {useLabels} from './hooks'
import {useCloseModal} from 'modules/modal'
import styles from './style.module.scss'

export default ({ modalId = 0 }) => {
  const { labels, setLabel, addLabel, checkDeleteFlag, saveLabels } = useLabels()
  const closeModal = useCloseModal()

  const handleChangeValue = (labelId) => (e) => setLabel(labelId, e.target.value)

  const handleCheckDeleteFlag = (labelId) => (e) => {
    checkDeleteFlag(labelId, e.target.checked)
  }

  const handleClickSaveButton = () => {
    if (window.confirm('ラベルの設定を保存します。よろしいですか？')) {
      saveLabels()
      closeModal("BrdLabelModal")
    }
  }

  const handleClickCancelButton = () => {
    closeModal("BrdLabelModal")
  }

  return (
    <BrdLabelModal 
      labels={labels}
      handleClickAddButton={addLabel}
      handleChangeValue={handleChangeValue}
      handleCheckDeleteFlag={handleCheckDeleteFlag}
      handleClickCancelButton={handleClickCancelButton}
      handleClickSaveButton={handleClickSaveButton}
    />
  )
}

export const BrdLabelModal = ({
  labels,
  handleClickAddButton,
  handleChangeValue,
  handleCheckDeleteFlag,
  handleClickCancelButton,
  handleClickSaveButton
}) => {
  return (
    <BrdModal className={styles['BrdLabelModal']} modalId={'BrdLabelModal'} >
      <div className={styles['buttons']}>
        <BrdButton primary onClick={handleClickAddButton}><i className='icon'>&#xe802;</i> 新しいラベルを追加</BrdButton>
      </div>
      <div className={styles['item']}>
        <div className={styles['label-name']}>ラベル名</div><div className={styles['delete']}>削除</div>
      </div>
      {
        labels.map((label) => {
          return (
            <div className={styles['item']} key={`label-form-${label.id}`}>
              <div className={styles['label-name']}>
                <BrdInput 
                  value={label.name}
                  border
                  mini
                  onChange={handleChangeValue(label.id)}
                />
              </div>
              <div className={styles['delete']}>
                <BrdCheckBox
                  checked={label.delete}
                  onChange={handleCheckDeleteFlag(label.id)}
                />
              </div>
            </div>
          ) 
        })
      }
      <div className={styles["buttons"]}>
        <BrdButton className={styles["button"]} onClick={handleClickCancelButton}>キャンセル</BrdButton>
        <BrdButton className={styles["button"]} primary onClick={handleClickSaveButton}>保存</BrdButton>
      </div>
    </BrdModal>
  )
}