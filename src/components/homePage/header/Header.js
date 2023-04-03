import "./Header.css";
import axios from "axios";
import { useState } from "react";

let listClass = "list_wrapper"
const Header = () => {
    const [toggle, setToggle] = useState(false)


    const toggleHandler = () => {
        setToggle(pre => !pre)
        if (toggle === false) {
            listClass = " list_wrapper show"
        } else if (toggle === true) {
            listClass = "list_wrapper"
        }
    }

    return (
        <header className="header_wrapper">
            <p className="logo">D</p>
            <div className={listClass}>
                <ul className="left_list">
                    <li>D</li>
                    <li>LEARN</li>
                    <li>VLOG</li>
                    <li>BOOKMARKS</li>
                    <li>UI KIT</li>
                    <li>HEKKKO</li>
                </ul>
                <ul className="right_list">
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-chrome"></i></li>
                    <li><i className="fa-solid fa-code-commit"></i></li>
                </ul>
            </div>
            <i onClick={toggleHandler} className="fa-solid fa-bars menu_bar"></i>
        </header>
    )
}
export default Header;