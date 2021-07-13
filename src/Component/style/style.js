    import {keyframes,css} from 'styled-components'


    export const fadeIn = ({time ='1s', type="ease"} = {}) => 
    css` animation: ${time} ${fadekeyframes} ${type};`


    const fadekeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }


    to {

        filter: blur(0);
        opacity: 1;
    }
    `