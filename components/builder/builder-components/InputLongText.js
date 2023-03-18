import { useState } from 'react';

export default function InputLongText(prop) {
    const defaultMsg = prop.prop?.placeholder
    const styling = prop.prop?.style
    return <input
    style={styling}
    type="text" 
    id="myText" 
    value={defaultMsg}>
    </input>

}