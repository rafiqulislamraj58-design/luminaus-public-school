import React from 'react'

import Hero from '../components/Hero';
import Activities from '../components/Activities';
import PrincipalMessage from '../components/PrincipalMessage';

const Home = () => {
  return (
    <div>
     <Hero />,
     <Activities />
     <PrincipalMessage />
    </div>
  )
}

export default Home
