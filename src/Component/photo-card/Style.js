
import styled ,{Keyframes} from 'styled-components'
import {fadeIn} from '../style/style'



export const Article = styled.article`
min-height: 200px;
`

export const ImgWraper = styled.div `
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`



export const Img = styled.img`
${fadeIn({time:"2s"})}
    box-shadow: 0 10px 14px rgba(0,0,0,.2) ;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`


export const Button = styled.button`
display: flex;
align-items: center;
padding-top: 8px;
& svg {
    margin-right: 4px;
}
`

export const Div = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ff1ef8);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`