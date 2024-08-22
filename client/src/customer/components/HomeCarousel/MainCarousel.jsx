import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Dres1 from "../../../assets/hdres1.jpg"
import Dres2 from "../../../assets/hdres2.jpg"
import Dres3 from "../../../assets/hdres4.jpg"

const items = [
    <img src={Dres1}  style={{width:"100%",objectFit:"cover",height:"500px"}} alt="" />,
    <img src={Dres2}style={{width:"100%",objectFit:"cover",height:"500px"}}  alt="" />,
    <img src={Dres3} style={{width:"100%",objectFit:"cover",height:"500px"}}  alt="" />,
];

const MainCarousel = () => (
    <AliceCarousel
        items={items}
       autoPlay
       disableButtonsControls
       autoPlayInterval={1000}
       infinite
       responsive={{
        0: { items: 1 },
        1024: { items: 1 }
    }}
    />
);
export default MainCarousel;