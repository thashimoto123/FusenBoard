import React from 'react'
import BrdButton from 'components/BrdButton'
import useHooks from './hooks.js'

export default () => {
  const { onClick } = useHooks()
  return (
    <BrdButton
      primary={true}
      onClick={onClick}
    >保存する</BrdButton>
  )
}