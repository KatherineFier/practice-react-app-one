import React from 'react'
import {Image} from './styles'

const ImgBox = ({x,y}) => {
  console.log(x)
  return (
    <Image $initialX={x} $initialY={y}/>
  )
}

export default ImgBox

