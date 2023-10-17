import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <TextField
      style={{
        width: '80%', // You can adjust the width as needed
        border: '0.5px solid lightgray',
      }}
      variant="outlined"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: 'lightgray' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
