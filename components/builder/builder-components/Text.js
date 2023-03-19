import { useState } from 'react';

export default function Text(shortText) {
   
   return <center style={
      {fontFamily: "'Courier New', monospace",
      textDecoration:"underline dotted darkred 2px"}
   }>
   <h5>{shortText.shortText}</h5>
   </center>

}

