import React, { Fragment, useState }  from 'react'
import { Category } from './Component/category/Category'
import { ListCategory } from './Component/lISTCATEGORY/ListCategory'
import { GlobaleStyles} from './Component/style/GlobalesStyles'
import {} from './Component/photo-card/Photo_card'

import { Logo } from './Component/Logo/Logo'
import { ListoComponent } from './containers/ListOfcad'
import { PhotosWitgQuery } from './containers/PhotosWitgQuery'
import { Home } from './Pages/Home'


import {Router} from '@reach/router'
import { Detail } from './Pages/Detail'
import { Navbar } from './Component/Navbar/Navbar'
import Practica from './Pages/Fav'
import {Fav} from './Pages/Fav'
import {User} from './Pages/User'
import {Noregister} from './Pages/Noregister'
import Context from './Context'





export const App = () => {
  //aqio es àra recuperarme el href  href={`/?ruta=${id}
  //en este caso ruta
 // const urlParans =new window.URLSearchParams(window.location.search)
 //aqui terminamos de capturar el dato como tal que es ruta
  //const detailId = urlParans.get('detail')
 // console.log(detailId)

    return (
<div>

<GlobaleStyles/>

     <Logo/>
 
{/*aqui decim */}
    
      <Router>
        <Home path='/'/>
        {/**este id yo se lo estoy pasando por medio del path 
         * el id que le pasa aca es el mismo que recibe
        */}
        {/*esto de aqui se conecta de acuero a el path que les pasemos */}
        <Home path="/pet/:id"/>
        <Detail path='/detail/:detailid'/>  
      
      </Router>
     {/* aqui esta recibiendo el context consumer */}
      <Context.Consumer>

        {
        ({isAuth}) => 
          isAuth ?
          <Router>
          <Fav path="/Fav"/>
          <User path="/User"/>
          </Router>
        :

        <Router>

      <Noregister  path="/Fav"/>
      <Noregister path="/User"/>
        </Router>
        }
          
      </Context.Consumer>


      <Navbar/>
 </div>
    )
}
 