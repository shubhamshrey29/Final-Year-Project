import React, { useState } from 'react';
import { Menu, MenuItem, Button, Typography } from '@mui/material';

export const StateCategory = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedState, setSelectedState] = useState(null); // State to store selected state

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    // Call the onSelect prop to update state preference in LoginDialog.jsx
    onSelect(state);
  };

  return (
    <div>
      {!selectedState && (
        <Button onClick={handleClick} style={{
          marginLeft: '22px',
          fontSize: '16px',
          textTransform: 'capitalize',
          color: '#000',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none', 
          outline: 'none',
          cursor: 'pointer'
        }}>Enter Your State Preference *</Button>
      )}
      {selectedState && <Typography sx={{ marginLeft: '30px', fontSize: '18px' }}>{selectedState}</Typography>} {/* Display selected state if it's selected */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleStateSelect('Maharashtra')} sx={{ marginLeft: '22px', fontSize: '16px' }}>Maharashtra</MenuItem>
      </Menu>
    </div>
  );
};


export const CityCategory = ({ onSelect }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null); // State to store selected city
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // Do not close the menu here
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    // Call the onSelect prop to update city preference in LoginDialog.jsx
    onSelect(city);
    setAnchorEl(null); // Close the menu after selecting a city
  };

  return (
    <div>
      {!selectedCity && (
        <Button onClick={handleClick} style={{
          marginLeft: '22px',
          fontSize: '16px',
          textTransform: 'capitalize',
          color: '#000',
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none', 
          outline: 'none',
          cursor: 'pointer'
        }}>Enter Your City Preference *</Button>
      )}
      {selectedCity && <Typography sx={{ marginLeft: '30px', fontSize: '18px' }}>{selectedCity}</Typography>} {/* Display selected city if it's selected */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleCitySelect('Nasik')} sx={{ marginLeft: '22px', fontSize: '16px' }}>Nasik</MenuItem>
        <MenuItem onClick={() => handleCitySelect('Pune')} sx={{ marginLeft: '22px', fontSize: '16px' }}>Pune</MenuItem>
      </Menu>
    </div>
  );
};
