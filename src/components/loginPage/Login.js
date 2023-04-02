import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const inputValueHandler = (event) => {
        const data = event.target.value;
        setInput({
            ...input,
            [event.target.name]: data,
        });
    };

    const API_KEY = "AIzaSyCf0Z2VjUZDXtELLJVyvpjciwdKWxA4nxc";
    const SignInButtonHandler = (event) => {
        event.preventDefault();
        axios
            .post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
                {
                    email: input.email,
                    password: input.password,
                    returnSecureToken: true,
                }
            )
            .then(Response => navigate("/home", { replace: true }))
            .catch(err => alert("user not found !"));
    };
    const createAccountHandler = () => {
        navigate("/signup")
    }
    return (
        <div className="login_wrapper">
            <div className="login_inner_wrapper">
                <h2>Welcom to Bardeen</h2>
                <p>Let's log in to launch your automations.</p>
                <form onSubmit={SignInButtonHandler}>
                    <input type="email" name="" value={input.email} onChange={inputValueHandler} placeholder="Email Address" />
                    <input type="password" name="" value={input.password} onChange={inputValueHandler} placeholder="Password" />
                    <p><span onClick={createAccountHandler}>Create Account</span><span>Forgot Password?</span></p>
                    <button type="submit">Sign in</button>
                </form>
                <div className="google_login"><i class="fa-brands fa-google"></i><button>Sign in with Google</button><i class="fa-solid fa-arrow-right"></i></div>
                <div className="github_login"><i class="fa-brands fa-github"></i><button>Sign in with Github</button><i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>
    )
}
export default Login;