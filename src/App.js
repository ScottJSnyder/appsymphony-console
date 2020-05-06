import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React, { Component } from "react";
import DxComponent from "./DxComponent";
 
class App extends Component {
    render() {
        return (
            <div className="App">
                <DxComponent />
            </div>
        );
    }
}
export default App;