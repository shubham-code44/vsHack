import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      style={{
        width: '18%', 
      }}
    >
      <InputLabel id="dropdown-label">Service Type</InputLabel>
      <Select
        labelId="dropdown-label"
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        label="Select an Option"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
