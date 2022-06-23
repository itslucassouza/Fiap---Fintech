import styled from "styled-components";

export const LoginContainer = styled.div`
    border: 1px solid red;
    height: calc(100vh - 22px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 300px){
        justify-content: center;
        align-items: center;
    }
`

export const LoginContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 200px;

`

export const ImageContent = styled.div`
    border: 1px solid red;

`