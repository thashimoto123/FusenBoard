import React from 'react'
import BrdCard from 'components/BrdCard'
import styles from './style.module.scss'

export default ({handleClickCard = () => {}, cardList = []}) => {
  return (
    <ul className={styles['cardList']}>
    {cardList.map((card) => {
      const description = card.description ? card.description : ''
      const text = card.text ? card.text : '(テキストを入力)'
      return (
        <BrdCard 
          key={`card-${card.id}`} 
          text={text}
          description={description}
          color={card.color} 
          onClick={ handleClickCard(card) } /> 
      )
    })}
    </ul>
  )
}