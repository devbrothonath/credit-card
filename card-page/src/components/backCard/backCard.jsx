import React from 'react'
import "./backCard.css"

const backCard = ({cvc}) => {
  return (
    <div>
        <p className='cvcTag'>{cvc}</p>
    </div>
  )
}

export default backCard;