import React from 'react'
import BrdModal from 'components/BrdModal'
import BrdInput from 'components/BrdInput'
import BrdButton from 'components/BrdButton'
import cn from 'classnames/bind'
import styles from './style.module.scss'
import { useCloseModal } from 'modules/modal'

const cx = cn.bind(styles)

export default () => {
  const closeModal = useCloseModal()
  const handlerClickButton = () => {
    closeModal('BrdShareUrlModal')
  }
  const props = {
    handlerClickButton
  }
  return (
    <BrdShareUrlModal {...props}  />
  )
}

export const BrdShareUrlModal = ({
  handlerClickButton = () => {},
}) => {
  const classname = cx('BrdShareUrlModal')
  const url = window.location.href
  return (
      <BrdModal className={classname} modalId="BrdShareUrlModal" overlay>
        <label className={cx('label')}  htmlFor="url">以下のURLから部屋へアクセスできるようになりました。</label>
        <BrdInput id="url" type="text" readOnly={true} border value={url} />
        <div className={cx('button-wrap')}>
          <BrdButton 
            className={cx('button')} 
            primary 
            onClick={() => {handlerClickButton()}}
          >閉じる</BrdButton>
        </div>
      </BrdModal>
  )
}