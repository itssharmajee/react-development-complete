import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();// as this hook return custom error related to path and all

    // console.log(error);
    

    return (
        <div>
            <h2>Opps!! Something went wrong</h2>
            <h4>
            <p> {error.status} {error.statusText}</p>
            <p>{error.error.message}</p>
            </h4>
        </div>
    )
}

export default Error;