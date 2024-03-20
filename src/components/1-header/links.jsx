import { Box, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from "react-i18next";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const Links = ({ translationKey }) => {
    const { t } = useTranslation();
    return (

        <Box className="" sx={{
            position: "relative", display: "flex", alignItems: "center", zIndex: "100",

            ":hover .show-when-hover": {display:"block"},
            ":hover": {cursor:"pointer"}

           
        }} >
            <Typography variant="body1">
                {t(translationKey)}
            </Typography>

            <ExpandMoreIcon sx={{ fontSize: "16px", ml: 1 }} />


            <Box className="show-when-hover " sx={{
                position: "absolute", top: "100%", minWidth: "150px", left: "50%", transform: "TranslateX(-50%)",

                display: "none"
            }}>

                <Paper className=" " sx={{ marginTop: 2 }} >
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }} primary="Dashboard" />

                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{
                                position: "relative", ":hover .sub-link": {
                                    display: "block"
                                }
                            }}>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }} primary="Products" />
                                    <Box flexGrow={1} />
                                    <KeyboardArrowRightOutlined fontSize="small" />
                                </ListItemButton>

                                <Box className=" sub-link" sx={{ display: "none", position: "absolute", top: 0, left: "100%" }}>
                                    <Paper sx={{ minWidth: "150px", ml: "4px" }}>
                                        <nav aria-label="secondary mailbox folders">
                                            <List>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                                        <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }}   primary="Add Product" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }} component="a" href="#simple-list">
                                                        <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }}  primary="Edit Product" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </nav>
                                    </Paper>
                                </Box>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }} primary="Orders" />

                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{ display: "flex", p: 0, px: 1.5 }}>
                                    <ListItemText sx={{ ".MuiTypography-root": { fontSize: "13px" } }} primary="Profile" />

                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                </Paper>
            </Box >
        </Box>

    )
}



export default Links;



