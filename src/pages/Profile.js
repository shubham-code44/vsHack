import React, {useEffect, useState} from 'react';
import {Box, Button, Card, Container, Paper, Stack, Typography} from "@mui/material";
import {useTheme, styled} from "@mui/material/styles";
import dashboardExpertise from "../images/home/dashboardExpertise.png"
import mobileExpertise from "../images/home/mobileExpertise.png"
import webExpertise from "../images/home/webExpertise.png"
import expertisePin from "../images/home/expertisePin.png"
import moduleDiscussion from "../images/home/moduleDiscussion.png"
import HomeSampleDesign from "./HomeSampleDesign";

const StyledGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"
}));

export default function Profile() {

    return (
        <Box sx={{
            p: 2,
            background: "linear-gradient(-225deg, #FFF9EB 0%, #FFF9EB 100%)"
        }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack sx={{my: 16, mx: 12}}>
                    <Typography variant="h3" sx={{color: "blue"}}>Hi, <Typewriter text="I'm Neha Chhillar," delay={200}
                                                                                  infinite/></Typography>
                    <Typography variant="h3">a <Typography component="span" variant="h3" sx={{fontWeight: 550}}>UI/UX
                        Designer.</Typography></Typography>
                    <Typography variant="subtitle2" sx={{mt: 1, fontWeight: 550}}>I&apos;m a young UX/UI designer with
                        one year of experience, I enjoy exploring the latest trends </Typography>
                    <Typography variant="subtitle2" sx={{fontWeight: 550}}>
                        in UX/UI, participating in design challenges, and enhancing my skills through continuous
                        learning.
                    </Typography>
                    <Stack justifyContent="start" alignItems="start" sx={{mt: 2}}>
                        <Button variant="contained">Let&apos;s Talk</Button>
                    </Stack>
                </Stack>

                <Box>
                    jfnvjd
                </Box>
            </Stack>
            <Stack spacing={6} justifyContent="center" alignItems="center" sx={{mx: 8,}}>
                <Card sx={{
                    borderRadius: 5,
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                }}>
                    <StyledGrid>
                        <Stack direction="row" spacing={3} alignItems="center" justifyContent="center" sx={{
                            background: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
                            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                            borderTopRightRadius: 50,
                            borderBottomRightRadius: 50,
                            my: 6
                        }}>
                            <img src={expertisePin} alt="expertise" height={40} width={40}/>
                            <Typography variant="h5">My Expertise</Typography>
                        </Stack>
                        <Stack alignItems="center" justifyContent="start" sx={{py: 3, px: 3}}>
                            <Stack justifyContent="start" alignItems="start">
                                <img src={webExpertise} alt="web" height={40} width={40}/>
                                <Typography variant="h6" sx={{fontWeight: 550, fontSize: "16px", my: 0.8}}> Responsive
                                    Web Design</Typography>
                                <Typography variant="subtitle2" sx={{fontWeight: 14, fontFamily: "sans-serif"}}> I
                                    specialize in creating responsive web designs that provide seamless user experiences
                                    across various devices.
                                    My approach to responsive design involves understanding the needs and behaviors of
                                    users on different screen sizes and
                                    ensuring that the interface adapts fluidly to these contexts.</Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems="center" justifyContent="start" sx={{py: 3, px: 3}}>
                            <Stack justifyContent="start" alignItems="start">
                                <img src={mobileExpertise} alt="web" height={40} width={40}/>
                                <Typography variant="h6" sx={{fontWeight: 550, fontSize: "16px", my: 1}}> Mobile App
                                    Design</Typography>
                                <Typography variant="subtitle2" sx={{fontWeight: 14, fontFamily: "sans-serif"}}>
                                    I have developed a strong proficiency in designing intuitive and engaging mobile
                                    applications.
                                    My approach to mobile app design is centered around creating seamless and enjoyable
                                    user experiences that drive engagement and satisfaction.
                                </Typography>
                            </Stack>

                        </Stack>
                        <Stack alignItems="center" justifyContent="start" sx={{py: 3, px: 3}}>
                            <Stack justifyContent="start" alignItems="start">
                                <img src={dashboardExpertise} alt="web" height={40} width={40}/>
                                <Typography variant="h6" sx={{fontWeight: 550, fontSize: "16px", my: 1}}> Dashboard
                                    Design</Typography>
                                <Typography variant="subtitle2" sx={{fontWeight: 14, fontFamily: "sans-serif"}}>
                                    I have honed my skills in designing intuitive and visually compelling dashboards.
                                    My work focuses on transforming complex data into actionable insights through clear,
                                    user-centric interfaces that enhance decision-making processes.
                                </Typography>
                            </Stack>
                        </Stack>
                    </StyledGrid>
                </Card>
                <Stack justifyContent="center" alignItems="center" sx={{mt: 3}}>
                    <Typography variant="h6" sx={{fontWeight: 550, fontSize: "24px", my: 1}}>Ideation | Product
                        Strategies.</Typography>
                    <Typography variant="subtitle2" sx={{fontFamily: "sans-serif"}}>
                        For ideation, strategizing, and product discussions, I prefer using pen and paper, a whiteboard,
                        or sketching over any digital tools. This approach allows for a free flow of creativity,
                        enabling countless possible ideas to emerge.
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontFamily: "sans-serif"}}>
                        For both web and app development, I used this method for each module and submodule to
                        understand, create solutions, finalize the flow, and determine possible features for MVP 1
                    </Typography>
                </Stack>
                <>
                    <Card sx={{
                        borderRadius: 3, backgroundImage: `url(${moduleDiscussion})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover", height: "100%", width: "100%"
                    }}>
                        <img src={moduleDiscussion} alt="web"/>
                    </Card>
                </>
                <HomeSampleDesign />
            </Stack>
        </Box>
    )
}

function Typewriter({text, delay, infinite}) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <Typography sx={{color: "black"}} component="span" variant="h3"> {currentText}</Typography>;
};