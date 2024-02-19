import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @keyframes glow{
        0% {
            box-shadow: rgb(252, 210, 23) 0 0 0px;
        }
        100%{
            box-shadow: rgb(252, 210, 23) 0 10px 100px;
        }
    }
body{
    color: #ffff;
    height: 100vh;
    width: 100vw;
    margin:0;
    padding: 0;
    overflow: hidden;
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background: #bf9ded;
    font-family: 'Raleway', sans-serif;
    font-weight:500;
}`

export const Marginals = css`
    box-sizing:border-box;
    display: flex;
    pointer-events: none;
    position: fixed;
    width: 100vw;
    z-index: 1;
`
export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? `glow 3s infinite alternate` : `none`
  }
}))`
display: flex;
flex-wrap: wrap;
position: relative;
height: 600px;
width: 400px;
`
export const Wrapper = styled.section `
    display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;`
