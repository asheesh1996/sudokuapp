import styled, { css } from "styled-components";
import { theme } from "../../../styles";

export const Card = styled.div`
  ${() => css`
    background-color: ${theme.colors.gray};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    max-height: fit-content;
    padding: 15px;
  `}
`;
