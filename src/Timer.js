import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';
import SettingsButton from './SettingsButton'

const sage = '#b0c4b1';
const pink = '#f5cac3';

function Timer() {
    return(
        <div>
            <CircularProgressbar value={60} text={`${60}%`} styles={buildStyles({
                rotation:0.25, 
                strokeLinecap:'butt', 
                textColor:'black', 
                pathColor:pink, 
                tailColor:'rgba(255,255,255,.2)',
            })} />
            <div style={{marginTop:'20px'}}>
                <PlayButton />
                <PauseButton />
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton />
            </div>
        </div>
    )
}

export default Timer;