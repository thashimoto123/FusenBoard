import React from 'react'
import BrdInput from 'components/BrdInput'
import BrdMenu from 'components/BrdMenu'
import useSuggestions from './useSuggestions'
import { useUpdateCardFormLabel } from 'hooks/CardFormHooks'
import { useFocus } from 'react-hooks-lib'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({ label }) => {
  const { focused, bind: bindFocus } = useFocus()
  const [suggestions] = useSuggestions(label.id, label.value)
  const updateCardFormLabel = useUpdateCardFormLabel()
  const handleSelectSuggestion = (suggestion) => {
    updateCardFormLabel(label.id, suggestion)
  }
  return (
    <div className={cx('BrdFormLabel')}
    >
      <label className={cx('label')} htmlFor={`label-${label.id}`}>{label.name}</label>
      <div className={cx("input-wrap")}>
        <BrdInput 
          value={label.value} 
          mini
          onChange={(e) => {updateCardFormLabel(label.id, e.target.value)}} 
          {...bindFocus} 
        />

        {
          (focused && suggestions.length > 0) && (
            <BrdMenu
              handleSelectMenu={handleSelectSuggestion}
              list={suggestions}
            />
          )
        }
        
      </div>
    </div>
  )
}