import styled from 'styled-components';

export const GeralStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-left: 65px;
    

    .dash-board{
        width: 100%;
        height: calc(100vh - 65px);
        padding: 40px;
        padding-top: 0;
        color: white;
        display: flex;
        flex-direction: column;

        .dash-info{
            display: flex;
            width: 100%;
            padding: 20px 0px;
            margin: 4px;

            div{
                flex-grow: 1;

            }
            .dash-title{
                
                font-weight: 700;
                font-size: 23px;

            }
            .dash-id{
                display: flex;
                justify-content: flex-end;
                font-size: 12px;

                span:nth-child(1){
                    font-weight: 700;
                }
                span:nth-child(2){
                    text-indent: 10px;
                }
                
            }
        }

        .dash-data{
            display: flex;
            height: 500px;
            .box-row{
                display: flex;
                flex-direction: row;
                flex-grow: 1;

            }
            .box-col{
                display: flex;
                flex-direction: column;
                flex-grow:1;
                
            }
            .box-s{
                border-radius: 5px;
                margin: 4px;
                padding: 25px 25px;
                background: #2C2262;
            }
            .box-title{
                font-size: 13px;        }
            .box-data{
                display: flex;
                flex-grow: 1;
            }
            .box-data-1{

                display: flex;
                flex-grow: 1;
                .box-baterry{
                   
                    /* padding: 30px 15px; */
                }
                .sensor-list{
                    .box-pressao, .box-gyro, .box-altitude{
                        
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        .sensor-value{
                            display: flex;
                            flex-direction: row;
                            flex-grow: 1;
                            justify-content: center;
                            align-items: center;
                            

                            div{
                                font-size: 27px;
                                font-family: 'Open Sans', sans-serif;
                       
                                

                            }
                            span{
                                text-indent: 5px;
                                font-weight: 300;
                                font-size: 14px;
                                
                              
                            }
                            
                        }
                        
                    }
                }

                .box-speed{
                    width: 270px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 0;

                }

            }
            
            .box-pwm{
                position: relative;
                flex-grow: 1;
                height: 120px;
                max-width: 100%;
                display: flex;
                
            }

            .box-maps{
                width: 320px;
                padding: 0;
                position: relative;
                .map-button{
                    position: absolute;
                    z-index: 999;
                    padding: 20px;
                    /* height: 100%;
                    width: 100%; */
                    /* background: #120368be; */

                }
                .dash-button{
                    font-size: 11px;
                    font-weight: 700;
                    margin-right: 10px;
                    border-radius: 2px;
                    padding: 7px 12px;
                    border: 2px solid rgba(150,141,192,0.22);
                    filter: drop-shadow(0px 0px 4px rgba(150, 141, 192, 0.22));
                    background: #2c2262ce;
                    transition: background 1s ;
                   



                    


                }
                .active{
                    border: 1px solid rgba(1,1,1,0);
                    background: #0096AA;
                }
                .dash-button:hover{
                    background: #0096AA;
                    transition: background 1s ;
                }

                
                
                

            }
            

        }
        


    }
    
    
    

    

    
       
`;
