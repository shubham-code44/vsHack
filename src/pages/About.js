import React from 'react';
import { motion } from 'framer-motion';
import {Container, Grid, Typography, Stack,Box} from "@mui/material";
import useResponsive from "../hooks/UseResponsive";
import {useTheme, styled} from "@mui/material/styles";
import AboutImage1 from "../images/about/aboutImage1.png"
import AboutImage2 from "../images/about/aboutImage2.png"
import caseImage1 from "../images/caseStudy2/caseImage1.png";

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins',
    fontWeight: '400',
}));


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


export default function About() {
    return (
        <Box  sx={{px:{sm:25,xs:3},py:16,background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"}}>
            <Grid container rowGap={3}>
                <Grid item xs={12}>
                    <Who/>
                </Grid>
            </Grid>
        </Box>
    )
};

function Who() {
    const theme = useTheme();
    const isDesktop = useResponsive('up', 'md');
    const isMobile = useResponsive('down', 'sm');
    return (
        <Grid
            container
            spacing={1}
            alignItems="start"
            justifyContent={{xs: 'center', md: 'space-between'}}
            sx={{height: 1}}>
            <Grid item xs={12} md={6} lg={5}>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                <Stack spacing={2} direction="column" justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        src={AboutImage1}
                        alt="Responsive"
                        sx={{
                            width: {md:"60%",xs:"100%"}, // Makes the image responsive
                            height: 'auto', // Maintains aspect ratio
                        }}
                    />
                </Stack>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={7} sx={{mt:7}}>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Typography variant="h6" sx={{fontWeight: '600'}}>Hello,
                        <Typography
                            variant="subtitle2"
                               component="span"
                            sx={{
                                marginLeft:1,
                                fontSize: 20,
                                fontWeight: 400,
                                fontFamily: 'Futura',
                            }}>
                            Thanks for dropping by, Neha Chhillar's profile. She crafts simple, effective designs that resonate with users and meet business goals. In high-pressure situations, her calm approach harmonizes with tight deadlines and complex team dynamics.
                              </Typography>
                    </Typography>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                <Typography  variant="subtitle2"
                    sx={{
                        fontSize: 20,
                        fontWeight: 400,
                        fontFamily: 'Futura',
                        mt: 3,
                    }}>
                    Outside of design, spending time with family fills her with joy and inspiration, which she carries into her work. This harmony of personal happiness and professional dedication nourishes her creativity.
                       </Typography>
                </motion.div>
              {/*  <Stack sx={{mt:2}}>
                    <Typography  variant="h6" sx={{fontWeight:600}}>
                        My Design Process :-
                    </Typography>
                    <Typography  variant="subtitle1" sx={{fontSize: 20, fontWeight: 550, mt: 1}}>
                        1.  Research:
                        <Typography component="span"  variant="subtitle2" sx={{fontSize: 20, fontWeight: 400,ml:1,fontFamily: 'Futura',}}>
                        Conducting user interviews, surveys, and usability tests to gather insights and understand user needs.
                    </Typography>
                    </Typography>
                    <Typography  variant="subtitle1" sx={{fontSize: 20, fontWeight: 550, mt: 1}}>
                        2.  Ideation:
                        <Typography component="span"  variant="subtitle2" sx={{fontSize: 20, fontWeight: 400,ml:1,fontFamily: 'Futura',}}>
                            Sketching initial concepts, creating user personas, and developing scenarios.
                        </Typography>
                    </Typography>
                    <Typography  variant="subtitle1" sx={{fontSize: 20, fontWeight: 550, mt: 1}}>
                        3.  Design:
                        <Typography component="span"  variant="subtitle2" sx={{fontSize: 20, fontWeight: 400,ml:1,fontFamily: 'Futura',}}>
                            Crafting wireframes to outline the structure, followed by high-fidelity mockups and interactive prototypes.
                        </Typography>
                    </Typography>
                    <Typography  variant="subtitle1" sx={{fontSize: 20, fontWeight: 550, mt: 1}}>
                        3.  Implementation:
                        <Typography component="span"  variant="subtitle2" sx={{fontSize: 20, fontWeight: 400,ml:1,fontFamily: 'Futura',}}>
                              Collaborating with developers to ensure accurate implementation and conducting final user testing.
                        </Typography>
                    </Typography>
                </Stack> */}
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                <Typography  variant="subtitle2"
                             sx={{
                                 fontSize: 20,
                                 fontWeight: 400,
                                 fontFamily: 'Futura',
                                 mt: 3,
                             }}>
                    She loves to travel and learn about different cultures. It helps her bring new ideas and perspectives into her work.
                         </Typography>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                <Typography  variant="subtitle2"
                             sx={{
                                 fontSize: 20,
                                 fontWeight: 400,
                                 fontFamily: 'Futura',
                                 mt: 3,
                             }}>
                    Let’s use these inspirations to create designs that speak to everyone!
                </Typography>
                <Stack justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        src={AboutImage2}
                        alt="Responsive"
                        sx={{
                            mt:10,
                            width: {md:"40%",xs:"100%"}, // Makes the image responsive
                            height: {md:"40%",xs:"100%"}, // Maintains aspect ratio
                        }}
                    />
                </Stack>
                </motion.div>
            </Grid>
        </Grid>
    );
}
