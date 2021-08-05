import styled from 'styled-components';


const navsize = "60px"
export const NavbarLeftStyle = styled.div`
    

        width: ${navsize};
        position: fixed;
        display: flex;
        height: 100%;
        background-color: #1d1350;
        /* background-color: #00eeff; */
        align-items: center;

        .navbar-list{
            display: flex;
            width: 100%;
            flex-direction: column;
            padding: 0;

            .navbar-item{
                display: flex;
                position: relative;
                height: ${navsize};
                width: 100%;
                justify-content: center;
                align-items: center;
                /* font-size: ${navsize}; */
                color: rgba(255, 255, 255, 0.76);

                &:hover{
                    background-color: rgba(255, 255, 255, 0.041);
                    background-color: rgba(255, 255, 255, 0.089);
                    color: white;
                }

                &:nth-child(1){
                    background-color: rgba(255, 255, 255, 0.089);
                    i{
                        background: -webkit-linear-gradient(0deg, #00eeff 0%, #574b9f 70%);
                        background-clip: text;
                        filter: brightness(2);
                        color: transparent;
                    }
                 
                }
                
            }
            
            
           
        }

    

`;
