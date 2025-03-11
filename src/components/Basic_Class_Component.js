import React from "react";


    // Basic Counter For testting Class Components how it works 

class BasicClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count1: 5, // declaring state variable inside a contructor
            name: "Positive Counter", // declaring other state variable with string value
        };
    }



    // related to hook like useEffect

    componentDidMount() {
        // used to call API just like useEffect
        console.log("didmount");
        this.interval = setInterval(() => {
            console.log("testing .....");
        }, 1000);
    }

    componentDidUpdate() {
        // for updation purpose
        console.log("didUpdate");
    }

    componentWillUnmount() {
        // tha will only when user move about section to other section to clean Up the resources just like in useEffect we have return;
        console.log("didUnmount");
        clearInterval(this.interval); // here you can see how it is cleaning
    }




    render() {
        const { heading } = this.props;
        const { name } = this.state;

        return (
            <div>
                <p>{heading}</p>

                <p>
                    {name} : {this.state.count1}
                </p>
                {/*accessing the state variable */}
                <button
                    onClick={() =>
                        this.setState({
                            // setState is used to set or update the prev state value
                            count1: this.state.count1 + 1,
                        })
                    }
                >
                    Increment
                </button>
                <button
                    onClick={() =>
                        this.setState({
                            // setState is used to set or update the prev state value
                            count1: this.state.count1 - 1,
                            name: (this.state.name =
                                this.state.count1 < 0
                                    ? "Negative Counter "
                                    : "Positive Counter"),
                        })
                    }
                >
                    Decrement
                </button>
            </div>
        );
    }
}

export default BasicClassComponent;



