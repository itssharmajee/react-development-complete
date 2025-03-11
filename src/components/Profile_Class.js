import React from "react";
import { GITHUB_PROFILE_URL } from "../utils/constraints";
import { Link } from "react-router-dom";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };
    }

    async componentDidMount() {
        const response = await fetch(GITHUB_PROFILE_URL + 'itssharmajee');
        const data = await response.json();


        
        this.setState({
            userData: data
        })

    }


    render() {

        const {avatar_url, name, bio, html_url, location } = this.state.userData;
        console.log(name);
        
        return (

            <div className="github-body">


                <div class="profile-container">
                    <img src={avatar_url} alt="User Avatar" className="avatar" />
                    <h1 class="username">{name}</h1>
                    <p class="bio">{bio}</p>
                    <Link to={"https://github.com/"+html_url} className="profile-link" target="_blank">Visit GitHub Profile</Link>
                    <h3>{location}</h3>
                </div>
            </div>

        )
    }
}

export default ProfileClass;
