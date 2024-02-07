import { useState, useContext } from "react";

import { Box, Button, styled } from "@mui/material";
import LoginDialog from "../login/LoginDiaglog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const LoginButton = styled(Button)`
    color: #808080;
    background: #ffff;
    text-transform: none; /* Corrected typo here */
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
    &:hover {
        background-color: #fff; /* Change the background color on hover to white */
    }
`

const CustomButtons = () => {

    const [open, setOpen] = useState(false);

    const{ account,setAccount } = useContext(DataContext);

    const openDialog = () =>{
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount}/>:
                    <LoginButton variant='contained' onClick={()=>openDialog()}>Login</LoginButton>
            }
            
            
            <LoginDialog open = {open} setOpen = {setOpen}/>
        </Wrapper>
    );
}

export default CustomButtons;
