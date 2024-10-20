import React,{useEffect,useState} from 'react';
import { motion } from 'framer-motion';
import {Container, Grid, Typography, Stack,Box} from "@mui/material";
import {useTheme, styled} from "@mui/material/styles";
import AboutImage2 from "../images/about/aboutImage2.png"
import AboutImage3 from "../images/about/aboutImage3.png"
import AboutImage4 from "../images/about/aboutImage4.png"
import AboutImage5 from "../images/about/aboutImage5.png"
import caseImage11 from "../images/caseStudy2/caseImage11.png";


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

const images = [AboutImage3,AboutImage4,AboutImage5];


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
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

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
                    <Stack direction="row" alignItems="center" justifyContent="center">
                        <Box
                            component="img"
                            src={images[currentIndex]}
                            alt="Responsive"
                            sx={{
                                width: {md:'70%',xs:'80%'}, // Makes the image responsive
                                height: {md:'auto',xs:"30%"} // Maintains aspect ratio
                            }}
                        />
                    </Stack>
                </motion.div>
            </Grid>
            <Grid item xs={12} md={6} lg={7} sx={{mt:{md:7,xs:5}}}>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}>
                    <Typography variant="h6" sx={{fontWeight: '600', fontFamily: 'Futura',}}>Hi,
                        <Typography
                            variant="subtitle2"
                               component="span"
                            sx={{
                                marginLeft:1,
                                fontSize: 20,
                                fontWeight: 400,
                                fontFamily: 'Futura',
                            }}>
                             I’m Vipin Kumar, a
                            <Typography
                            variant="h6"
                            component="span"
                            sx={{
                                marginLeft:1,
                                fontSize: 20,
                                fontWeight: 400,
                                color:"green",
                                fontFamily: 'Futura',
                            }}>Data Analyst </Typography> passionate about extracting insights from data to help businesses make smarter decisions.
                            With a strong foundation in statistical analysis, data visualization, and predictive modeling,
                            I specialize in transforming raw data into meaningful insights that drive growth and efficiency.
                            Whether it’s optimizing processes, improving marketing strategies, or understanding customer behavior,
                            I provide data-driven solutions that lead to actionable results.
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
                    I’m skilled in tools like Python (Pandas and Numpy ), SQL, PowerBi, and Excel, and I’ve worked on projects that have helped businesses increase their revenue, improve customer satisfaction, and optimize operations.
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
                        What makes me unique is my ability to translate complex data into clear, understandable stories that non-technical stakeholders can easily act on. I believe that the true value of data lies not just in analysis, but in how effectively it’s communicated to drive business decisions.
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
                    I loves to travel and learn about different cultures. It helps her bring new ideas and perspectives into her work.
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
                    If you’re looking for someone to turn your data into meaningful insights and actionable strategies, feel free to get in touch or explore my portfolio to see how I can help.
                </Typography>
                <Stack justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        src={AboutImage2}
                        alt="Responsive"
                        sx={{
                            mt:10,
                            width: {md:"60%",xs:"100%"}, // Makes the image responsive
                            height: {md:"50%",xs:"100%"}, // Maintains aspect ratio
                        }}
                    />
                </Stack>
                </motion.div>
            </Grid>
        </Grid>
    );
}


