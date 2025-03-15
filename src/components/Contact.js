import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = ()=>{
    const user = useContext(UserContext);
    return (
        <div>
            <p style={{ textAlign: 'center' }}>User: {user.loggedInUser}</p>
            <form onClick={(e)=>{
                e.preventDefault();
                console.log(e.target);
                
            }}> 
                <label htmlFor="name">Name</label>
                <input name="name" id="name" placeholder="Enter your name"/>
                <label htmlFor="email">Email</label>
                <input name="name" id="email" placeholder="Enter your email"/>
                <input type="submit" value={'Submit'}/>
            </form>
            <button alt="button"> for Testing</button>
        </div>
    )
}

export default Contact;