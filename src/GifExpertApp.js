import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Dragon Ball' , 'Samurai x'];
    const [categories, setCategories] = useState(['Super Campeones']);

 //   const handleAdd = () =>{
   //     setCategories([...categories,  'SuperCampeones']);
        //Variación
        //setCategories(cats => [...cats, 'Super campeons']) donde 
        //cats => es el estado anterior
    //}

    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}/>
           <hr></hr>
           <ol>
              {
                  categories.map (category=> 
                  <GifGrid 
                  key={category}
                  category={category}/>  
                  )                 
              }
           </ol>
        </>
    )
}
