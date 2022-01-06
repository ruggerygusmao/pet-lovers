import styled from 'styled-components';

export const NavB = styled.nav`

    ul{
        display: flex;
        background-color: pink;
        height: 35px;
        font-weight: bold;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;

        a{
            text-decoration: none;
            color: #333;
            padding: 6px;

            :hover{
                background-color: #333;
                color: #fff;
                padding: 6px;
            }
        }
    }
`;