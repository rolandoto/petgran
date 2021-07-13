import React from 'react'
import { PhotosWitgQuery } from '../containers/PhotosWitgQuery'


export const Detail = ({detailid}) => {
    
        //este id va para el graphql para ver que fotos quiero mirar
    return (
        
        <PhotosWitgQuery  id={detailid}/>
        
      
        )
      
}