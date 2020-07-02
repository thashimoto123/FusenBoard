import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({ id = null, value = null, name = null, className = '', list = [],  onSelect = () => {}, mini, primary, basic, label='', children }) => {
  const classname = cn(
    className,
    cx({
      BrdSelect: true,
      mini,
      primary,
      basic
    })
  )
  return (
    <div className={classname}>
      { label && <label className={cx('label')} htmlFor={id}>{ label }</label> }
      <select name={name} id={id} className={cx('select')} value={value}>
        {
          list.map((item) => {
            const text = typeof item === 'string' ? item : item.text ? item.text : ''
            const value = typeof item === 'string' ? item : item.value ? item.value : '' 
            return <option value={value} key={value}>{text}</option>
          })
        }
        { children }
      </select>
    </div>
  )
}