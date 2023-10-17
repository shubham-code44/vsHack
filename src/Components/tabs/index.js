import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const tabStyle = {
  fontFamily: 'Public Sans',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '22px',
  letterSpacing: '0px',
  textAlign: 'left',
};

const TabSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs style={{backgroundColor: "white"}}
        value={value}
        onChange={handleChange}
        indicatorColor="success"
        textColor="primary"
      >
        <Tab
          label="Dashboard"
          style={{
            ...tabStyle,
            borderBottom: value === 0 ? '2px solid green' : '2px solid transparent',
            color: value === 0 ? 'black' : 'gray',
          }}
        />
        <Tab
          label="Client Section"
          style={{
            ...tabStyle,
            borderBottom: value === 1 ? '2px solid green' : '2px solid transparent',
            color: value === 1 ? 'black' : 'gray',
          }}
        />
      </Tabs>
      {value === 0 && ""}
      {value === 1 && ''}
    </div>
  );
};

export default TabSection;
