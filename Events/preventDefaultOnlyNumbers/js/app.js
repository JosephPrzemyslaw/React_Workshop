import React from "react";
import { createRoot } from "react-dom/client";

const MINIMUM_DIGIT_CHAR_CODE_ASCII = 48;
const MAXIMUM_DIGIT_CHAR_CODE_ASCII = 57;
const WARNING_MSG_DURATION = 2000;
class App extends React.Component {
    state = {
        isError: false,
    }
    render() {
        return (<>
            <input onKeyPress={event => {
                if (event.charCode < MINIMUM_DIGIT_CHAR_CODE_ASCII || event.charCode > MAXIMUM_DIGIT_CHAR_CODE_ASCII) {
                    if (!this.state.isError) {
                        this.setState({
                            isError: true,
                        });
                        setTimeout(() => this.setState({
                            isError: false,
                        }), WARNING_MSG_DURATION);
                    }
                    event.preventDefault();
                } 
            }}></input>
            {this.state.isError && <div id="warning">Only digits allowed !</div>}
        </>)
    }
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
