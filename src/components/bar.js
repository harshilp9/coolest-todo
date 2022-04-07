import React, { useState } from 'react';

const Bar = (props) => {

    return (
        <div id='bars' style={props.showed ? { display: "none" } : { display: "block" }}>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
            <div class='bar'></div>
        </div>
    )

}

export default Bar;
