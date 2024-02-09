import React from 'react'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from './components/ImgBox'


const App = () => {
  
  return(
    <>
      <GlobalStyle/>
      <Header/>
      <Footer/>
      <Wrapper>
      <ImageContainer>
        <ImgBox/>
      </ImageContainer>
      </Wrapper>
    </>
  )
}

export default App;
