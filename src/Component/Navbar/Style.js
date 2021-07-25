import styled from "styled-components";
import {Link as LinkRouter} from '@reach/router'
import { fadeIn } from "../style/style";





export const Nav = styled.nav`
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  display: flex;
  height: 50px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
  
`

export const Link = styled(LinkRouter)`
align-items: center;
color: #888;
display: inline-flex;
height: 100%;
justify-self: center;
text-decoration: none;

&[aria-current]{
  color:#a900ff;    
//aqui le estoy pasando un para metro cuando cargue el punto me carge un segundo
  &:after{
    ${fadeIn({time:"1s"})}
      content:'·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
      margin-left: 10px;
  } 
}

`