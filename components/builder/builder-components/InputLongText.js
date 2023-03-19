import { useState } from 'react';

export default function InputLongText(prop) {
    const defaultMsg = prop.prop[0]?.placeholder
    const styling = prop.prop[0]?.style

    let styles = {
        background: "#dedede",
        border:"solid #7f7f7f",
        minHeight: "2vh",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#000000"
    }
    if (typeof styling !== 'undefined' && styling !== null) {
        Object.assign(styling, styles);
    }

    return <center>
    <textarea
    style={styling}
    type="text" 
    id="myText" 
    size="50"
    value={defaultMsg}>
    </textarea>
    </center>


}