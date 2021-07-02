import React from 'react';
import { Global, css } from 'frontity';
const Base = () => {

    const light = '#EAE7E4';
    const dark= '#555555';
    const primary= '#4CB482';
    return ( 
        
        <Global
            styles = { css`               
                @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap') 
                url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

                :root{
                    --primary : ${primary};
                    --dark : ${dark};
                    --light : ${light};
                    --white: #eeee;


                    --serif : 'Crimson Text', serif;
                    --sans : 'Lato', sans-serif;

                    
                }
                
                html{
                    font-family: var(--sans);
                    overflow-x:hidden;
                   
                }

                * {box-sizing: border-box;}

                body{
                    background-color: var(--light);
                    color: var(--dark);
                    padding:0;
                    margin:0;
                    overflow-x:hidden;
                }

                img{
                                     
                }

                .container{
                    padding:0 10vw;
                    box-sizing: border-box;
                    
                    
                }

                .flex{
                    display:flex;
                    align-items:center;
                    justify-content:space-between; 
                }

                a{
                    text-decoration:none;
                    color: var(--primary)
                }




                


                h1,h2,h3,h4,h5,h6{
                    font-family: var(--serif);
                    font-weight:700;
                    margin-top:0;
                    margin-block-start: 0em;
                    margin-block-end: 0em;
                  
                }

                h6{
                    margin-block-start: 1em;
                    margin-block-end: 1em;
                }

                .text-italic{
                    font-style: italic;
                }


                .text-dark{
                    color: var(--dark)
                }

                .text-primary{
                    color: var(--primary)
                }




                .fs-16{
                    font-size:16px;
                    line-height:22px;
                    word-spacing: 2px;
                }

                .fs-18{
                    font-size:18px;
                    line-height:28px;
                    word-spacing: 2px;
                }

                .fs-24{
                    font-size:24px;
                    line-height:26px;
                    word-spacing: 4px;
                }

                .fs-30{
                    font-size:30px;
                }
                .fs-32{
                    font-size:30px;
                }

                .fs-34{
                    font-size:34px;
                }

                .fs-48{
                    font-size:48px;
                }

                @media (min-width:968px){
                    .fs-md-24{
                        font-size:24px;
                        line-height:38px;
                        word-spacing: 4px;
                    }
                    .fs-md-48{
                        font-size:48px;
                    }
                }


            ` }

        />
     );
}
 
export default Base;