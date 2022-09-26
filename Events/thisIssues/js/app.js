
import React from "react";
import { createRoot } from "react-dom/client";


class App extends React.Component {
    state = {
        content: "",
    }
    handleFocus(event) {
        this.setState({
            content: event.target.value
        });
    }
    // handleFocus = event => {
    //     this.setState({
    //         content: event.target.value
    //     });
    // }
    render() {
        return (<>
            <input onChange={this.handleFocus}></input>
            {/* <input onChange={this.handleFocus.bind(this)}></input>
            <input onChange={() => this.handleFocus()}></input> */}
            <div><h1>{this.state.content}</h1></div>
            <div><h2>{this.state.content}</h2></div>
            <div><h3>{this.state.content}</h3></div>
            <div><h4>{this.state.content}</h4></div>
        </>);
    }
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
