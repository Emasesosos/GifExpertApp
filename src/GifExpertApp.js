import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Imagen from './components/Imagen';
import interestelar from './components/img/Interestelar.jpg';
import stars from './img/stars.jpg';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <div className="gif-expert-app">
            <div className="main-title">
                <Imagen />
                <h2>Gif Expert App</h2>
                <Imagen />
            </div>
            <AddCategory 
                setCategories={setCategories}
            />
            <hr/>
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                                    key={category}
                                    category={category}
                                />;
                    })
                }
            </ol>
            <div className="img-prueba">
                <h3>Imagen Prueba Producción</h3>
                <div className="images">
                    <div>
                        <p>Dinamica = SRC - Components - Img</p>
                        <img src={'.'+interestelar} alt="interestelar"/>
                    </div>
                    <div>
                        <p>Dinamica = SRC - Img</p>
                        <img src={'.'+stars} alt="stars"/>
                    </div>
                    <div>
                        <p>SRC - Components - Img</p>
                        <img src="./components/img/Interestelar.jpg" alt="interestelar"/>
                    </div>
                    <div>
                        <p>SRC - Img</p>
                        <img src="./img/stars.jpg" alt="stars"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GifExpertApp;