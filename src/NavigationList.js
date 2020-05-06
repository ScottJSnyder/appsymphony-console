import React from "react";
import List from "devextreme-react/list";
import history from "./history";
 
const navigation = [
  { id: 1, text: "Home", icon: "home", filePath: "home" },
  { id: 2, text: "Apps", icon: "product", filePath: "apps" },
  { id: 3, text: "Artifacts", icon: "activefolder", filePath: "artifacts" },
  { id: 4, text: "Deployments", icon: "share", filePath: "deployments" },
  { id: 5, text: "Jobs", icon: "preferences", filePath: "jobs" }

];
 
class NavigationList extends React.PureComponent {
    loadView = (e) => {
        history.push(e.addedItems[0].filePath);
        this.props.stateHandler({ isDrawerOpen: false });
    }
    render() {
        return (
            <React.Fragment>
                <List
                    items={navigation}
                    width={200} 
                    selectionMode="single"
                    onSelectionChanged={this.loadView} />
            </React.Fragment>
        );
    }
}
export default NavigationList;