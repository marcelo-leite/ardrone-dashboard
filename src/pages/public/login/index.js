// Copyright 2021 marcelo
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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