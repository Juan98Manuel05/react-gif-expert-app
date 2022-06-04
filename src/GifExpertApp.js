import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Stranger Things']);
    //     // setCategories( cats => [ 'Stranger Things', ...cats ]);
    // }

    return (
        <>
            <h2> Test update title with SSH </h2>
            <p> Juan Manuel Camacho </p>       
            <AddCategory setCategories={ setCategories }/>
            <hr/>


            {
                categories.map( (category) =>
                    <GifGrid 
                        key={ category }
                        category={ category }/>
                )
            }
        </>
    )
}

export default GifExpertApp