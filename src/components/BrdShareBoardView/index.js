import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
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

const cx = cn.bind(styles)

export default () => {
  const [cards] = useCardListOrigin()
  const [colors] = useColorList()
  const [labels] = useLabelList()
  const dispatch = useDispatch()

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
          dispatch(push(`/room/${data.data.name}`))
        }
      })
      .catch(error => console.error(error))
  }
  const props = {
    handlerClickButton
  }
  return (
    <BrdShareBoardView {...props}  />
  )
}

export const BrdShareBoardView = ({
  handlerClickButton = () => {},
}) => {
  const classname = cx('BrdShareBoardView')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  return (
    <div className={classname}>
      <BrdModal className={cx('modal')}>
        <label className={cx('label')}  htmlFor="password">パスワード</label>
        <BrdInput id="password" border value={password} onChange={(e) => {setPassword(e.target.value)}} />
        <label className={cx('label')} htmlFor="password_confirmation">パスワード確認用</label>
        <BrdInput id="password_confirmation" border value={passwordConfirmation} onChange={(e) => {setPasswordConfirmation(e.target.value)}} /><br/>
        <div className={cx('button-wrap')}>
          <BrdButton 
            className={cx('button')} 
            primary 
            onClick={() => {handlerClickButton(password, passwordConfirmation)}}
          >作成</BrdButton>
        </div>
      </BrdModal>
    </div>
  )
}