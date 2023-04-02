import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf0Z2VjUZDXtELLJVyvpjciwdKWxA4nxc",
    authDomain: "news-app-bfdb0.firebaseapp.com",
    projectId: "news-app-bfdb0",
    storageBucket: "news-app-bfdb0.appspot.com",
    messagingSenderId: "491803063648",
    appId: "1:491803063648:web:306790f4c0e3b2dc9f9a05"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const provider = new GoogleAuthProvider();

export { auth, provider };