import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Paper)(({ theme }) => ({
  border: '1px solid #F4F6F8',
  borderRadius: '15px',
  padding: '20px 15px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: "90px",
  width: "200px",
}));

const ProgressBars = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  gap: "2px",
  marginBottom: theme.spacing(2),
}));

const ProgressBar = styled('div')(({ theme, width, bgColor }) => ({
  height: '15px',
  borderRadius: '10px',
  width: `${width}%`,
  backgroundColor: bgColor,
}));

const Scale = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

const ScaleItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: "20px"
}));

const Circle = styled('div')(({ theme, bgColor }) => ({
  backgroundColor: bgColor,
  borderRadius: '50%',
  width: '15px',
  height: '15px',
  marginRight: '10px'
}));

const UserBaseIndicator = ({ activeUsers, webUsers }) => {
  return (
    <div>
      <Typography variant="h6" style={{fontSize: "16px",
fontWeight: "600",
lineHeight: "24px",
padding: "12px 0px"
}}>Active User Base</Typography>
    <Container>
      <Scale>
        <ScaleItem>
          <Circle bgColor="#1939B7" />
          <Typography variant="body2">{`${activeUsers}% App User`}</Typography>
        </ScaleItem>
        <ScaleItem>
          <Circle bgColor="#36B37E" />
          <Typography variant="body2">{`${webUsers}% Web User`}</Typography>
        </ScaleItem>
      </Scale>
      <ProgressBars>
        <ProgressBar width={activeUsers} bgColor="#1939B7" />
        <ProgressBar width={webUsers} bgColor="#36B37E" />
      </ProgressBars>
    </Container>
    </div>
  );
};

export default UserBaseIndicator;
