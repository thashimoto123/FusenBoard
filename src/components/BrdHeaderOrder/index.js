import React from 'react'
import cn from 'classnames/bind'
import BrdInput from 'components/BrdInput'
import BrdMenu from 'components/BrdMenu'
import styles from './style.module.scss'
import { useFocus } from 'react-hooks-lib'
import { useCardOrder } from 'hooks/CardListHooks'
import * as Order from 'constants/OrderTypes'
const cx = cn.bind(styles)

export default () => {
  const [order, updateOrder] = useCardOrder()
  const { focused, bind: bindFocus } = useFocus()
  let value = order

  const menuList = [
    Order.ASC,
    Order.DESC
  ]

  const handleSelectMenu = (menu) => {
    updateOrder(menu)
  }



  return (
    <div className={cx('BrdHeaderOrder')}>
        <label htmlFor="" className={cx('label')}>ORDER BY</label>
        <div style={{position: 'relative'}}>
            <BrdInput value={value} basic style={{width: 'auto'}} {...bindFocus} />
            { focused && <BrdMenu list={menuList} handleSelectMenu={handleSelectMenu} />}
        </div>
    </div>
  )
}