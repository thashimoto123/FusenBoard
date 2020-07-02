import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({
  id = "",
  value = '',
  border = false,
  mini = '',
  className = '',
  basic,
  style = {},
  onChange = () => {}, 
  onFocus = () => {}, 
  onBlur = () => {},
  type = 'text'
}) => {
  const classname = cn(
    className,
    cx({
      BrdInput: true,
      mini,
      border,
      basic
    })
  )
  return (
    <input 
      id={id}
      type={type}
      className={classname} 
      style={style}
      value={value} 
      onChange={onChange} 
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}