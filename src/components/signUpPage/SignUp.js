import "./SignUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPass: "",
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
    const SignUpButtonHandler = (event) => {
        event.preventDefault();
        if (input.password !== input.confirmPass) {
            alert("confirm password is not matching");
        } else
            axios
                .post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
                    {
                        email: input.email,
                        password: input.password,
                        returnSecureToken: true,
                    }
                )
                .then(Response => navigate("/", { replace: true }))
                .catch((err) => alert(err.response.data.error.message));
    };

    return (
        <div className="signup_wrapper">
            <div className="signup_inner_wrapper">
                <h2>Welcom to Bardeen</h2>
                <form onSubmit={SignUpButtonHandler}>
                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={inputValueHandler}
                        placeholder="Email Address"
                    />
                    <input
                        type="password"
                        name="password"
                        value={input.password}
                        onChange={inputValueHandler}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name="confirmPass"
                        value={input.confirmPass}
                        onChange={inputValueHandler}
                        placeholder="Confirm Password"
                    />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
};
export default SignUp;
