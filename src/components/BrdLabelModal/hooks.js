import { useState } from 'react'
import shortid from 'shortid'
import * as Sort from 'constants/SortTypes'
import { useCardSort } from 'hooks/CardListHooks'
import { useLabelList, useUpdateLabels } from 'hooks/LabelListHooks'
import { useChannelValue, useChannelPostLabels } from 'hooks/ChannelHooks'
import * as api from 'api'

export  const useLabels = () => {
  const [sort, setSort] = useCardSort() 
  const [labelList] = useLabelList()
  const [updateLabels] = useUpdateLabels()
  const initialLabelsState =  labelList.map(label => {return {id: label.id, name: label.name, delete: false }})
  const [labels, setLabels] = useState(initialLabelsState)
  const channel = useChannelValue()
  const postLabels = useChannelPostLabels()

  const setLabel = (id, name) => {
    const newLabels = [...labels]
    const label = newLabels.find(label => label.id === id)
    if (label) {
      label.name = name
    }
    setLabels(newLabels)
  }

  const addLabel = () => {
    const newLabels = [...labels]
    newLabels.unshift({
      id: shortid.generate(),
      name: '',
      delete: false
    })
    setLabels(newLabels)
  }

  const checkDeleteFlag = (id, value) => {
    const newLabels = [...labels]
    let label = newLabels.find(label => label.id === id)
    if (!label) return 
    label.delete = value
    setLabels(newLabels)
  }

  const saveLabels = () => {
    const newLabels = labels
      .filter(label => (label.name && !label.delete))
      .map(label => { return {id: label.id, name: label.name } })
    if (sort.type === Sort.LABEL && !newLabels.find(label => label.id === sort.value)) {
      const newSort = newLabels[0] ? { type: Sort.LABEL, value: newLabels[0].id} : { type: Sort.TEXT, value: 'テキスト'}
      setSort(newSort)
    }
    updateLabels(newLabels)
    postLabels(newLabels)
    if (channel && channel.identifier) {
      let name = JSON.parse(channel.identifier).room_id
      api.updateData(name, {labels: newLabels})
    }
  }

  return {
    labels,
    setLabel,
    addLabel,
    checkDeleteFlag,
    saveLabels
  }
}