import React from 'react';
import Gimage1 from '../images/Gimage1.jpg';
import Gimage2 from '../images/Gimage2.jpg';
import Gimage3 from '../images/Gimage3.jpg';
import Gimage4 from '../images/Gimage4.jpg';
import Gimage5 from '../images/Gimage5.jpg';
import Gimage6 from '../images/Gimage6.jpg'; 

const Gallery = () => {
    return (
        <div id='gallery'>
            <h1>GALLERY</h1>
            <div className='G-container'>
                <img src={Gimage1} alt="" />
                <img src={Gimage2} alt="" />
                <img src={Gimage3} alt="" />
                <img src={Gimage4} alt="" />
                <img src={Gimage5} alt="" />
                <img src={Gimage6} alt="" />
            </div>
            
        </div>
    )
}

export default Gallery
