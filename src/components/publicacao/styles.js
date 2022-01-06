import styled from 'styled-components'; 
export const Container = styled.div `
        display: flex;
        width: 40%;
        border: 1px solid #333;
        padding: 15px;
        margin-bottom: 15px;
        margin: 0 auto 15px auto;

        article{
            display: flex;
            flex-direction: column;
        }
`;

export const Item = styled.article `

        div{
            display: flex;
            flex-direction: column; 
            justify-content: space-space-evenly;

            label{
                font-weight: bold;
            }
            input{
                margin: 0 0 15px 0;
                border: none;
                border-radius: 4px;
                height: 30px;
                font-size: 15px;
                width: 50%;
                background-color: #eff1f3;;
            }
        }
`;

export const Img = styled.div `
        img{
            width: 20vw;
        }
        div{
            display: flex;
            justify-content: center;

            button{
                margin: 0 0 15px 7px;
                background-color: pink;
                color: #333;
                border: none;
                border-radius: 4px;
                padding: 10px;
                font-weight: bold;
                cursor: pointer;

        :hover{
            background-color: #ffc9d3;
        }
            }
        }
`;