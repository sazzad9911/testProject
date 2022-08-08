import React from 'react'
import './Cart.css'

export default function Cart({image,headLine,body}) {
  return (
    <div className="Cart">
    <img src={image}>
    </img>
    <h4>{headLine}</h4>
    <p>{body}</p>
    </div>
  )
}

