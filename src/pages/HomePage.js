import React from 'react'
import { Hero } from '../components'
import styled from 'styled-components'
const HomePage = () => {
 return (
  <Wrapper>
   <Hero />
   {/* <Featured /> */}
   {/* <Services />
   <Filler />
   <Article /> */}
  </Wrapper>
 )
}

const Wrapper = styled.div`
 min-height: 90vh;
 background-color: red;
`
export default HomePage
