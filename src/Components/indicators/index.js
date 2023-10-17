import React from 'react';
import { Box, Paper, Typography, styled } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  border: '1px solid #F4F6F8',
  borderRadius: "15px",
  padding: "20px 20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
}));

const StyledSection = styled('div')(({ theme, leftBorderColor1 }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  borderLeft: `4px solid ${leftBorderColor1}`,
}));

const StyledSection2 = styled('div')(({ theme, leftBorderColor2 }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderLeft: `4px solid ${leftBorderColor2}`,
  }));

  const StyledSection3 = styled('div')(({ theme, leftBorderColor3 }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderLeft: `4px solid ${leftBorderColor3}`,
  }));

const Indicator = (props) => {
  return (
    <div>
    <Typography variant="h6" style={{fontSize: "16px",
fontWeight: "600",
lineHeight: "24px",
padding: "12px 20px"
}}>{props.heading}</Typography>
    <StyledPaper elevation={0}>
      <Box display="flex" justifyContent="space-evenly">
        <StyledSection leftBorderColor1={props.leftBorderColor1} style={{padding: "8px 12px"}}>
          <Typography variant="subtitle1" style={{fontSize: "15px"}}>{props.label1}</Typography>
          <Typography variant="h6" style={{color: `${props.leftBorderColor1}`, fontWeight: "700", fontSize: "20px"}}>{props.value1}</Typography>
        </StyledSection>
        <StyledSection2 leftBorderColor2={props.leftBorderColor2} style={{padding: "8px 12px"}}>
          <Typography variant="subtitle1" style={{fontSize: "15px"}}>{props.label2}</Typography>
          <Typography variant="h6"  style={{color: `${props.leftBorderColor2}`, fontWeight: "700", fontSize: "20px"}}>{props.value2}</Typography>
        </StyledSection2>
        <StyledSection3 leftBorderColor3={props.leftBorderColor3} style={{padding: "8px 12px"}}>
          <Typography variant="subtitle1" style={{fontSize: "15px"}}>{props.label3}</Typography>
          <Typography variant="h6"  style={{color: `${props.leftBorderColor3}`, fontWeight: "700", fontSize: "20px"}}>{props.value3}</Typography>
        </StyledSection3>
      </Box>
    </StyledPaper>
    </div>
  );
};

export default Indicator;
