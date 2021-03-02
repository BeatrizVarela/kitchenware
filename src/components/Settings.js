import "../styles/Settings.scss"
import { BsGear } from 'react-icons/bs'
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react'


const Settings = ({darkMode,setdarkMode}) => {
    //{darkMode ? "Light Mode" : "Dark Mode"}
    const SettingsDarkMode = (event) => {
        setdarkMode(!darkMode);
    }

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return(
        <section className="settings">
           <button onClick={() => setShowMessage(true)} id="Gear"><BsGear /> </button>
            <CSSTransition in={showMessage} timeout={300} classNames="alert" unmountOnExit onEnter={() => setShowButton(false)} onExited={() => setShowButton(true)}>
                <div className="settings-open">
                    <button onClick={SettingsDarkMode}>{darkMode ? "Light Mode" : "Dark Mode" }</button>
                    <button onClick={() => setShowMessage(false)} id="close"> Close </button>
                </div>
            </CSSTransition>
        </section>
    );
}
export default Settings