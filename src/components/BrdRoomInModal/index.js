import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { usePush } from 'hooks/RouterHooks'
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
import { useCloseModal } from 'modules/modal'

const cx = cn.bind(styles)

export default ({ room_id }) => {
  const [cards] = useCardListOrigin()
  const [colors] = useColorList()
  const [labels] = useLabelList()
  const closeModal = useCloseModal()
  const push = usePush()

  const handlerClickButton = (password) => {
    const name = room_id
    if (!name) {
      return closeModal('BrdRoomInModal')
    }
    api.login({
      name,
      password
    })
      .then((data) => {
        switch(data.status) {
          case 'SUCCESS':
            push('/')
            push(`/room/${name}/`)
            closeModal('BrdRoomInModal')
            break
          case 'NO_ROOM':
            push('/')
            alert('部屋が見つかりませんでした。')
            closeModal('BrdRoomInModal')
            break
          case 'NO_PASSWORD':
            alert('パスワードが間違っています。')
            break
          default:
            alert('入室に失敗しました。')
            window.location.href = '/'
        } 
      })
      .catch(error => console.error(error))
  }
  const props = {
    handlerClickButton
  }
  return (
    <BrdRoomInModal {...props}  />
  )
}

export const BrdRoomInModal = ({
  handlerClickButton = () => {},
}) => {
  const classname = cx('BrdRoomInModal')
  const [password, setPassword] = useState('')
  return (
      <BrdModal className={classname} modalId="BrdRoomInModal" overlay>
        <label className={cx('label')}  htmlFor="password">パスワード</label>
        <BrdInput id="password" type="password" border value={password} onChange={(e) => {setPassword(e.target.value)}} />

        <div className={cx('button-wrap')}>
          <BrdButton 
            className={cx('button')} 
            primary 
            onClick={() => {handlerClickButton(password)}}
          >入室</BrdButton>
        </div>
      </BrdModal>
  )
}