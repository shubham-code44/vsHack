import React,{useState} from "react";
import { motion } from 'framer-motion';
import {
    Box,
    Grid,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import caseImage1 from "../images/caseStudy1/caseImage1.png"
import caseImage2 from "../images/caseStudy1/caseImage2.png"
import caseImage3 from "../images/caseStudy1/caseImage3.png"
import caseImage4 from "../images/caseStudy1/caseImage4.png"
import caseImage5 from "../images/caseStudy1/caseImage5.png"
import caseImage6 from "../images/caseStudy1/caseImage6.png"
import caseImage7 from "../images/caseStudy1/caseImage7.png"
import caseImage8 from "../images/caseStudy1/caseImage8.png"
import caseImage9 from "../images/caseStudy1/caseImage9.png"
import caseImage10 from "../images/caseStudy1/caseImage10.png"
import caseImage11 from "../images/caseStudy1/caseImage11.png"
import caseImage12 from "../images/caseStudy1/caseImage12.png"
import {PATH_DASHBOARD} from "../routes/paths";
import caseImage19 from "../images/caseStudy2/caseImage19.png";
import {styled} from "@mui/material/styles";
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

export default function WebDesignCaseStudyScreen()
{
    const navigate=useNavigate()

    const CHALLENGES=[
        {title:"Sector",description:"Retail, Technology, Health & Pharma, Manufacturing"},
        {title:"Challenge",description:"To redesign TexlaCulture website that connects with small to large enterprises. Focus on organizations ready for HR efficiency but not aware of suitable solutions. Enhance online visibility to reach lay users searching for HRMS with optimized content and intuitive UI."},
        {title:"My Role",description:"Market Research / UX / UI / Brand Visbility"},
        {title:"Project TimeLine",description:"7 Days ( Before handoff to development ) 15 Days ( Live on Google ) "},
    ]

    const SPRINT=[
        {title:"Primary Goal",description:"To redesign website in a way, Users connect and understand well about our offerings that stands out in simplifying HR tasks, employee fostering engagement, data-driven decision making afterall that lead them to take sales enquiry "},
        {title:"Secondary Goal",description:"To create SEO friendly content that helps in generating sales in its in initial phase."},
        {title:"Culture",description:"Depict that TexlaCulure understands cultural HR and Organization values and helps individual to create their own cultures."},
        {title:"Target Audience",description:"HR professionals, business owners, and employees across various sectors looking for a seamless, efficient HRMS solution. "},
        {title:"Voice & Vibe",description:"Empowering, Reassuring complemented by intuitive ui and simplistic UX."},
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
            id:3,
            title1:"Understanding / User Interface ",
            title2:"About Us Page Redesign to gain user’s trust & confidence.",
            title3:"@Trade India / B2B Experience",
            title4:"Simplified employee engagement and easy access of employment",
            case:"",
            textcolor:"#E11B22",
            bgcolor:"#FDEFEF"
        },
    ]

    const connect="Having an Idea? Let's Catch up"

    return(
        <Box sx={{p: 2,mt:7,px:{md:12,xs:5}}}>
            <Stack justifyContent="center" alignItems="center">
                <Stack spacing={1} justifyContent="center" alignItems="center" sx={{mt:5}}>

                     <Typography sx={{fontSize:"16px",fontWeight:500,fontFamily:"Poppins",color:"#637381",fontStyle:"italic"}}>Digital Platform For A SaaS Product</Typography>
                    <Link href="https://texlaculture.ai/" underline="none">
                    <Stack direction="row" alignItems="center" gap={1} sx={{mt:4}}>
                        <Typography sx={{'&:hover': {textDecorationLine: "underline",textDecorationThickness: "4px",textDecorationColor:"#FFA500"},fontSize:"18px",fontWeight:500,fontFamily:"Poppins",color:"#212B36"}}>Texlaculture&apos;s Website </Typography>
                        <TrendingFlatIcon  />
                    </Stack>
                    </Link>
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <Typography variant="h5" sx={{fontFamily:"Poppins",color:"#1939B7",fontWeight:700,fontSize:{md:"18px",xs:"15px"},textAlign:"center"}}>A challenging project to make TexlaCulture website live in a week.</Typography>
                    </Stack>
                    <Grid container spacing={2} alignItems="start" justifyContent="center" sx={{px:{lg:35,xs:"10"}}} >
                        <Grid  xs={12} sx={{mt:2}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage12}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                    {CHALLENGES?.map((item)=>(
                       <>
                            <Grid item xs={12} lg={2} alignItems="start" justifyContent="start">
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                >
                                <Typography variant="body1" sx={{fontWeight:600,fontSize:{md:"18px",xs:"15px"},fontFamily:"Poppins",color:"#454F5B"}}>{item?.title}</Typography>
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
                                <Typography variant="body1" sx={{fontWeight:500,color:"#212B36",fontSize:{md:"16px",xs:"13px"},fontFamily:"Poppins"}}>
                                    {item?.description}
                                </Typography>
                                </motion.div>
                            </Grid>
                       </>
                    ))}
                        <Grid  xs={12} sx={{mt:12}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                            <Typography variant="h5" sx={{color:"#C4CDD5",fontWeight:700,fontFamily:"Poppins"}}>Sprint 1</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                            <Typography variant="h5" sx={{color:"#000",fontWeight:700,fontSize:{md:"28px",xs:"22px"},fontFamily:"Poppins"}}>Research and Strategy</Typography>
                            <Typography variant="body1"  sx={{fontWeight:500,color:"#454F5B",fontSize:{md:"16px",xs:"13px"},fontFamily:"Poppins"}}>The first sprint focused on laying a strong foundation for our redesign strategy through exhaustive market research, clear definition of website goals, brand identity analysis, and understanding TexlaCulture's unique culture and target audience.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12}  sx={{mt:4,p:3,backgroundColor:"#D6E4FF"}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h6" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Insights:</Typography>
                            <Typography variant="body1" sx={{fontWeight:500,color:"#454F5B",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>During this phase, I dived deep into the HR management software market to understand the competitive landscape. I identified a significant opportunity gap in competitors website i.e. uniqueness and individual vibe and culture that could be seen in their products. I took it forward and started setting a goal towards process.</Typography>
                            </motion.div>
                        </Grid>
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                        {SPRINT?.map((item)=>(
                            <Grid  xs={12} sx={{mt:4}}>
                                <Typography variant="h6" sx={{fontWeight:700,color:"#212B36",fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>{item?.title}</Typography>
                                <Typography variant="body1" sx={{fontWeight:500,mt:0.3,color:"#454F5B",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>{item?.description}</Typography>
                            </Grid>
                        ))}
                        </motion.div>
                        <Grid  xs={12} sx={{mt:4}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h6" sx={{color:"#919EAB",fontWeight:500,fontFamily:"Poppins",fontStyle:"italic"}}>I consulted HR veterans on how I could win users’ trust and spark curiosity that would lead them to make a sales inquiry.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:8}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h6" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Benchmarking & Moodboard </Typography>
                            <Typography variant="body1" sx={{mt:0.3,color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Planning a path for a design that's not just about aesthetics but functionality and simplicity.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage1}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>It was decided to go with one color hierarchy, due to the simplified and consistent  </Typography>
                                <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> design that leads user to understand and navigate through the content.</Typography>
                            </Stack>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12}  sx={{mt:4,p:3,backgroundColor:"#D6E4FF"}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h6" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Learnings</Typography>
                            <Typography variant="body1" sx={{color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>
                                During this phase, I dived deep into the HR management software market to understand the competitive landscape. I identified a significant opportunity gap in competitors website i.e. uniqueness and individual vibe and culture that could be seen in their products. I took it forward and started setting a goal towards process.
                            </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="start" justifyContent="center" sx={{px:{lg:35,xs:"10"}}} >
                        <Grid  xs={12} sx={{mt:12}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h5" sx={{color:"#C4CDD5",fontWeight:700}}>Sprint 2</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h5" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Sketching and Designing</Typography>
                            <Typography variant="body1" sx={{color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>After completing the research and strategy phase, we moved on to ideation and sketching. This stage involved brainstorming sessions to generate creative ideas and sketching out initial concepts for the website design. The goal was to create a visually appealing and user-friendly interface that aligns with TexlaCulture's branding and objectives.</Typography>
                            </motion.div>
                            </Grid>
                        <Grid  xs={12}  sx={{mt:4,p:3,backgroundColor:"#D6E4FF"}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h6" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Insights:</Typography>
                            <Typography variant="body1" sx={{color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Delivering a high-quality project on time was made possible through effective collaboration, leveraging design systems, using agile methodology, strategic planning, clear communication, and adaptability.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage2}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>It was decided to go with one color hierarchy, due to the simplified and consistent  </Typography>
                                <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> design that leads user to understand and navigate through the content.</Typography>
                            </Stack>
                            </motion.div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignItems="start" justifyContent="center" sx={{px:{lg:35,xs:"10"}}} >
                        <Grid  xs={12} sx={{mt:12}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h5" sx={{color:"#C4CDD5",fontWeight:700}}>Sprint 3</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h5" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Final Delivery and Development</Typography>
                            <Typography variant="body1" sx={{mt:0.5,color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>With the designs finalized, the next step was to prepare them for development. This involved creating detailed design specifications and assets to ensure a smooth handover to the development team. We prioritized clarity and precision in our documentation to minimize any potential misunderstandings during the development phase.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage3}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:3}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Designed the hero section to instantly convey that users can <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>manage the entire employment </Typography>  </Typography>
                                <Typography variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> journey with the product, <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>showcasing interconnected products that keep </Typography> <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>employees</Typography></Typography>
                                <Typography variant="subtitle1" sx={{fontWeight:700,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> engaged, <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>with clear visuals and brief descriptions to quickly </Typography> <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> highlight the product's benefit.</Typography></Typography>
                            </Stack>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:7}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage4}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:3}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Emphasizes our unique features and <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>customization capabilities as a startup, </Typography> <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> using balanced </Typography>  </Typography>
                                <Typography  variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> descriptions to showcase how our solutions stand out and can be tailored to <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>specific industry & needs.</Typography> </Typography>
                            </Stack>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:7}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage5}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:3}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Stack justifyContent="flex-end" alignItems="end">
                                <Typography variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Builds <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>trust through compelling facts and customer reviews, </Typography> <Typography component="span" variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}> ending with</Typography> <Typography component="span" variant="subtitle1" sx={{fontWeight:700,color:"#000000",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>FAQs </Typography> to ensure </Typography>
                                <Typography  variant="body1" sx={{fontWeight:700,color:"#212B3C",fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>  users have a thorough understanding of our offerings and feel confident in their decision. </Typography>
                            </Stack>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:7}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage6}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:5}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Typography variant="h5" sx={{fontWeight:800,fontFamily:"Poppins",fontSize:{md:"18px",xs:"15px"}}}>Website Landing Page Redesign</Typography>
                            <Typography variant="body1" sx={{mt:0.5,color:"#454F5B",fontWeight:500,fontFamily:"Poppins",fontSize:{md:"16px",xs:"13px"}}}>Below presented is the cleanest 2.O version of the website. This version is under development and will be available once it is feasible and seo friendly tried and tested.</Typography>
                            </motion.div>
                        </Grid>
                        <Grid  xs={12} sx={{mt:7}}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage7}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage8}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage9}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
                                }}
                            />
                            </motion.div>
                        </Grid>
                        <Grid  xs={12}>
                            <motion.div
                                initial="initial"
                                animate="in"
                                exit="out"
                                variants={pageVariants}
                                transition={pageTransition}>
                            <Box
                                component="img"
                                src={caseImage10}
                                alt="Responsive"
                                sx={{
                                    width: '100%', // Makes the image responsive
                                    height: 'auto', // Maintains aspect ratio
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
                            <Link href='mailto:nehachhillar07@gmail.com' style={{ textDecoration:"none",}}>
                            <Stack direction={{md:"row",xs:"column"}} justifyContent="space-around" alignItems="center" spacing={4} sx={{mt:5,py:5,backgroundColor:"#FFFEE0"}}>
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
                                    fontWeight: 500,
                                    textDecoration:"none",
                                    fontFamily: "Futura",
                                    color: "#212B36"
                                }}>{connect}</Typography>
                            </Stack>
                            </Link>
                        </Grid>
                    </Grid>

                </Stack>
            </Stack>
        </Box>
    )
}