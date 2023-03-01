import { useContext } from 'react';
import ReactSlider from 'react-slider';
import SettingsContext from './SettingsContext';
import './slider.css'

function Settings() {
    const settingsInfo = useContext(SettingsContext);

    return (
        <div style={{textAlign:'left'}}>
            <label>work: {settingsInfo.workMinutes}:00</label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                min={1}
                max={120}
            />
            <label>break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider 
                className={'slider sage'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                min={1}
                max={120}
            />
        </div>
    )
}

export default Settings;