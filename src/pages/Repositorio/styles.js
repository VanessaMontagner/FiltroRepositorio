import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Loading = styled.div`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba( 0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
`;


export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items:center;


    img{
        max-width: 150px;
        border-radius: 10%;
        margin: 20px 0;
    }


    h1{
        font-size: 30px;
        color: #0D2636;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #EEE;
    list-style: none;

    & + li{
        margin-top: 12px;
    }

    li{
        display: flex;
        padding:15px 10px; 
    

        img{
            width:36px;
            height:36px;
            border-radius: 50%;
            border: 2px solid #0D2636;
        }

        div{
            flex:1;
            margin-left: 12px;

            p{
                margin-top: 10px;
                font-size:12px;
                color: #000;
            }
        }

        strong{
            font-size: 15px;
        

            a{
                text-decoration: none;
                color: #222;
                transform: 0.3s;
                

                &:hover{
                    color:#0071DB;
                }
            }

            span{
                
                background:#00063C;
                color:#FFF;
                border-radius: 4px;
                font-size: 12px;
                font-weight: 600;
                padding: 1px 4px;
                margin-right: 10px;
            
            }
        }
    }
`;

export const PageActions = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between ;

    button{
        outline: 0;
        border: 0;
        background: #0D2636;
        color: #FFF;
        margin-top: 60px;
        padding: 4px 10px;
        border-radius: 4px;
        font-weight: 600;

        &:disabled{
        cursor: default;
        opacity: 0; 
        } 
    }
`;


export const FilterList = styled.div`
    margin: 15px 0;

    button{
        outline:0;
        border:0;
        padding: 8px;
        border-radius: 4px;
        margin-top: 20px;
        margin-right: 7px;
        font-weight: 600;
        background:#E2E2E2;
        transform: 0.3s;
                

        &:hover{
            background:#0D2636;
            color:#FFF;
        }

        &:nth-child(${props => props.active + 1}){
            background:#0D2636;
            color: #FFF;
        }
    }

`;