import { useState, useEffect } from 'react'
import createKeyHandler from 'utils/createKeyHandler'

export default (list, handleSelect = () => {}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const length = list.length

  const incSelectedIndex = () => {
    if (length === 0) return
    let index = list[selectedIndex + 1] && list[selectedIndex + 1].disable ? selectedIndex + 2 : selectedIndex + 1
    index = index >= length ? -1 : index
    setSelectedIndex(index)
  }

  const decSelectedIndex = () => {
    if (length === 0) return
    let index = list[selectedIndex - 1] && list[selectedIndex - 1].disable ? selectedIndex - 2 : selectedIndex - 1
    index = index < 0 ? -1 : index
    setSelectedIndex(index)
  }

  useEffect(() => {
    const onKeydown = createKeyHandler({
      'Up': decSelectedIndex,
      'Down': incSelectedIndex,
      'Enter': (e) => {
        handleSelect(list[selectedIndex])
        e.target.blur()
      }
    })
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  })
  
  useEffect(() => {
    setSelectedIndex(-1)
  }, [])

  return {
    selectedIndex,
    setSelectedIndex
  }
}

