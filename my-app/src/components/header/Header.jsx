import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';

// Components
import Search from './Search';
import CustomButtons from './CustomButtons';

import logo from '../../Asset/Header_Data/Home1.webp';

const StyledHeader = styled(AppBar)`
    background: #808080;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 10%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 12px;
    font-style: italic;
`;

const CustomButtonsWrapper = styled (Box)`
    margin: 0 5% 0 auto; 
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logo} alt="logo" style={{ width: 75 }} />

                    <Box>
                        <SubHeading>Select Right</SubHeading>
                    </Box>
                </Component>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </StyledHeader>
    );
};

export default Header;
