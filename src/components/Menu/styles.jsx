import styled from "styled-components";


export const MenuContainer = styled.div`
        display: flex;
        padding: 0 2%;
        justify-content: flex-end;
        flex-direction: column;
        margin-top: 50px;

        svg{
           color: rgba(255, 255, 255, 0.5);
           cursor: pointer;
        }
`
export const ProfileContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    div{
        width: 51%;
    }
    img{
        width: calc(3rem + 55px);
        height:calc(3rem + 55px);
        border-radius: 8px;
        border: 4px solid var(--gray-800);
        outline: 2px solid var(--green-500);
    }
`

export const UserDescriptionContent = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1, p{
        padding: 0;
        margin: 6px;
    }

    h1{
        color: white;
        line-height: 33px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px
    }

    p{
        line-height: 23px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;


        letter-spacing: 0.5px;

        color: #828282;
    }

`

export const ButtonsContent= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`
export const ButtonContainer = styled.div`
    bordeR: 1px solid red;
    display: flex;
    width: 90%;
    align-items: center;
    border:  1px solid rgba(228, 228, 228, 0.2);
    justify-content: space-around;
    border-radius: 8px;
    color: white;
    margin-top: 20px;
    cursor: pointer;
`

export const IconContent = styled.div``
export const MidContent = styled.div``
export const RightContent = styled.div``