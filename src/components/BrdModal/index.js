import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'
import { useModal } from 'modules/modal'

const cx = cn.bind(styles)

export default ({ color = 'white', children, className = '', onClick = () => {}, modalId = 0, overlay, disabled }) => {
  const classname = cn(
    cx('BrdModal', {overlay}),
  )
  const innerClassname = cn(
    className,
    cx('inner')
  )
  const { onClickModal } = useModal(modalId)
  const handleClickModal = disabled ? ()=>{} : onClickModal 
  return (
    <div className={classname}>
      <div className={innerClassname} style={{ backgroundColor: color }} onClick={(e) => {onClick(e); handleClickModal(e)}} >
        { children }
      </div>
      
    </div>
  )
}