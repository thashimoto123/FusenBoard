import React from 'react'
import { useState } from 'react'
import BrdModal from 'components/BrdModal'
import BrdInput from 'components/BrdInput'
import BrdButton from 'components/BrdButton'
import cn from 'classnames/bind'
import styles from './style.module.scss'
import * as api from 'api'
import shortid from 'shortid'
import { useCardListOrigin } from 'hooks/CardListHooks'
import { useColorList } from 'hooks/ColorListHooks'
import { useLabelList } from 'hooks/LabelListHooks'
import { usePush } from 'hooks/RouterHooks'
import { useOpenModal } from 'modules/modal'

const cx = cn.bind(styles)

export default () => {
  const [cards] = useCardListOrigin()
  const [colors] = useColorList()
  const [labels] = useLabelList()
  const push = usePush()
  const openModal = useOpenModal()

  const handlerClickButton = (password, passwordConfirmation) => {
    const name = shortid.generate()
    api.createRoom({
      name,
      password,
      password_confirmation: passwordConfirmation,
      cards,
      colors,
      labels
    })
      .then((data) => {
        if (data.status === 'SUCCESS') {
          push(`/room/${data.data.name}`)
        }
        openModal('BrdShareUrlModal')
      })
      .catch(error => console.error(error))
  }
  const props = {
    handlerClickButton
  }
  return (
    <BrdShareModal {...props}  />
  )
}

export const BrdShareModal = ({
  handlerClickButton = () => {},
}) => {
  const classname = cx('BrdShareModal')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  return (
      <BrdModal className={classname} modalId="BrdShareModal" overlay>
        <label className={cx('label')}  htmlFor="password">パスワード</label>
        <BrdInput id="password" type="password" border value={password} onChange={(e) => {setPassword(e.target.value)}} />
        <label className={cx('label')} htmlFor="password_confirmation">パスワード（確認用）</label>
        <BrdInput id="password_confirmation" type="password" border value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} /><br/>
        <div className={cx('button-wrap')}>
          <BrdButton 
            className={cx('button')} 
            primary 
            onClick={() => {handlerClickButton(password, passwordConfirmation)}}
          >作成</BrdButton>
        </div>
      </BrdModal>
  )
}