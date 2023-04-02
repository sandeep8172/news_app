import "./Login.css";

const Login = () => {
    return (
        <div className="login_wrapper">
            <div className="login_inner_wrapper">
                <h2>Welcom to Bardeen</h2>
                <p>Let's log in to launch your automations.</p>
                <form>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <p><span>Create Account</span><span>Forgot Password?</span></p>
                    <button>Sign in</button>
                </form>
                <div className="google_login"><p>Sign in with Google</p></div>
                <div className="github_login"><p>Sign in with Github</p></div>
            </div>
        </div>
    )
}
export default Login;