import React from 'react'
import {GlobalStyle} from './styles'


const App = () => {
    const message = (name) => {
      return `${name} is my dog.`
    }
  
  return(
    <div className="App">
      <GlobalStyle/>
      <h1>Hello there!</h1>
      <h2>{message`Lio`}</h2>
    </div>
  )
}

export default App;
