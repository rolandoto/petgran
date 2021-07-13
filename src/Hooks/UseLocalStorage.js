import {useState} from 'react'

export function UseLocalStorage(key,initialValue){
    //estado aqui lo recibe como todo
    const [storedValue,setValue] = useState(() => {
      
        try{
            //este es para guardar
            const item = window.localStorage.getItem(key)
            return item != null ? JSON.parse(item) : initialValue 
        }catch (e){
            return initialValue
        }
    })

    //esta funcion la envia 
    const setlocalstorage = (values) => {
        
       ///muy importante qui trae una key original del like igual que el id
        try{
            //set item es para enviar al localstororage
            //aqui me lo envia a local sorage si es un tru o false
            //el aqui ya sabe cuando un dato es values o no con el evento click values
            window.localStorage.setItem(key,JSON.stringify(values))
            setValue(values)
           
        }catch (e) {
            console.error(e)
        }
    }
  
   
    return [storedValue,setlocalstorage]

 
}
