import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';

const sage = '#b0c4b1';
const pink = '#edafb8';

function Timer() {
    return(
        <div>
            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
                rotation:0.25, 
                strokeLinecap:'butt', 
                textColor:'#fff', 
                pathColor:pink, 
                tailColor:'rgba(255,255,255,.2)',
            })} />
            <div style={{marginTop:'20px'}}>
                <PlayButton />
            </div>
        </div>
    )
}

export default Timer;