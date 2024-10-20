import React from "react"
import {Box,Button,Stack} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import ncCV from "../images/resume/ncCV.png"
import resumePdf from "../images/resume/ncResume.pdf"

export default function Resume(){

    const handleDownload = () => {
        // Path to the file inside the public folder
        const resumeUrl = resumePdf;

        // Create a link element and programmatically click it to start the download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'resume.pdf'); // Specify the download attribute to prompt the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return(
        <Box>
            <Stack direction="row" justifyContent="end" alignItems="center" sx={{mr:10,mt:13,mb:{md:0,xs:8}}}>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{borderRadius:8,textTransform:"capitalize",fontFamily:"Poppins",fontWeight:550}}
                    startIcon={<DownloadIcon />}
                    onClick={handleDownload}>
                    Download Resume
                </Button>
            </Stack>
            <Box
                component="img"
                src={ncCV}
                alt="Responsive"
                sx={{
                    width: "90%", // Makes the image responsive
                    height: "90%", // Maintains aspect ratio
                }}/>
        </Box>
    )
}