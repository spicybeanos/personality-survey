import './Slider.css'
import { useState } from 'react';

function Slider(props) {
    const [val, setValue] = useState(0);
    const valChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="slidecontainer">
            <div className='_text_container'>
                <div className='disagree'>Disagree</div>
                <div className='agree'>Agree</div>
            </div>
            <input type="range"
                min="-1.0" defaultValue='0'
                max="1.0" step="0.25"
                className="slider"
                id={"slider_" + props.id}
                onChange={valChange}
                list={"marks_" + props.id}
            />
            <datalist id={"marks_" + props.id}>
                <option value="0"></option>
            </datalist>

        </div>
    );
}

export default Slider;