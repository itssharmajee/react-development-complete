import React from "react";
import ProfileClass from "./Profile_Class";
import BasicClassComponent from "./Basic_Class_Component";

function About() {
  const heading = "GitHub Profile";

  return <div>
    {/* <BasicClassComponent/> */}

    <ProfileClass heading={heading}/> {/*calling is same like functional based components, props is passing to the class based Components*/}
    
  </div>;
}

export default About;
