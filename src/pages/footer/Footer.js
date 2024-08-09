import React from 'react';
import {IconButton, Link, Stack, Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
       <Stack spacing={2} direction={{xs:"column",sm:"row"}} justifyContent="space-between" alignItems="center" sx={{backgroundColor:"#FFF9EB",p:3,px:{lg:8,xs:3}}}>
              <Typography variant="body2" sx={{fontStyle:"italic",fontFamily:"Furtura",color:"#212B36",fontWeight:500}}>Copyright © 2024 Neha Chhillar. All Rights Reserved.</Typography>
            <Stack direction="row" spacing={4} sx={{mb:2}}>
                <Link href="https://www.instagram.com/neha_chhillar07?igsh=MWV6ZHB3NG9oZ2RpZw==" underline="none">
                <IconButton >
                    <InstagramIcon />
                </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/neha-chhillar-a0ab9a225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" underline="none">
                <IconButton>
                <LinkedInIcon />
                </IconButton>
                </Link>
            </Stack>
       </Stack>
    );
};

export default Footer;
