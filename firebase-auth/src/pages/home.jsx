import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase/firebase'
import { useState } from "react";

const Home = () =>
{
    const [login, setLogin] = useState(false);
    const REDIRECT_PAGE = "./dashboard.jsx";

    const uiConfig = {
        signInFlow: "popup",
        signInSuccessUrl: REDIRECT_PAGE,
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
            GoogleAuthProvider.PROVIDER_ID,
        ]
    }

    return (
        <div>
            <button onClick={() => setLogin(true)}> Sign In </button>
            <button> Sign Up </button>
            <dialog open={login} onClose={() => setLogin(false)}> 
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}> </StyledFirebaseAuth>
            </dialog>
        </div>
    )
}

export default Home