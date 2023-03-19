import { useState } from 'react';

export default function InputNum(defaultVal) {
    const defaultMsg = defaultVal.defaultVal?.placeholder
    var styling = defaultVal.defaultVal?.style

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
    else{
        styling = styles
    }
    return <center>
    <input
    style={styling}
    size="50"
    type="number" 
    id="myNum"
    value={defaultMsg}>
    </input>
    </center>


}

