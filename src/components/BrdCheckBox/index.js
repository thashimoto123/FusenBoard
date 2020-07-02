import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({
  name = "",
  value = "",
  className = "",
  label = "",
  checked = null,
  onClick = () => {},
  onChange = () => {},
}) => {
  const classname = cn(
    className, 
    cx(
      'BrdCheckBox'
    )
  )
  return (
    <label 
      className={classname}
      onClick={onClick}
    >
      <input 
        type="checkbox"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div className={styles['display']}>
        { 
          label && <div className={styles['label']}>{ label }</div> 
        }
      </div>

    </label>
  )
}