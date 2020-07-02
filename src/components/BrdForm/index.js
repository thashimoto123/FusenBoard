import React from 'react'
import BrdFormTextArea from 'components/BrdFormTextArea'
import BrdColorList from 'components/BrdColorList'
import BrdFormLabelList from 'components/BrdFormLabelList'
import BrdButton from 'components/BrdButton'
import cn from 'classnames/bind'
import styles from './style.module.scss'

const cx = cn.bind(styles)

export default ({ handleClickLabelEditButton }) => {
  return (
    <div className={cx('BrdForm')}>
      <div className={cx('inner')}>
        <div className={cx('label')}>カラー</div>
        <div className={cx('input-wrap')}>
          <BrdColorList />
        </div>
        <div className={cx('label')}>テキスト</div>
        <div className={cx('input-wrap')}>
          <BrdFormTextArea />
        </div>
        <div className={cx('label')}>
          ラベル<BrdButton mini={true} basic={true} onClick={handleClickLabelEditButton}>編集</BrdButton>
        </div>
        <BrdFormLabelList />
      </div>
    </div>
  )
}