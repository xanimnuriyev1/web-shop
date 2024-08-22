import React, { useRef } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Button } from '@mui/material';


const HomeSectionCarousel = ({data = [],sectionName}) => {
const carouselRef=useRef(null)

    const responsive = {
        0: { items: 1 },
        500: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const items=data.slice(0,5).map((item)=><HomeSectionCard product={item}/>)
    const slidePrev=()=>{
      if(carouselRef.current){
        carouselRef.current.slidePrev()
      }
    }
    const slideNext=()=>{
      if(carouselRef.current){
        carouselRef.current.slideNext()
      }
    }
    
    
  return (
    <div className='relative px-4 lg:px-8'>
      <h2 className='text-2xl py-2 font-extrabold text-gray-800'>{sectionName}</h2>
      <div className='relative p-5 border'>
      <AliceCarousel
      ref={carouselRef}
        items={items}
       disableButtonsControls
       infinite
       responsive={responsive}
       disableDotsControls
    />
      </div>
     <Button variant="contained" className="z-50" onClick={slideNext} sx={{position:"absolute" ,top:"8rem",right:"0rem"
        ,transform:"translateX(20%) rotate(90deg)",bgcolor:"white"}}
        aria-label='next'
        >
        <ArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
        </Button>
   
      <Button onClick={slidePrev} variant="contained" className="z-50" sx={{position:"absolute" ,top:"8rem",left:"0rem"
      ,transform:"translateX(-10%) rotate(270deg)",bgcolor:"white"}}
      aria-label='next'
      >
      <ArrowLeftIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
      </Button>
    </div>
  )
}

export default HomeSectionCarousel
