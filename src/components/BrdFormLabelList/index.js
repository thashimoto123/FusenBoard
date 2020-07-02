import React from 'react'
import BrdFormLabel from 'components/BrdFormLabel'
import styles from './style.module.scss'
import { useCardFormLabelWithName } from 'hooks/CardFormHooks'

export default () => {
  const [labelList] = useCardFormLabelWithName()
  return (
    <div className={styles['BrdFormLabelList']}>
      {
        labelList.map(label => {
          return <BrdFormLabel label={label} key={`label-${label.id}`} />
        })
      }
    </div>
  )
}