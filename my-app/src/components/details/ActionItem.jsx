import { Box, Button, styled } from "@mui/material";

const LeftContainer = styled (Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const ActionItem =({city}) =>{
    return(
        <div>
            <LeftContainer>
                <Image src={city.url} alt = 'city'/>
                <Button variant="contained">Register</Button>
            </LeftContainer>
        </div>
    )
}

export default ActionItem;