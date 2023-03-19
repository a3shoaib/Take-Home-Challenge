import { useState } from 'react';

export default function Title(name) {
   return <center style={
      {fontFamily: "Lato, Helvetica, sans-serif",
      textDecoration: '#90021f 1.3px'}
      }>
   <h1>{name.name}</h1>
   </center>

}

//font-family: Lato, Helvetica, sans-serif;
