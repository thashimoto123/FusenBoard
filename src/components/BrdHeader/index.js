import React from 'react'
import cn from 'classnames/bind'
import BrdButton from 'components/BrdButton'
import BrdSelect from 'components/BrdSelect'
import BrdHeaderSort from 'components/BrdHeaderSort'
import BrdHeaderOrder from 'components/BrdHeaderOrder'
import styles from './style.module.scss'
import { useOpenModal, useCloseAllModal } from 'modules/modal'
import { useUpdateCardList } from 'hooks/CardListHooks'
import { useInitializeCardForm } from 'hooks/CardFormHooks'
import { useInitializeLabels} from 'hooks/LabelListHooks'
import { useInitializeColorList} from 'hooks/ColorListHooks'
import { usePush } from 'hooks/RouterHooks'
import { useChannel } from 'hooks/ChannelHooks'
const cx = cn.bind(styles)

export default ({match}) => {
  const openModal = useOpenModal()
  const initializeCardForm = useInitializeCardForm()
  const initializeLabels = useInitializeLabels()
  const initializeColorList = useInitializeColorList()
  const updateCardList = useUpdateCardList()
  const push = usePush()
  const closeAllModal = useCloseAllModal()
  const [channel, setChannel] = useChannel()

  const handleClickAddButton = (e) => {
    e.stopPropagation()
    initializeCardForm()
    openModal('BrdFormModal')
  }

  const handleClickShareButton = (e) => {
    e.stopPropagation()
    closeAllModal()
    openModal('BrdShareModal')
  }

  const handleClickHomeButton = (e) => {
    if (channel) channel.unsubscribe()
    setChannel(null)
    updateCardList([])
    initializeLabels()
    initializeColorList()
    alert('退室しました。')
    window.location.href = '/'
  }


  return (
    <div className={cx('header')}>
      <BrdButton basic onClick={handleClickAddButton} ><i className="icon">&#xe802;</i></BrdButton>
      <BrdHeaderSort />
      <BrdHeaderOrder />      
      { (!channel) && <BrdButton basic onClick={handleClickShareButton} ><i className="icon">&#xe804;</i></BrdButton>}
      { (channel) && <BrdButton basic onClick={handleClickHomeButton} ><i className="icon">&#xe803;</i></BrdButton>}
    </div>
  )
}