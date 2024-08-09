import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Button,
    Box,
    Drawer,
    ListItemButton,
    ListItem,
    List,
    ListItemText,
    AccordionSummary,
    AccordionDetails,
    AccordionActions, Accordion, Grid, Stack, IconButton, Link
} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {PATH_DASHBOARD} from "../../routes/paths";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const navigate = useNavigate()
    const [expanded, setExpanded] = useState(false);
    const pages = [
        {title: 'Portfolio', path: PATH_DASHBOARD.profile},
        {title: 'Resume', path: PATH_DASHBOARD.about},
        {title: "Project", path: PATH_DASHBOARD.about},
        {title: "About", path: PATH_DASHBOARD.about},
        {title: "Contact", path: PATH_DASHBOARD.about},
    ];

    const MENU = [
        {title: "About", path: PATH_DASHBOARD.about},
        {title: "Get In Touch", path: ""},
        {title: "Resume", path: ""},
    ]

    const PROJECT = [
        {title: "Building UX in HR & People Management", path: PATH_DASHBOARD.caseStudy1},
        {title: "Website Design at Texlaculture", path: PATH_DASHBOARD.caseStudy2},
        {title: "Trade India's website redesign to gain user's trust", path: PATH_DASHBOARD.caseStudy3},
    ]


    return (
        <AppBar position="fixed" color="inherit" sx={{
            p: 1,
            backdropFilter: 'blur(1px)',
            boxShadow: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
        }}>
            <Container style={{padding: '0px', maxWidth: "100%"}}>
                {/* <Typography>Neha Chhillar -----</Typography>
            <Box sx={{ flexGrow: 1,justifyContent:"center",alignItems:"center",gap:"24px", display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page,index) => (
                    <Button
                        onClick={()=> navigate(page?.path)}
                        key={index}
                        sx={{ my: 2, color: 'black', display: 'block' }}>
                        {page?.title}
                    </Button>
                ))}
            </Box> */}
                <Accordion expanded={expanded} sx={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    boxShadow: "0",
                    border: 'none', // Border to enhance glass effect
                }}>
                    <AccordionSummary
                        onClick={() => expanded?setExpanded(false):setExpanded(true)}
                        expandIcon={expanded ? <IconButton  iconStyle={{width: 60, height: 60}} onClick={() => setExpanded(false)}><MenuIcon /></IconButton> :
                            <IconButton onClick={() => setExpanded(true)}><MenuIcon/></IconButton>}
                        aria-controls="panel1-content"
                        id="panel1-header">
                        <Typography sx={{fontSize:{md:"24px",xs:"18px"},fontWeight:500,fontFamily:"Futura"}} >Neha Chhillar ----</Typography>
                    </AccordionSummary>
                    <AccordionDetails onClick={() => setExpanded(false)}>
                        <Box sx={{p: 2, mt: 1, px: {md: 15, xs: 5}}}
                             onClick={() => setExpanded(expanded ? false : true)}>
                            <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid xs={12} md={6} sx={{py: 1, px: {lg: 25, xs: 3}}}>
                                    <Typography variant="body2" sx={{fontStyle: "italic"}}>menu - </Typography>
                                    <Stack spacing={2} justifyContent="start" alignItems="start" sx={{mt: 2}}>
                                        <Typography onClick={() => navigate(PATH_DASHBOARD.home)} sx={{
                                            '&:hover': {
                                                textDecorationLine: "underline",
                                                textDecorationThickness: "4px",
                                                textDecorationColor: "#FFA500"
                                            },
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            fontFamily: "Futura",
                                            color: "#212B36"
                                        }}>Home</Typography>
                                        <Typography onClick={() => navigate(PATH_DASHBOARD.about)} sx={{
                                            '&:hover': {
                                                textDecorationLine: "underline",
                                                textDecorationThickness: "4px",
                                                textDecorationColor: "#FFA500"
                                            },
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            fontFamily: "Futura",
                                            color: "#212B36"
                                        }}>About</Typography>
                                        <Link href='mailto:nehachhillar07@gmail.com'>
                                            <Typography sx={{
                                                '&:hover': {
                                                    textDecorationLine: "underline",
                                                    textDecorationThickness: "4px",
                                                    textDecorationColor: "#FFA500"
                                                },
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                fontFamily: "Futura",
                                                color: "#212B36"
                                            }}>Get In Touch</Typography></Link>
                                        <Typography onClick={() => navigate(PATH_DASHBOARD.resume)} sx={{
                                            '&:hover': {
                                                textDecorationLine: "underline",
                                                textDecorationThickness: "4px",
                                                textDecorationColor: "#FFA500"
                                            },
                                            cursor: "pointer",
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            fontFamily: "Futura",
                                            color: "#212B36"
                                        }}>Resume</Typography>
                                    </Stack>
                                </Grid>
                                <Grid xs={12} md={6} sx={{mt: {md: 0, xs: 4}, py: 1, px: {lg: 25, xs: 3}}}>
                                    <Typography variant="body2" sx={{fontStyle: "italic"}}>Projects -</Typography>
                                    <Stack spacing={2} justifyContent="start" alignItems="start" sx={{mt: 2}}>
                                        {PROJECT?.map((item) => (
                                            <Typography onClick={() => navigate(item?.path)} sx={{
                                                '&:hover': {
                                                    textDecorationLine: "underline",
                                                    textDecorationThickness: "4px",
                                                    textDecorationColor: "#FFA500"
                                                },
                                                cursor: "pointer",
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                fontFamily: "Futura",
                                                color: "#212B36"
                                            }}>{item?.title}</Typography>
                                        ))}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </AppBar>
    );
};

export default Navbar;
