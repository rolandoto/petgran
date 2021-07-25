import React from 'react'
import { Grid,Image,Link} from './style'


export const ListOfFavs = ({favs ={}}) => {
    return( 

    <Grid>
        {
    favs.map(fav => <Link to={`/detail/${fav.id}`}><Image key={fav.id}  src={fav.src}/></Link>)
}
    </Grid>
       
    )
} 