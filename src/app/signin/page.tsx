import GoogleButton from "../components/GoogleButton";
import SingInForm from "../components/SingInForm";

export default async function Signin(){
    return (
        <div className="stack">        
            <h1>Sing In</h1>
            <GoogleButton />
            <div>or</div>
            <SingInForm/>
        </div>
    )}
