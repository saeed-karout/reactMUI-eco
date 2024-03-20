

import  { useContext, useEffect, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslation } from "react-i18next";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";

const options = ["ar", "en"];

const Header1 = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  

  useEffect(() => {
    if (currentLanguage === "ar") {
      document.body.dir = "ltr";
    } else {
      document.body.dir = "ltr";
    }
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    const newLanguage = options[index];
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        py: "3px",
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              bgcolor: "#D23F57",
              fontSize: "10px",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "12px",
              p: "3px 10px",
              mr: 2,
              ml:2,
              lineHeight: "1",
            }}
            variant="body2"
          >
            {t("header.1")}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#fff",
              fontWeight: "300",
            }}
            variant="body2"
          >
            {t("header.2")}
          </Typography>

         

          <Box flexGrow={1} />

          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
            )}
          </IconButton>

          <List component="nav" aria-label="Device settings" sx={{ p: 0, m: 0 }}>
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, paddingLeft: 0 }}
            >
              <ListItemText
                sx={{ ".css-83ijpv-MuiTypography-root": { color: "rgba(255, 255, 255, 0.7)" } }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "14px", p: "4px 8px", minHeight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <XIcon sx={{ fontSize: "16px", color: "#fff" }} />

          <InstagramIcon sx={{ fontSize: "16px", color: "#fff", mx: 1 }} />

          <FacebookIcon sx={{ fontSize: "16px", color: "#fff", mr: 2 }} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
