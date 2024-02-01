import styled from 'styled-components'
import {Marginals} from '../../styles'

export const Footer = styled.footer`
    ${Marginals}
    bottom: 0;
    justify-content: space-between;
    padding:15px;
`
export const H2 = styled.h2`
    font-size: 64px;
    font-weight: 600;
    line-height: 0.7;
    margin: 0;
    padding: 15px
`

export const H2Middle = styled(H2)`
    flex-grow: 1;
    position: relative;
    text-align:center;
`