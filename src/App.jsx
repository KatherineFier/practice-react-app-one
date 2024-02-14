import React from 'react'
import {useState} from 'react'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from './components/ImgBox'


const App = () => {
  const[distance, setDistance] = useState(1)

  const easing = (num) => Math.pow(num,3)

  const calculateDistance = ([x,y]) => {
    const center = [window.innerWidth/2, window.innerHeight/2]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot/maxHypot
    const easeDistance = easing(distance)
    setDistance(easeDistance)
  }

  const handleMove = ({clientX, clientY}) => {
    calculateDistance([clientX, clientY])
  }
  const handleTouchMove = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }

console.log(distance)
  
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Footer/>
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
      <ImageContainer>
        <ImgBox/>
      </ImageContainer>
      </Wrapper>
    </>
  )
}

export default App;
