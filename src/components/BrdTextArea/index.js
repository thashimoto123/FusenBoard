import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({
  value = '',
  placeholder = '',
  cols = null, 
  rows = null,
  maxLength = "250",
  border = false,
  className = '',
  onClick = () => {},
  onFocus = () => {}, 
  onChange = () => {}
}) => {
  const classname = cn(
    cx('BrdTextArea'),
    className,
    border
  )
  return(
    <textarea 
      className={classname}
      value={value}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      onClick={(e) => {onClick(e)}}
      onFocus={(e) => {onFocus(e)}}
      onChange={(e) => {onChange(e)}}
    ></textarea>
  )
}