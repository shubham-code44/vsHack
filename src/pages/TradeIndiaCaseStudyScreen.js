import React, {useState} from "react";
import {motion, useAnimation} from 'framer-motion';
import {Box, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Link, Stack, Typography} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import caseImage1 from "../images/caseStudy3/caseImage1.png"
import caseImage2 from "../images/caseStudy3/caseImage2.png"
import caseImage3 from "../images/caseStudy3/caseImage3.png"
import caseImage4 from "../images/caseStudy3/caseImage4.png"
import caseImage5 from "../images/caseStudy3/caseImage5.png"
import caseImage6 from "../images/caseStudy3/caseImage6.png"
import caseImage7 from "../images/caseStudy3/caseImage7.png"
import {PATH_DASHBOARD} from "../routes/paths";
import caseImage11 from "../images/caseStudy1/caseImage11.png";
import {useInView} from "react-intersection-observer";
import {styled} from "@mui/material/styles";
import homeCard2 from "../images/home/homeCard2.png";
import {useNavigate} from "react-router-dom";

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

const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    mt: 5,
    gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))"
}));

export default function TradeIndiaCaseStudyScreen() {

    const navigate=useNavigate()
    const SET = [
        {title: "The Vibe", description: "Vibrant, friendly"},
        {title: "Mindset", description: "Credibility, Building Trust"},
        {title: "Focus", description: "Accessibility + Business Understanding (Language selection feature)"},
        {title: "Aesthetics", description: "Multi Color Theme (Primary, Secondary, Tertiary)"},
    ]

    const connect = "Having an Idea? Let's Catch up"

    const STATEMENT=[
        {title:"Font Hierarchy:",description:"The page lacks a clear font hierarchy, which is essential for guiding the users' attention through different sections effectively. "},
        {title:"Theme Color Consistency: ",description:"There is no consistency in theme colors; multiple shades of primary red are used, which can be visually jarring and detract from a unified brand identity."},
        {title:"Content Overload:",description:"The page contains excessive content that revolves around the main theme, distracting users and hindering focus on key information."},
        {title:"Content Density and Attention Grabbing:",description:" Given that research suggests users spend only about 3 seconds per page, the content journey should be concise, making quick and eye-catching impressions to ensure users grasp the essential information quickly."},
        {title:"Jargon and Clarity:",description:"The Voice of Change section uses language that is not relatable to laypersons; it is confusing and difficult to understand, which could alienate users unfamiliar with industry-specific jargon."},
        {title:"Footer Consistency:",description:" The footer section needs to be consistent with the overall website design. This consistency helps improve user navigation and plays a crucial role in SEO ranking."},
        {title:"Display of Company Statistics: ",description:"From a sales perspective, users are interested in the company’s position in the market. Displaying statistics such as the number of buyers, sellers, and products prominently can provide sufficient proof to build trust."},
    ]
    const STATEMENT2=[
        {title:"Keep the Design Similar: :",description:"The whole website, including the bottom part (footer), should look the same. This helps users move around the site easily and is good for search engine ranking."},
        {title:"Improve Infographics: ",description:"Users like nice-looking pictures and graphics. We should use clearer and sharper images to make sure they catch the eye and look modern."},
        {title:"Less Content, More Impact: ",description:"There's too much text. We should cut it down and only keep what's really important. This way, users can quickly get the info they need without getting overwhelmed."},
        {title:"Uniform Style: ",description:"Right now, there are too many different styles of fonts and reds. Sticking to one font and one shade of red will make everything look smoother and more professional."},
       ]

    const STATEMENT3=[
        {title:"Both utilize About Us sections for engagement, highlighting key statistics and their vision."},
        {title:"They focus on concise, impactful content for quick value proposition communication."},
        {title:"High-quality visuals and consistent branding improve trust and recognition."},
        {title:"Structured website layouts ensure easy navigation and accessibility, accommodating global users"},
        {title:"Alibaba is noted for its worldwide presence with multilingual and localized services, while IndiaMART showcases its extensive network within India."},
        {title:" Each employs brand storytelling, detailing their origins, growth, and values to connect with their audience."},
         ]

    const  CARD_CONTENT=[
        {
            id:1,
            title1:"Understanding / Research / Product Design / Web & App",
            title2:"Building UX in HR & People Management",
            title3:"@TexlaCulture / SaaS Product",
            title4:"Goal is to Precisely build solutions not just HR management",
            case:PATH_DASHBOARD.caseStudy1,
            textcolor:"#365B23",
            bgcolor:"#EFF6E8"
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
    ]


    return (
        <Box sx={{mt:6,p: 2, px: {md: 7, xs: 5}}}>
            <Stack justifyContent="center" alignItems="center">
                <Grid container spacing={2} alignItems="start" justifyContent="center">
                    <Grid xs={10} sx={{borderRadius:8,p:4,mt: 5,backgroundColor:"#E11B221F", px: {lg: 25, xs: 5}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Stack spacing={2} direction={{md:"row",xs:"column"}} justifyContent="space-between" alignItems="start">
                            <Box />
                            <Box
                                component="img"
                                src={caseImage6}
                                alt="Responsive"
                                sx={{
                                    width: {sm:'16%',xs:"100%"}, // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            <Box
                                component="img"
                                src={caseImage7}
                                alt="Responsive"
                                sx={{
                                    width: {sm:'19%',xs:"100%"}, // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                        </Stack>
                            <Stack spacing={2} justifyContent="center" alignItems="center" sx={{mt:5}}>
                                <Typography variant="h5" sx={{fontSize:{md:"16px",xs:"12px"},fontWeight:700,fontFamily:"Poppins",color:"#212B36"}} >
                                    Project: Redesign Trade India’s About us page
                                </Typography>
                                <Typography variant="h5" sx={{fontSize:{md:"16px",xs:"12px"},fontWeight:700,fontFamily:"Poppins",color:"#212B36"}} >
                                    Role: Brand Research / UI / UX
                                </Typography>
                                <Typography variant="h5" sx={{fontSize:{md:"16px",xs:"12px"},fontWeight:700,fontFamily:"Poppins",color:"#212B36"}} >
                                    Spent Hours: 6h
                                </Typography>
                            </Stack>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Typography variant="body1" sx={{mt: 3}}>
                            After analyzing Trade India’s website and the overall vibe and voice of the brand, I
                            realized the nature of the business needs more content, having multiple type of users
                            (manufacturers, Suppliers, Buyers), multiple product categories that need user’s trust to
                            initiate transactions.
                        </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={10} sx={{mt:5}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Box sx={{px:4,pt:4,pb:1,backgroundColor:"#F9FAFB"}}>
                        {SET?.map((item,index) => (
                            <>
                                <Typography variant="body1" >
                                    {item?.title}
                                </Typography>
                                <Typography variant="body1" sx={{mb:3}}>
                                    {item?.description}
                                </Typography>
                            </>
                        ))}
                        </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Stack spacing={2} justifyContent="start" alignItems="start">
                            <Typography variant="h5" sx={{fontWeight:600,color:"#E11B22"}}>Problem Statement</Typography>
                            {STATEMENT?.map((item)=>(
                                <Typography variant="body1" sx={{fontWeight:600,fontFamily:"Poppins",color:"#637381"}}> {item?.title} <Typography component="span" variant="body1" sx={{fontWeight:600,fontFamily:"Poppins",color:"#212B36"}}>{item?.description}</Typography></Typography>

                            ))}
                        </Stack>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{p:3,mt:5,mx:{md:10,xs:2},backgroundColor:"#fffdd0"}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Stack spacing={2} justifyContent="start" alignItems="start">
                            <Typography variant="h5" sx={{fontWeight:600,color:"#FFC20E"}}>Key Insights</Typography>
                            {STATEMENT2?.map((item)=>(
                                <Typography variant="body1" sx={{fontWeight:600,fontFamily:"Poppins",color:"#637381"}}> {item?.title} <Typography component="span" variant="body1" sx={{fontWeight:600,fontFamily:"Poppins",color:"#212B36"}}>{item?.description}</Typography></Typography>

                            ))}
                        </Stack>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Stack spacing={2} justifyContent="start" alignItems="start">
                            <Box>
                            <Typography variant="h5" sx={{fontWeight:600,color:"#36F"}}>Competitors Analysis </Typography>
                            <Typography variant="h6" sx={{fontWeight:600}}>I studied two major competitors - Alibaba (globally spreaded) IndiaMart (Indian Market) </Typography>
                            </Box>
                            {STATEMENT3?.map((item)=>(
                                <Typography variant="body1" sx={{fontWeight:600,fontFamily:"Poppins",color:"#212B36"}}> • {item?.title} </Typography>

                            ))}
                        </Stack>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Box
                            component="img"
                            src={caseImage2}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: '70%', // Maintains aspect ratio
                            }}
                        />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Typography variant="h5" sx={{fontWeight:600,color:"#212B36",mb:2}}>Ideology sketches</Typography>
                        <Box
                            component="img"
                            src={caseImage3}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: '70%', // Maintains aspect ratio
                            }}
                        />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Typography variant="h5" sx={{fontWeight:600,color:"#212B36",mb:2}}>High Fidelity Design</Typography>
                        <Box
                            component="img"
                            src={caseImage4}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: '70%', // Maintains aspect ratio
                            }}
                        />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        <Box
                            component="img"
                            src={caseImage5}
                            alt="Responsive"
                            sx={{
                                width: '100%', // Makes the image responsive
                                height: '70%', // Maintains aspect ratio
                            }}
                        />
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={10}  sx={{mt:5,mx:{md:10,xs:2}}}>
                        <StyledGrid>
                            {CARD_CONTENT?.map((data)=>(
                                <Stack onClick={() => navigate(data?.case)} spacing={3} sx={{cursor:"pointer",px:4,py:2,backgroundColor:data?.bgcolor}}>
                                    <Typography sx={{fontSize:"14px",fontWeight:500,fontFamily:"Futura",color:"#919EAB"}}>{data?.title1}</Typography>
                                    <Box>
                                        <Typography variant="h6" sx={{color:data?.textcolor,fontWeight:700,fontFamily:"Futura"}}>{data?.title2}</Typography>
                                        <Typography sx={{fontSize:"14px",fontWeight:500,fontFamily:"Futura",color:"#454F5B"}}>{data?.title3}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{fontSize:"16px",fontWeight:500,fontFamily:"Futura",color:"#212B36"}}>{data?.title4}</Typography>
                                        {data?.id===3 && <Typography sx={{fontSize:"16px",fontWeight:500,fontFamily:"Futura",color:"#212B36"}}>related tasks.</Typography>}
                                        {data?.id===1 && <Typography sx={{fontSize:"16px",fontWeight:500,fontFamily:"Futura",color:"#212B36"}}>Software.</Typography>}
                                    </Box>
                                    <Stack direction="row" alignItems="center" gap={1} sx={{mt:4}}>
                                        <Typography sx={{'&:hover': {textDecorationLine: "underline",textDecorationThickness: "4px",textDecorationColor:"#FFA500"},fontSize:"18px",fontWeight:500,fontFamily:"Futura",color:"#212B36"}}>Case Study </Typography>
                                        <TrendingFlatIcon  />
                                    </Stack>
                                </Stack>
                            ))}
                        </StyledGrid>
                    </Grid>
                    <Grid  xs={12} md={10}>
                        <Link href='mailto:contact@domain.com'>
                        <Stack  direction={{md:"row",xs:"column"}} justifyContent="space-around" alignItems="center" spacing={4} sx={{mt:5,py:5,backgroundColor:"#FFFEE0"}}>
                            <Box
                                component="img"
                                src={caseImage11}
                                alt="Responsive"

                                sx={{
                                    width: {md:'10%',xs:"40%"}, // Makes the image responsive
                                    height: {md:'10%',xs:"40%"}, // Maintains aspect ratio
                                }}
                            />
                            <Typography variant="h4" sx={{
                                '&:hover': {
                                    textDecorationLine: "underline",
                                    textDecorationThickness: "4px",
                                    textDecorationColor: "#FFA500"
                                },
                                textAlign:"center",
                                cursor: "pointer",
                                textDecoration:"none",
                                fontWeight: 500,
                                fontFamily: "Futura",
                                color: "#212B36"
                            }}>{connect}</Typography>
                              </Stack>
                        </Link>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    )
}