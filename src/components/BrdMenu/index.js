import React from 'react'
import styles from './style.module.scss'
import useKeydownSelector from 'utils/useKeydownSelector'
import BrdMenuItem from 'components/BrdMenuItem'

export default ({ list = [], handleSelectMenu = () => {}, children }) => {
  const { selectedIndex } = useKeydownSelector(list, handleSelectMenu)
  return (
    <div 
      className={styles['BrdMenu']} 
      tabIndex="0"
    >
    {
      list.map((item, index) => {
        const value = typeof item === 'string' ? item : item.value ?  item.value : ''
        const text = typeof item === 'string' ? item : item.text ? item.text :  ''
        const header = typeof item === 'string' ? null : item.header ? item.header :  null
        return (
          <BrdMenuItem 
            tabIndex="-1"
            active={ index === selectedIndex }
            header={header}
            key={`menulist-${value}`}
            handleSelectMenu={ () => { handleSelectMenu(item) } }
          >{text}</BrdMenuItem>
        )
      })
    }
    { children }
    </div>
  )
}