import React from "react";
import { GITHUB_PROFILE_URL } from "../utils/constraints";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(GITHUB_PROFILE_URL + 'itssharmajee');
            const data = await response.json();
            this.setState({
                userData: data
            })

        } catch (error) {
            alert(error + ' check you network connection or URL');
        }
    }


    render() {

        const { avatar_url, name, bio, html_url, location } = this.state.userData;
        console.log(name);

        return (

            <div>
                <UserContext.Consumer>
                    {({ loggedInUser }) => {
                        return <h2 style={{ textAlign: "center" }}>User: {loggedInUser}</h2>;
                    }}
                </UserContext.Consumer>


                <div className="github-body">
                    <div className="profile-container">
                        <img src={avatar_url} alt="User Avatar" className="avatar" />
                        <h1 className="username">{name}</h1>
                        <p className="bio">{bio}</p>
                        <Link to={"https://github.com/" + html_url} className="profile-link" target="_blank">Visit GitHub Profile</Link>
                        <h3>{location}</h3>
                    </div>
                </div>
            </div>

        )
    }
}

export default ProfileClass;
