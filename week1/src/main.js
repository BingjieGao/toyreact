import { render, Component, Fragment } from "./toy-react";

class MyComponent extends Component {
    render() {
        return (
            <>
                <h1>My Component!</h1>
                { this.children }
            </>
        );
    }
}

render(
    <>
        <MyComponent>
                <div>123</div>
                <div>456</div>
        </MyComponent>

        <div>789</div>
    </>
, document.getElementById("app"));
