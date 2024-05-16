// Profile.js
import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useNavigate } from 'react-router-dom';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const RecommendText = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logoutUser = () => {
        setAccount('');
        navigate('/');
    };

    const handleRecommendClick = () => {
        navigate(`/api/recommendations/${account}`);
        handleClose();
    };

    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2, marginRight: '80px', cursor: 'pointer' }}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={logoutUser}>
                    <PowerSettingsNewIcon color="primary" fontSize="small" />
                    <Logout>Logout</Logout>
                </MenuItem>

                    <MenuItem onClick={handleRecommendClick}>
                        <RecommendIcon color="primary" fontSize="small" />
                        <RecommendText>Recommend</RecommendText>
                    </MenuItem>
                
            </Component>
        </>
    );
};

export default Profile;
