import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { FaWindowsClose } from 'react-icons/fa'

function Hero() {
 return (
  <Wrapper>
   <div className="d1">
    <div className="c1"> column1 </div>
    <div className="c2"> column2</div>
    <div className="c3"> column3 </div>
    <div className="c4"> column4</div>
   </div>
   <div className="d2">
    <div> column1 </div>
    <div> column2</div>
    <div> column3 </div>
    <div> column4</div>
    <div> column5</div>
   </div>
   {/* <div className="d3">Column 3</div>
   <div className="d4">Column 4</div> */}
  </Wrapper>
 )
}

const Wrapper = styled.div`
 min-height: 95vh;
 display: grid;
 align-items: center;

 background-color: lightgrey;
 /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1650559874/generic_4_nzua4y.jpg')
  no-repeat center center;
 background-size: cover; */
 height: 100%;
 background-color: orange;
 .d1 {
  background-color: red;
  /* background-color: var(--clr-primary-1); */
  transition: var(--transition);
  border-radius: 2%;
  height: 90vh;
  width: 50vh;
  padding: 0.25rem;
  /* background: url('https://res.cloudinary.com/elpawl-llc/image/upload/v1657311447/lessin_law-logos_yddbqn.jpg')
   no-repeat center center;
  background-size: cover; */
  grid-column: 1/3;
  grid-row: 1/2;
  margin-left: 3rem;
  display: grid;
  .c1 {
   background-color: orange;
   grid-column: 1/2;
   grid-row: 1/2;
   margin-left: 0.5rem;
   height: 515px;
   margin-top: 1rem;
   margin-right: 1rem;
   transition: var(--transition);
   border-radius: 2%;
  }
  .c2 {
   background-color: blue;
   grid-column: 2/4;
   grid-row: 1/2;
   margin-right: 1rem;
   height: 515px;
   margin-top: 1rem;
   transition: var(--transition);
   border-radius: 2%;
  }
  .c3 {
   background-color: purple;
   grid-column: 1/4;
   grid-row: 2/3;
   height: 85px;
  }
  .c4 {
   background-color: pink;
   grid-column: 1/4;
   grid-row: 3/4;
   height: 85px;
  }
 }
 .d2 {
  background-color: blue;
  transition: var(--transition);
  border-radius: 2%;
  height: 90vh;
  width: 115vh;
  padding: 0.25rem;
  grid-column: 3/4;
  grid-row: 1/2;
 }
 /* .d3 {
  background-color: orange;
  transition: var(--transition);
  border-radius: 2%;
  height: 25vh;
  width: 40vh;
  padding: 0.25rem;
  grid-column: 1/2;
  grid-row: 2/3;
 }
 .d4 {
  background-color: green;
  transition: var(--transition);
  border-radius: 2%;
  height: 25vh;
  width: 40vh;
  padding: 0.25rem;
  grid-column: 3/4;
  grid-row: 2/3;
 } */
`
export default Hero
