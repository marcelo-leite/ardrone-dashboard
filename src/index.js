
import ReactDOM from "react-dom";
import App from "./App.jsx";
import * as serviceWorker from "./services/ROS/serviceWorker.js";


ReactDOM.render(<App/>, document.getElementById("root"));
serviceWorker.unregister();
