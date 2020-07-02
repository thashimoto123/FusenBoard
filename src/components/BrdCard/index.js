import React from 'react'
import trimString from 'utils/trimString'
import cn from 'classnames/bind'
import styles from './style.module.scss';

const cx = cn.bind(styles)

export default ({
  onClick = () => {}, 
  text = '', 
  description,
  color, 
  maxLength = 50,
}) => {
  const style = {
    backgroundColor: color
  }
  return (
    <div className={cx('card')} style={style} onClickCapture={onClick} >
      {trimString(text, maxLength)}
      { description && <div className={cx('description')}>{description}</div> }
    </div>
  )
}