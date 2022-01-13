import styled from 'styled-components'; 

export const Container = styled.div `
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    
`;

export const Logo = styled.div `
        margin: 0 auto;
        img{
            width: 35vw;
        }
        div{
            color: red;
        }
`;

export const Form = styled.form `
    background-color: #eff1f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    width: 300px;

    label{
        font-size: 20px;
        color: #333;
    }
    input{
        margin: 0 0 15px 0;
        border: none;
        border-radius: 4px;
        height: 30px;
        font-size: 18px;
    }
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
        color: #333;
        font-size: 15px;
        margin: 0 0 15px 0;
    }
`;