import React from 'react'
import cn from 'classnames/bind'
import styles from './style.module.scss'
import { useCardFormColor } from 'hooks/CardFormHooks'
import { useColorList} from 'hooks/ColorListHooks'

const cx = cn.bind(styles)

export default () => {
  const [activeColor, updateCardFormColor] = useCardFormColor()
  const [colorList] = useColorList()
  return (
    <BrdColorList
      colorList={colorList}
      activeColor={activeColor}
      handleClickColor={updateCardFormColor}
    />
  )
}


function BrdColorList ({colorList, activeColor, handleClickColor}) {
  return (
    <div className={cx("BrdColorList")}>
      <ul>
        {colorList.map(color => {
          const classname = cx({
            'color-item': true,
            'active': color === activeColor
          })
          return (
            <li 
              className={classname} 
              style={{ backgroundColor: color }} 
              onClick={() => handleClickColor(color)}
              key={`color-${color}`}
            ></li>
          )
        })}
      </ul>
    </div>
  )
}