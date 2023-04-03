import "./Header.css";
import { useState } from "react";

let listClass = "list_wrapper"
let menuClass = "fa-solid fa-bars menu_bar"
const Header = () => {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(pre => !pre)
        if (toggle === false) {
            listClass = " list_wrapper show"
            menuClass = "fa-solid fa-bars menu_bar menu_fixed"
        } else if (toggle === true) {
            listClass = "list_wrapper"
            menuClass = "fa-solid fa-bars menu_bar"
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
                    <li>LAIN NYA</li>
                </ul>
                <ul className="right_list">
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-chrome"></i></li>
                    <li><i className="fa-solid fa-code-commit"></i></li>
                </ul>
            </div>
            <i onClick={toggleHandler} className={menuClass}></i>
        </header>
    )
}
export default Header;
