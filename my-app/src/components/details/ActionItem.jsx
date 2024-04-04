import { Box, styled } from "@mui/material";

const LeftContainer = styled (Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`;


const Image = styled('img')({
    padding: '15px 20px',
    border: '2px solid #f0f0f0',
    width: '450px',
    height :'300px',
});

const ActionItem =({city}) =>{
    return(
        <div>
            <LeftContainer>
                <Image src={city.url} alt = 'city'/>
            </LeftContainer>
        </div>
    )
}

export default ActionItem;