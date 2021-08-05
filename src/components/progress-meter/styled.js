import styled from 'styled-components';

const BaterryMeterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

     .level-shape{
        position: relative;
        background-color: #1a114f;
        
        height: 16px;
        width: 100%; 
        
        margin: 10px 0px;
        margin-right: 15px;
        border-radius: 25px;
        z-index: 1;
        .level-fill{
            position: relative;
            border-radius: 25px;
            background: linear-gradient(90deg, #5d79ef 0%, #74fbfa 100%); 
            height: 100%;
            flex-grow: 1;
            z-index: 2;
        
        }
        
    } 
    .label-percent{
        font-size: 16px;
        font-weight: 500;

    }  
    
  
`;

export default BaterryMeterStyle;
