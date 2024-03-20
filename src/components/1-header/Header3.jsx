import { Box, Container, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import WindowIcon from '@mui/icons-material/Window';
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Close } from "@mui/icons-material";
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import Links from "./links";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { useTranslation } from "react-i18next";

const Header3 = () => {
    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return (
        <Container sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 3
        }}>
            <Box>
                <Button


                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        // @ts-ignore
                        bgcolor: theme.palette.ColorSearch.main

                        ,
                        color: theme.palette.text.secondary
                    }}
                // sx={{
                //     display:"flex",
                //     justifyContent:"space-between",
                //     width:"200px",
                // }}

                >
                    <WindowIcon />
                    <Typography
                        sx={{
                            p: 0,
                            textTransform: "capitalize",
                            mx: 1,

                        }}
                    >
                        {t('header3.category')}
                    </Typography>

                    <Box flexGrow={1} />

                    <KeyboardArrowRightIcon />





                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    sx={
                        {
                            width: '240px',
                            ":-khtml-any-link.MuiButtonBase-root": {


                                bgcolor: theme.palette.
                                    // @ts-ignore
                                    ColorSearch.main,
                            }

                        }
                    }
                >

                    <MenuItem  onClick={handleClose}>
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                        {t('header3.Profile')}

                        </ListItemText>

                    </MenuItem>


                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <MenuBookOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                        {t('header3.Books')}

                        </ListItemText>

                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <LaptopMacOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                        {t('header3.electronics')}

                        </ListItemText>

                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SportsEsportsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>
                        {t('header3.games')}

                        </ListItemText>

                    </MenuItem>

                </Menu>
            </Box>

            {useMediaQuery('(min-width:1000px)') && (

                <Stack gap={3} direction={"row"} alignItems={"center"}>
                    <Links  translationKey={"header3.home"} />

                    <Links  translationKey={"header3.order"} />

                    <Links translationKey={"header3.pages"} />
                    <Links  translationKey={"header3.userAccount"} />

                </Stack>
            )

            }





            {useMediaQuery('(max-width:1000px)') && (
                <IconButton onClick={toggleDrawer("top", true)}>
                    <MenuIcon />
                </IconButton>
            )}









            <Drawer 
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                sx={{
                    ".css-entiip":{width:"100%"},
                    ".css-1qdun2q-MuiPaper-root-MuiDrawer-paper": { height: "100%", }
                }}
            >







                <Box sx={{
                    width: 444, mx: "auto", mt: 6,
                    position: "relative", pt: 10
                }}>
                    <Typography variant="h3" sx={{mb:4}}> welcome to ... </Typography>
                    <IconButton onClick={toggleDrawer("top", false)}
                        sx={{
                            ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
                            position: 'absolute', top: 0, right: 0,

                        }}>
                       
                        <Close />
                    </IconButton>




                    {[
                        {
                            mainLink: "Home",
                            subLink: ["Home pag", "profile"]


                        }
                        ,
                        {
                            mainLink: "User Account", subLink: ["Log in", "Register"]
                        },
                        {
                            mainLink: "product", subLink: ["All Products", "Men", "Women"]
                        },
                        {
                            mainLink: "cart", subLink: ["My carts", "My favorite"]
                        }
                    ].map((item) => {
                        return (
                            <Accordion key={item.mainLink} elevation={2} sx={{ bgcolor: "initial" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    {item.mainLink}
                                </AccordionSummary>



                                <List sx={{ py: 0, my: 0 }}>
                                    {item.subLink.map((link) => {
                                        return (
                                            <ListItem key={link} sx={{ py: 0, my: 0 }}>

                                                <ListItemButton>
                                                    <ListItemText primary={link} />
                                                </ListItemButton>
                                            </ListItem>

                                        )
                                    })}


                                </List>

                            </Accordion>
                        )
                    })}

                </Box>
            </Drawer>
        </Container>
    )
}

export default Header3;