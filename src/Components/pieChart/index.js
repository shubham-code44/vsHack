import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {  Typography, Box , Paper} from '@mui/material';
import { styled } from '@mui/system';

const data = [
  { name: 'Green', value: 20, color: '#36B37E', amt: "Rs20000" },
  { name: 'Blue', value: 1, color: '#1939B7',  amt: "Rs29000" },
  { name: 'Yellow', value: 6, color: '#FFAB00',  amt: "Rs28000" },
  { name: 'Red', value: 5, color: '#FF5733',  amt: "Rs70000" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div style={{ background: 'white', padding: '10px', border: '1px solid lightgray' , padding: '10px 20px', width: '100px', borderRadius: '15px', textAlign: "center"}}>
        <p>{payload[0].value} clients</p>
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
        <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.03448 5.82759L8.59061 5.64222L8.31901 4.82742L7.6592 5.37726L8.03448 5.82759ZM9.2069 9.34484L8.65077 9.53021L8.93947 10.3963L9.60688 9.77339L9.2069 9.34484ZM18.5859 1.15814C18.597 0.834581 18.3438 0.563238 18.0202 0.552081L12.7475 0.370263C12.4239 0.359105 12.1526 0.612358 12.1414 0.935919C12.1303 1.25948 12.3835 1.53082 12.7071 1.54198L17.3939 1.7036L17.2323 6.39047C17.2212 6.71403 17.4744 6.98537 17.798 6.99653C18.1215 7.00768 18.3929 6.75443 18.404 6.43087L18.5859 1.15814ZM1.37528 12.14L8.40976 6.27793L7.6592 5.37726L0.62472 11.2393L1.37528 12.14ZM7.47836 6.01297L8.65077 9.53021L9.76302 9.15946L8.59061 5.64222L7.47836 6.01297ZM9.60688 9.77339L18.4 1.56649L17.6 0.70939L8.80692 8.91629L9.60688 9.77339Z" fill="#1939B7"/>
</svg>
<p style={{ color: "blue", margin:"0px"}}>Rs20000</p>
        </div>
      </div>
    );
  }
  return null;
};

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

  const StyledPaper = styled(Paper)(({ theme }) => ({
    border: '1px solid #F4F6F8',
    borderRadius: "15px",
    padding: "20px 20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    height: '380px'
  }));

const PieChartComponent = () => {
  return (
    <div style={{padding: "10px",  }}>
         <div style={{ padding: "20px", 

fontSize: "16px",
fontWeight: "600",
}}>Regional Companies</div>
 <StyledPaper elevation={0}>
    <Scale>
        
    <ScaleItem>
      <Circle bgColor="#36B37E" />
      <Typography variant="body2">{"East"}</Typography>
    </ScaleItem>
    <ScaleItem>
      <Circle bgColor="#1939B7" />
      <Typography variant="body2">{`North`}</Typography>
    </ScaleItem>
    <ScaleItem>
      <Circle bgColor="#FFAB00" />
      <Typography variant="body2">{`South`}</Typography>
    </ScaleItem>
    <ScaleItem>
      <Circle bgColor="#FF5733" />
      <Typography variant="body2">{`West`}</Typography>
    </ScaleItem>
  </Scale>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
      <Tooltip content={<CustomTooltip />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={65}
          outerRadius={120}
          paddingAngle={0}
          cornerRadius={5}
          startAngle={0}
          endAngle={360}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </StyledPaper>
    </div>
  );
};

export default PieChartComponent;
