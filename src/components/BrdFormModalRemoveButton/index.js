import React from 'react'
import BrdButton from 'components/BrdButton'
import useHooks from './hooks.js'

export default () => {
  const { onClick } = useHooks()
  return (
    <BrdButton
      negative={true}
      onClick={onClick}
    >削除する</BrdButton>
  )
}