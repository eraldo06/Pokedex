import styled from "styled-components";
import {Link} from "react-router-dom"

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &> .brand{
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        color: #17171B;
        text-decoration: none; 
    }
`;

export const BtnGoBack = styled(Link)`
       font-size: 400;
    font-size: 16px;
    line-height: 21px;
    color: #747476;
    text-decoration: none; 
`;