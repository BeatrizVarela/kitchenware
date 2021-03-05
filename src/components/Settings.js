import "../styles/Settings.scss"
import { BsGear, BsGearWideConnected, BsLockFill, BsArrowCounterclockwise } from 'react-icons/bs'
import { FaBluetooth, FaMoon,FaRegMoon, FaRuler, FaWifi } from 'react-icons/fa'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react'
import { MdDevices } from "react-icons/md"


const Settings = ({darkMode,setdarkMode}) => {

    const SettingsDarkMode = (event) => {
        setdarkMode(!darkMode);
        localStorage.setItem("dark-mode",JSON.stringify(!darkMode))
        
    }

    const [showMessage, setShowMessage] = useState(false);

    return(
        <section className="settings">
           <button onClick={() => setShowMessage(true)} id="Gear"><BsGear /> </button>
            <CSSTransition in={showMessage} timeout={300} classNames="alert" unmountOnExit >
                <div className="settings-open">
                    <button onClick={() => setShowMessage(false)} id="close"> <AiOutlineClose /> </button>
                    <div id="first-row">
                        <div id="wi-fi" className="settings-div">
                            <button className="settings-button"><FaWifi /></button>
                            <h3>Wi-fi</h3>
                        </div>
                        <div id="bluetooth" className="settings-div">
                            <button className="settings-button"><FaBluetooth /></button>
                            <h3>Bluetooth</h3>
                        </div>
                        <div id="notifications" className="settings-div">
                            <button className="settings-button"><IoNotificationsSharp /></button>
                            <h3>Notifications</h3>
                        </div>
                    </div>
                    <div id="second-row">
                        <div id="connected-devices" className="settings-div">
                            <button className="settings-button"><MdDevices /></button>
                            <h3>Connected Devices</h3>
                        </div>
                        <div id="dark" className="settings-div">
                            <button className="settings-button" onClick={SettingsDarkMode}>{darkMode ? <FaMoon /> : <FaRegMoon /> }</button>
                            <h3>{darkMode ? "Light Mode" : "Dark Mode" }</h3>
                        </div>
                        <div id="measurement" className="settings-div">
                            <button className="settings-button"><FaRuler /></button>
                            <h3>Measurement System</h3>
                        </div>
                    </div>
                    <div id="third-row">
                        <div id="privacy" className="settings-div">
                            <button className="settings-button"><BsLockFill /></button>
                            <h3>Privacy</h3>
                        </div>
                        <div id="software-update" className="settings-div">
                            <button className="settings-button"><BsGearWideConnected /></button>
                            <h3>Software Update</h3>
                        </div>
                        <div id="reset" className="settings-div">
                            <button className="settings-button"><BsArrowCounterclockwise /></button>
                            <h3>Reset Settings</h3>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </section>
    );
}
export default Settings