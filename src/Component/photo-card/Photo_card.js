import React, { Fragment, useEffect, useRef, useState } from 'react'
import {ImgWraper,Img,Button,Article, Div} from './Style'

import { UseLocalStorage } from '../../Hooks/UseLocalStorage'
import { UsenearScrean } from '../../Hooks/UsenearScrean'
import { Favbutton } from '../../Favbutton/Favbutton'
import { ToggleLikeMutation } from '../../containers/TogleLikeMutacion'
import { Link } from '@reach/router'



export const Photo_card = ({id,likes ,src}) => {
    //custon hooks insertion observation
    const [show,element] = UsenearScrean()
    //like me gusta
    const key = `like${id}`
    console.log(key)
    const [liked,setlike] = UseLocalStorage(key,false)
      
  
    
    const handclikLike = () => {
        setlike(!liked)
       
    }


    //todo esto pasa con el ternario
    return (
        <Article ref={element}>
            {
                show &&
                    <Fragment>
                            {/**aqui es donde su valor es la id */}
                            {/**aqui esta diciendo 
                             * ? un operador ternario  que si la ruta es verdadera o falsa
                             */}
                    <Link to={`/detail/${id}`}>
                    <ImgWraper>
                    <Img src={src}/>
                     </ImgWraper>
                    </Link>
       
                </Fragment>

            }
         
         <ToggleLikeMutation>
                {/*mutaciones  de like */}
                {
            (togglelike) =>{
               
                const handclikLike = () => {
                    !liked && togglelike({variables: {
                        input :{id}
                    }})
                    setlike(!liked)
                   
                }
            
               return  <Favbutton  liked={liked} likes={likes} onClick={handclikLike} />
            } 
                }
             
       
         </ToggleLikeMutation>
               
              

     
     

        </Article>
    )
}
