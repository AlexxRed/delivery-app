import styled from '@emotion/styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
    height: fit-content;
    padding-left: 0px;
    border-radius: 5px;
    margin-left: 30px;
    /* margin-right: auto; */
    margin-top:80px;
    background-color: #8080809d;
        @media (max-width: 420px) {
        max-width: 150px;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dotted #2778a7;
    margin-bottom: 0px;
`;

export const ListButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
`;

export const OrderImage = styled.img`
    display: block;
    width: 100px;
    height: 60px;
`;

export const OrderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 440px;
    padding: 15px;
`;
export const OrderText = styled.p`
    display:block;
    color: #0a415a;
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
`;

export const ButtonDelete = styled(DeleteForeverIcon)`
    cursor: pointer;
    margin-left: 15px;
    border-radius: 3px;
    padding: 5px 5px;
    color: #ffffff;
    font-weight: 500;
    &:hover,
    &:focus {
        background-color: #bb4d1a;
    }
`;
export const ButtonAdd = styled(AddCircleOutlineIcon)`
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 5px;
    color: #5e5b5b;
    font-weight: 500;
    &:hover,
    &:focus {
        fill:green;
    }
`;
export const ButtonDecrease = styled(RemoveCircleOutlineIcon)`
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 5px;
    color: #5e5b5b;
    font-weight: 500;
    &:hover,
    &:focus {
        fill: #bb4d1a;
    }
`;
export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;