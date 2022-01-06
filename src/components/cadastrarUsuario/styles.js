import styled from 'styled-components'; 

export const Container = styled.div `
        display: flex;
        height: 100vh;
       justify-content: center;
       align-items: center;
        
`;

export const Form = styled.form `
        background-color: #eff1f3;
        color: #333;
        width: 320px;
        border-radius: 10px;
        padding: 15px;
        font-size: 20px;

        div{
            margin-bottom: 5px;
            display: flex;
            justify-content: space-between;

            input{
                margin: 0 0 15px 0;
                border: none;
                border-radius: 4px;
                height: 30px;
                font-size: 18px;
        }
    }
`;

export const Buttons = styled.div `

        button{
            margin: 0 0 15px 0;
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

        a{
            text-decoration: none;
            background-color: #333;
            padding:10px;
            color: #fff;
            border-radius: 4px;
            height: 18px;
            font-size: 16px;
            font-weight: bold;
        }

`;

export const Logo = styled.div `
   img{
       height: 65vh;
   }
`;