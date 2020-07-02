import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({ className, children, primary, basic, mini, onClick = () => {}, onFocus = () => {} }) => {
  let classname = cn(
    className,
    cx(
      className,
      'BrdButton',
      { primary, mini, basic }
    )
  )
  return (
    <button 
      className={classname}
      onClick={ (e) => {onClick(e)} }
      onFocus={ (e) => {onFocus(e)} }
    >{children}</button>
  )
}
