import { useState } from 'react';

export default function Button(prop) {
    
    var styling = prop.prop?.style
    let styles = {
        background: "#7f7f7f",
        display: "inline-block",
        padding: "10px",
        border: "1px solid grey",
        cursor: "default",
        fontFamily: "'Courier New', monospace",
        margin: "22px",
        cursor: "pointer",
        boxShadow:"0px 2px 10px 5px #97B1BF",
        transform: "translateY(4px)"
    }
    
    Object.assign(styling, styles);
    
    return <center>
    <div><button 
    type="button"
    onclick="{prop.prop?.description}"
    style={styling}
    >
    {prop.prop?.title}
    </button>
    </div>
    </center>



}