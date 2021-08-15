
import React, {Component} from "react";
import { RosLoginStyled } from "./styled.jsx";


class RosLogin extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  render() {
    return (
      <RosLoginStyled>
        <h3>ROS Connect</h3>
       
        <div className="input-append">
          <input type="text" placeholder="Type ROSBridge URL" value={this.props.url} onChange={this.props.changeUrl}/>
          <button className="btn-connect" onClick={this.props.ROSConnect}>Conectar</button>
        </div>
      </RosLoginStyled>
    );
  }
}

export default RosLogin;