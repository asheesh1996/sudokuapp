import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    ${({ theme }) => css`
        html{
            height: 100%;
            width:100%;

            body {
                display:flex;
                flex-direction:column;
                height: 100%;
                margin:0;

             #root {
                background: radial-gradient(#000000cc,#000000);
                color:${theme.colors.white};
                display:flex;
                font-family:-sans-serif;
                height:100%;
                justify-content: center;
                padding: 15px;

        }
    }
`}
`;
