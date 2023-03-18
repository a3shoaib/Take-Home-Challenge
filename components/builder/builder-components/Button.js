import { useState } from 'react';

export default function Button(prop) {
    const defaultMsg = prop.prop?.title
    const styling = prop.prop?.style
    return <button
    type="button"
    onclick={prop.prop?.description}
    style={styling}
    value={defaultMsg}>
    </button>


}