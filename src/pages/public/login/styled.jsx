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

import styled from 'styled-components';

export const RosLoginStyled = styled.div`
    width: 100%;
    height: 100vh;
    /* background: #120368be; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
        margin: 20px;
        font-size: 50px;
        color: white;
    }
    .input-append{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        input{
            border: 1px solid white ;
            border-color: white;
            padding: 10px;
            width: 50%;
            border-radius: 3px;
            /* margin: 0px 5px; */
            margin: 0.5em;
            background: transparent;
            color: white;
            outline: 0px solid white ;
            transition: outline 2s linear;
        }
        input:focus{
            box-shadow: 0 0 0 .21rem #ffffff3f
           
            

        }
        input::placeholder{
            color: white;
            font-weight: 500;
        }
        button{
            margin: 0px 5px;
            background: blue;
            border: 1px solid blue ;
            border-radius: 3px;
            color: white;
            padding: 10px;
            font-weight: 700;
            
        }
        button:hover{
            background: darkblue;
            border: 1px solid darkblue ;
            
        }

    }

   



`;