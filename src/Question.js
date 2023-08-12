import './Qs.css';
import Text from './Text.js';
import Slider from './Slider.js';
//import Box from '@mui/material/Box';
//import Slider from '@mui/material/Slider';


function Question(props) {
    return (
        <div id={props.id} className='qsend'>
            <div className='container'>
                <Text content={props.content} />
                <Slider
                    id={props.id}
                />
                <br />
            </div>
            <br />
            <br />
        </div>
    );
}

export default Question;