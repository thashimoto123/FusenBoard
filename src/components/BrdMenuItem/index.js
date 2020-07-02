import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'
const cx = cn.bind(styles)
export default ({active, children, header ,handleSelectMenu = () => {}}) => {
  const className = cx({
    BrdMenuItem: true,
    header,
    active
  })
  return (
    <div 
      tabIndex="-1"
      className={ className } 
      onMouseDown={ handleSelectMenu }
    >{children}</div>
  )
}