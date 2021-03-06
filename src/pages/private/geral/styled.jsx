import styled from 'styled-components';

export const GeralStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
    flex-grow: 1;
    display: flex;
    justify-content: center;
    margin-left: 65px;
    

    .dash-board{
        width: 100%;
        height: 100vh;
        padding: 40px;
        padding-top: 0;
        color: #ffffff;
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
                width: 70%;
                max-width: 70%;
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
                        /* flex-grow: 1; */
                        width: calc(100%/3);
                        max-width:  calc(100%/3);
                      
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
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                
                height: 210px;
                .rmp-value{
                    display: flex;
                    flex-grow: 1;
                    position: relative;
                    height: 100%;
                    margin-top: 10px;
                    
                    .box-item{
                        
                        font-size: 14px;
                        width: calc(100%/4);
                        margin: 10px;
                        
                        margin-top: 0px;
                    }

                }
                
                
            }

            .box-maps{
                width: 30%;
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
    
    
    /* DASH DATA 2 */

    .dash-data{
        .box-acess{
            width: 69%;
            /* height: 300px; */
            display: flex;
            flex-direction: column;
            .box-chart{
                position: relative;
                /* color: #0000000ff; */
                
                width: 100%;
                height: 100px;
                max-height: 100px;
            }
           
            
        }
    }

    

    
       
`;
