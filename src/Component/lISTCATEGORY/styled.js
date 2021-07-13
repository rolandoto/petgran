import styled,{css} from 'styled-components'


export const  List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    //esto es para ver manera mas facil  el uso fixed por props 
    //aqui indica si se recibe una valro me trae un true sino false
    ${props => props.fixed && css`
    background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.3);
        left: 0;
        margin: 0 auto;
        max-width: 564px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
        overflow: none !important;
    `}
    

`




export const Items = styled.li `
    padding: 0 8px;
`