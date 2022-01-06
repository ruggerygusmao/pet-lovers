import styled from 'styled-components';


export const Form = styled.form `
        width: 350px;
        padding: 10px;
        margin: 0 auto;
        background-color: #eff1f3;

        div{
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            font-size: 20px;

            label{
                font-weight: bold;
                color: #333
            }

            input{
                margin: 0 0 15px 0;
                border: none;
                border-radius: 4px;
                height: 30px;
                font-size: 17px;
        }
     }
`;