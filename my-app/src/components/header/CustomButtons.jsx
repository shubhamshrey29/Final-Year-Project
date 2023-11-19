import { Box, Button, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
    display: flex;
    margin 0 3% 0 auto;
    & > button {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const LoginButton = styled(Button)`
    color: #808080;
    background: #ffff;
    text-tranform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;

`

const CustomButtons = () => {
    return(
        <Wrapper>
            <LoginButton variant = 'contained'>Login</LoginButton>

            <Typography style={{margin: 4, width: 135}}>More</Typography>
        </Wrapper>
    )
}

export default CustomButtons;