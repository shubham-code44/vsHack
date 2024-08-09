import React, {useState} from "react"
import { motion } from 'framer-motion';
import {Avatar, Box, Card, Grid, Stack, Typography} from "@mui/material";
import AvatarHome from "../images/home/AvatarHome.gif"
import homeCard1 from "../images/home/homeCard1.png"
import homeCard2 from "../images/home/homeCard2.png"
import homeCard3 from "../images/home/homeCard3.png"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Scrollbar from "../Components/scrollbar";
import {PATH_DASHBOARD} from "../routes/paths";
import {useNavigate} from "react-router-dom";
import caseImage1 from "../images/caseStudy3/caseImage1.png";

const pageVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: 50,
    },
};

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
};


export default function Home() {

    const CARD_CONTENT = [
        {
            id: 1,
            photo: homeCard1,
            title1: "Understanding / Research / Product Design / Web & App",
            title2: "Building UX in HR & People Management",
            title3: "@TexlaCulture / SaaS Product",
            title4: "Goal is to Precisely build solutions not just HR management software",
            case: PATH_DASHBOARD.caseStudy1,
            textcolor: "#365B23",
            bgcolor: "#EFF6E8"
        },
        {
            id: 2,
            photo: homeCard2,
            title1: "Research / Web Design / Branding",
            title2: "Website Design",
            title3: "@TexlaCulture / SaaS Product",
            title4: "Making a website go live in just one week was an exceptional challenge.",
            case: PATH_DASHBOARD.caseStudy2,
            textcolor: "#1939B7",
            bgcolor: "#EFF3FF"
        },
        {
            id: 3,
            photo: homeCard3,
            title1: "Understanding / User Interface ",
            title2: "About Us Page Redesign to gain user’s trust &",
            title3: "@Trade India / B2B Experience",
            title4: "Simplified employee engagement and easy access of employment",
            case: PATH_DASHBOARD.caseStudy3,
            textcolor: "#E11B22",
            bgcolor: "#FDEFEF"
        },
    ]
    return (
        <Box sx={{p: 2,mt:5, background: "linear-gradient(-225deg, #FFF9EB 0%, #FFF9EB 100%)", px: {md: 12, xs: 5}}}>
            <Stack justifyContent="center" alignItems="center">
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <img src={AvatarHome} alt="homeAvatar" height={350} width={350}/>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                <Stack spacing={1} justifyContent="center" alignItems="center" sx={{mt: -5}}>
                        <Typography variant="h4" sx={{
                            fontSize: {md:"42px",xs:"34px"}, fontWeight: 700, fontFamily: "Futura", textDecorationLine: "underline",
                            textDecorationThickness: "5px", textDecorationColor: "#FFA500",textUnderlineOffset: "0.8px",textUnderlinePosition: "auto",
                        }}>Neha Chhillar</Typography>
                        <Typography sx={{fontSize: "24px", fontWeight: 700, fontFamily: "Futura", color: "#454F5B"}}>UI/UX
                            DESIGNER</Typography>
                        <Typography sx={{
                            fontSize: "20px",
                            fontWeight: 500,
                            fontFamily: "Futura",
                            color: "#454F5B",
                            fontStyle: "italic"
                        }}>Crafting designs where <Typography component="span"
                                                              sx={{color: "#B76E00"}}> utility </Typography>meets <Typography
                            component="span" sx={{color: "#B76E00"}}>aesthetic</Typography>, balancing user experience
                            with business requirements.</Typography>
                </Stack>
                </motion.div>
            </Stack>
            {CARD_CONTENT?.map((item, index) => (
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <HomeCard data={item} index={index}/>
                </motion.div>
            ))}
        </Box>
    )
}


function HomeCard({data, index}) {
    const navigate = useNavigate()

    return (
        <Box sx={{px: {sm: 20, xs: 0}}}>
            <Card onClick={() => navigate(data?.case)} sx={{
                borderRadius: 6, mt: 8, border: '1px solid',
                borderColor: 'grey.300',
                boxShadow: "none",
                cursor: "pointer", backgroundColor: data?.bgcolor
            }}>
                <Stack direction={{lg: "row", xs: "column"}}>
                    <Box>
                        <Box
                            component="img"
                            src={data?.photo}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: 'auto', // Maintains aspect ratio
                            }}
                        />
                    </Box>
                    <Box>
                        <Stack spacing={{md:4,xs:2}} sx={{px: 4, py: 2}}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                fontFamily: "Futura",
                                color: "#919EAB"
                            }}>{data?.title1}</Typography>
                            <Box>
                                <Typography sx={{
                                    color: data?.textcolor,
                                    fontSize: {md:"24px",xs:"17px"},
                                    fontWeight: 700,
                                    fontFamily: "Futura"
                                }}>{data?.title2}</Typography>
                                {data?.id === 3 && <Typography sx={{
                                    color: data?.textcolor,
                                    fontSize: {md:"24px",xs:"17px"},
                                    fontWeight: 700,
                                    fontFamily: "Futura"
                                }}>confidence.</Typography>}
                                <Typography sx={{
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    fontFamily: "Futura",
                                    color: "#454F5B"
                                }}>{data?.title3}</Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    fontFamily: "Futura",
                                    color: "#212B36"
                                }}>{data?.title4}</Typography>
                                {data?.id === 3 && <Typography
                                    sx={{fontSize: "18px", fontWeight: 500, fontFamily: "Futura", color: "#212B36"}}>related
                                    tasks.</Typography>}
                            </Box>
                            <Stack direction="row" alignItems="center" gap={1} sx={{mt: 4}}>
                                <Typography sx={{
                                    '&:hover': {
                                        textDecorationLine: "underline",
                                        textDecorationThickness: "4px",
                                        textDecorationColor: "#FFA500"
                                    }, fontSize: "18px", fontWeight: 500, fontFamily: "Futura", color: "#212B36"
                                }}>Case Study </Typography>
                                <TrendingFlatIcon/>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Card>
        </Box>
    )
}