import styled from '@emotion/styled';
import wood from "../../images/wood.jpg";

export const Box = styled.div`
    position: fixed;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
    background-image: url(${wood});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center ;
`;