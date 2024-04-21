import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const responce = await signInWithGooglePopup();
        console.log(responce)
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    )
}

export default SignIn