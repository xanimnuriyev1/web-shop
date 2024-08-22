import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import { women_dres } from "../../../data/women_dres"
import { man_dres } from "../../../data/man_dres"


const HomePages = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='space-y-10'>
      <HomeSectionCarousel data={women_dres} sectionName={"Woman dress"}/>
      <HomeSectionCarousel data={man_dres} sectionName={"Man dress"}/>


      </div>
    </div>
  )
}

export default HomePages
