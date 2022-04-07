import React, { useState } from 'react';
// import "../index.css"
const ListItem = (props) => {

    const removeHandler = (id) => {
        props.onRemoveToDo(id);
    }

    return (
        <li key={props.id} className={(props.active ? 'dance' : '')}>
            <span className="color-white">{props.title}</span> <i className="color-grey">at</i> <span class="color-pink">{props.date} {props.time}</span>
            <button class="my-remove-button hover-thumb" onClick={() => removeHandler(props.id)}>
                <img srcset="https://img.icons8.com/flat-round/2x/delete-sign.png 6x" alt="Pause Squared icon" loading="lazy" />
            </button>
        </li>
    )

}
export default ListItem;