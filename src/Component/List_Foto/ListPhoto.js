import React from 'react'

import { Photo_card } from '../photo-card/Photo_card'


//aqui lo envia  para un container listOfcards

 export const Liste = ({data:{photos = []}}= {}) => {
        
    return (
        <div>
            {
                photos.map(List =><Photo_card key={List.id} id={List.id}  {...List} />)
            }
        </div>
    )
}

