import styled from 'styled-components'

export const Image = styled.div.attrs(({$movedX, $movedY})=>({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px`
  }
}))`
    background-image: url('/image.jpeg');
    background-size: 400px 600px;
    height: 100px;
    width: 100px;
    position: relative;
    background-position: ${({$initialX, $initialY}) => `-${$initialX * 100}px -${$initialY * 100}px`};`