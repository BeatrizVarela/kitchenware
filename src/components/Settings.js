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

    if (darkMode){
        document.documentElement.style.setProperty('--background-colour', "#0a0e0f");
        document.documentElement.style.setProperty('--settings-background-colour', "#05070c");
        document.documentElement.style.setProperty('--text-colour', "#edf3f5");
    
      } else {
        document.documentElement.style.setProperty('--background-colour', "#e6ecee");
        document.documentElement.style.setProperty('--settings-background-colour', "#d4d4d4");
        document.documentElement.style.setProperty('--text-colour', "#1d1d1d");
      }

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