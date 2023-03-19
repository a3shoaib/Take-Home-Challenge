import { useState } from 'react';

export default function Description(description) {
   
   return <center style={
      {fontFamily: "'Courier New', monospace"}
      }>
   <p>{description.description}</p>
   </center>

}