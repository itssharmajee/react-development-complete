import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = ()=>{
    const user = useContext(UserContext);
    return (
        <div>
            <p style={{ textAlign: 'center' }}>User: {user.loggedInUser}</p>
        </div>
    )
}

export default Contact;