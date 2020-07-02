import React from 'react'
import cn from 'classnames/bind'
import BrdInput from 'components/BrdInput'
import BrdMenu from 'components/BrdMenu'
import styles from './style.module.scss'
import { useLabelList } from 'hooks/LabelListHooks'
import { useCardSort } from 'hooks/CardListHooks'
import { useFocus } from 'react-hooks-lib'
import { useColorList } from 'hooks/ColorListHooks'
import * as Sort from 'constants/SortTypes'
const cx = cn.bind(styles)

export default () => {
  const [labelList] = useLabelList() 
  const [sort, updateSort] = useCardSort()
  const { focused, bind: bindFocus } = useFocus()
  let value
  switch (sort.type) {
    case Sort.TEXT:
      value = 'テキスト'
      break
    case Sort.COLOR:
      value = 'カラー'
      break
    case Sort.LABEL:
      value = 'ラベル: ' + labelList.find(label => label.id === sort.value).name
      break
    default:
      
  }

  const labels = labelList.map(label => ({
    type: Sort.LABEL,
    value: label.id, 
    text: label.name
  }))

  const menuList = [
    { type: Sort.TEXT,value: 'テキスト', text: 'テキスト'},

    { type: Sort.COLOR, value: 'カラー', text: 'テキスト', text: <div>カラー</div> },
    { value: 'Label', text: <div><i className='icon'>&#xe801;</i> ラベル</div>, header: true, disable: true },
    ...labels
  ]

  const handleSelectMenu = (menu) => {
    updateSort({
      type: menu.type,
      value: menu.value
    })
  }



  return (
    <div className={cx('BrdHeaderSort')}>
        <label htmlFor="" className={cx('label')}>SORT BY</label>
        <div style={{position: 'relative'}}>
            <BrdInput value={value} basic style={{width: 'auto'}} {...bindFocus} />
            { focused && <BrdMenu list={menuList} handleSelectMenu={handleSelectMenu} />}
        </div>
    </div>
  )
}