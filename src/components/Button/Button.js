import React, { useState } from 'react';
import '../Button/button.css'
import { Button } from 'react-bootstrap';

const Buttons = (props) => {
    return (
        <button type="button" className="slide">
            <div>Slide</div>
            <i class="icon-arrow-right"></i>
        </button>
    );
}
export default Buttons;