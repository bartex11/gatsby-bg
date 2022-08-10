import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      key="./src/js/jquery.js"
      crossOrigin="anonymous"
      defer
    />,
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>,
    <script
      src="main.js"
      key="./src/js/main.js"
      crossOrigin="anonymous"
      defer
    />,
 
  ])
}