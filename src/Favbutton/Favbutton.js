import React from 'react'
import { MdFavoriteBorder,MdFavorite } from 'react-icons/md'
import {Button}  from './style'

export const Favbutton = ({liked,likes,onClick}) => {
    const Icom = liked ? MdFavorite : MdFavoriteBorder
    return (
        <Button onClick={onClick}>
        <Icom size="32px" />{likes} likes
        </Button>
    )
   
} 


