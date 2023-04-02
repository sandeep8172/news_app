import "./Header.css";
import axios from "axios";

const Header = () => {
    return (
        <header className="header_wrapper">
            <div className="list_wrapper">
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
            <i className="fa-solid fa-bars menu_bar"></i>
        </header>
    )
}
export default Header;