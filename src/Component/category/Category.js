
import React from 'react'
import {Link,Image} from './styled'



//el path se lo pàsa por defecto 
export const Category = ({cover,path ="#",emoji,id}) => (
     
        //aqui  donde recibe el href
        
        <Link to={path} >
                
        <Image src={cover}/>
        {emoji}
       {id}
      
             </Link> 

    )