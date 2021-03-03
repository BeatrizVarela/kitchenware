import "../styles/Settings.scss"
import { BsGear } from 'react-icons/bs'
import { FaMoon,FaRegMoon } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
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
                    <button onClick={() => setShowMessage(false)} id="close"> <AiOutlineClose /> </button>
                    <div id="dark">
                        <button onClick={SettingsDarkMode} id="dark-mode">{darkMode ? <FaMoon /> : <FaRegMoon /> }</button>
                        <h3>{darkMode ? "Light Mode" : "Dark Mode" }</h3>
                    </div>
                </div>
            </CSSTransition>
        </section>
    );
}
export default Settings