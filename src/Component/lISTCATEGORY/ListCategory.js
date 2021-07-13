import react, { Fragment, useEffect, useState } from 'react'
import {Category} from '../category/Category'
import {List,Items} from './styled'
import {categories as listadocat } from '../..//api/db.json'
//yo aqui desestruturo el de db.json


export const ListCategory = () => {

    const [categories,setcategories] = useState(listadocat)

        const [loading,setloading] = useState(false)

    console.log(categories)
    const renderlist = (fixed ) => (
        
        //aqui tiene que ir solo ()
//aqui es solo si es verdadero me usa fidex sino vacio
//aqui le pasa como props
        <List fixed={fixed}>
            
     
        {
            loading 
            ? 
            <Items key='cargando'><Category /></Items>
            :
        categories.map(category => <Items key={category.id}  >
            {/**esto patg tiene que ser igual que el home de reach router 
             * y tambien como esta es id que le quiero pasar entonces se 
             * lo pasamos a  home 
            */}
            {/**aqui estoy enviando el id tambien App.js */}
            {/**va a pasel el pet en la url mas el category */}
            <Category {...category}  path={`/pet/${category.id}`}/></Items>) 
            //aqui le esta pasando un path que es el paht que es el href para navegar entre paginas
        }
    </List>
    )


        //llamar que sea verdadero
        const [shoFixed,setShowFixed] = useState(false)
//efeco fixed
//CUANDO SE ACTIVE EL SCROLL SE ME ACTIVA TANTO EL FIXED COMO EL SCROLL DE 
//QUE ES MAYOR A > 200
    useEffect(() => {
        //cuando setloading sea true me a colo loading items category
        setloading(true)
        
        const Onscroll = () =>{
          
            const newShofixed = window.scrollY > 200
              //aqui me va cambiar siempre que haga un scroll
            shoFixed !== newShofixed && setShowFixed(newShofixed) 
            //aqui me camboar el estado depende del scroll a un false o true
            //de acuerdo a la funcion
            setloading(false)
        }
        document.addEventListener('scroll',Onscroll)

        return  ()  => document.removeEventListener('scroll',Onscroll )
    },[shoFixed])

    


    return (
        
        <Fragment>
       {renderlist()}
        {/* aquii es para  shofixed se active el fixed
            al igual que renderlist 
        */}
        {shoFixed && renderlist(true)}
        </Fragment>

    )
}
