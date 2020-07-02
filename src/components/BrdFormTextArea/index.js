import React from 'react'
import BrdTextArea from 'components/BrdTextArea'
import useHooks from './hooks'

export default () => {
  const { onChange, value } = useHooks()
  return (
    <BrdTextArea value={value} onChange={onChange} rows='5' placeholder='説明を追加' />
  )
}