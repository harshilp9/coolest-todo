import React, { useState } from 'react';
// import "../index.css"
const ListItem = (props) => {

    const removeHandler = (id) => {
        props.onRemoveToDo(id);
    }

    let useInfo = <div><span className="color-white">{props.title}</span> <i className="color-grey">at</i> <span class="color-pink">{props.date} {props.time}</span>
    <button class="my-remove-button hover-thumb" onClick={() => removeHandler(props.id)}>
        <img srcset="https://img.icons8.com/flat-round/2x/delete-sign.png 6x" alt="Pause Squared icon" loading="lazy" />
    </button></div>

    if(!props.date) useInfo = <div><span className="color-white">{props.title}</span>
    <button class="my-remove-button hover-thumb" onClick={() => removeHandler(props.id)}>
        <img srcset="https://img.icons8.com/flat-round/2x/delete-sign.png 6x" alt="Pause Squared icon" loading="lazy" />
    </button></div>
    
    return (
        <li key={props.id} className={(props.active ? 'dance' : '')}>
            {useInfo}
        </li>
    )

}
export default ListItem;