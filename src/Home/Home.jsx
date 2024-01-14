import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import RegistForMoreInfo from './RegistForMoreInfo'
import LocationSprate from './LocationSprate'
import AboutUs from './AboutUs'
import Sponsor from './Sponsor'

const home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <RegistForMoreInfo/>
      <LocationSprate/>
      <AboutUs/>
      <Sponsor/>
    </div>
  )
}

export default home