import React from "react";
 
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./DxComponent.css";
 
import { Drawer } from "devextreme-react/drawer";
import { Toolbar, Item } from "devextreme-react/toolbar";
import NavigationList from "./NavigationList";
 
//import { Router, Route } from "react-router-dom";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from "./Home";
import Apps from "./Apps";
import Artifacts from "./Artifacts";
import Deployments from "./Deployments";
import Jobs from "./Jobs";

import history from "./history";
 
class DxComponent extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            isDrawerOpen: false
        };
        this.buttonOptions = {
            icon: "menu",
            onClick: () => {
                this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
            }
        };
    }
 
    renderList = () => {
        const stateHandler = (newState) => this.setState(newState);
        return (
            <NavigationList stateHandler={stateHandler} />
        );
    }
 
    render() {
        return (

            <React.Fragment>
                    <Toolbar id="toolbar">
                        <Item 
                            widget="dxButton" 
                            options={this.buttonOptions} 
                            location="before" /> 
                    </Toolbar>  
                    <Drawer
                        minSize={37}
                        height={600}
                        revealMode="expand"
                        openedStateMode="overlap"
                        render={this.renderList}
                        opened={this.state.isDrawerOpen} >
                        <div id="view">
                                <div>
                                <BrowserRouter basename="/appsymphony-console" history={history}> 
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/home" component={Home} />
                                    <Route exact path="/apps" component={Apps} />
                                    <Route exact path="/artifacts" component={Artifacts} />
                                    <Route exact path="/deployments" component={Deployments} />
                                    <Route exact path="/jobs" component={Jobs} />
                                </BrowserRouter>        
                                </div>
                        </div>
                    </Drawer>     
            </React.Fragment>
        );
    }
}
export default DxComponent;