import styled from "styled-components"

type ContainerProps ={
    bgColor: string;
}

export  const Container = styled.span<ContainerProps>`
padding: 5px;
border-radius: 3px;
color: white;
margin-right: 4px;

background: ${(props) => props.bgColor};
`;
