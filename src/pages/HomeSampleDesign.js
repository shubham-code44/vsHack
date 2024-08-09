import React,{useState} from "react"
import {Box, Card} from "@mui/material";
import {styled} from "@mui/material/styles";
import dashboardExpertise from "../images/home/dashboardExpertise.png"
import mobileExpertise from "../images/home/mobileExpertise.png"
import webExpertise from "../images/home/webExpertise.png"
import expertisePin from "../images/home/expertisePin.png"
import moduleDiscussion from "../images/home/moduleDiscussion.png"

const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))"
}));

export default function HomeSampleDesign(){

  const sampleProject=[dashboardExpertise,mobileExpertise,webExpertise,expertisePin,moduleDiscussion]
    return(
        <StyledGrid>
            {sampleProject?.map((item,index)=>(
                <Card  sx={{p:2}}>
                    <img src={item} alt={item}   />
                </Card>
                ))}
        </StyledGrid>
    )
}