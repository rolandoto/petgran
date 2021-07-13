import React from 'react'
import {Nav} from './Style'
import { MdHome,MdFavoriteBorder,MdPersonOutline } from 'react-icons/md'
import {Link} from './Style'

export const Navbar = () => {
const  size = '32px'

    return (
       <Nav>
          
        <Link to="/"> <MdHome size={size}/></Link>
          <Link to="/Fav"><MdFavoriteBorder  size={size}/></Link>
           <Link  to="/User"><MdPersonOutline  size={size}/></Link>
       </Nav>
    )
}

