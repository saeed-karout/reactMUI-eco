import { Container, IconButton, InputBase, Stack, Typography, useTheme } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Badge from '@mui/material/Badge';
import { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ExpandMore } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
    flexGrow: 0.4,
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    '&:hover': {
        border: "1px solid #333",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    minWidth: "240px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '330px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#777"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,

        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));





const Header2 = () => {
    const { t } = useTranslation();

    const options = [
        t('header2.allCategory'),
        t('header2.men'),
        t('header2.women'),
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const theme = useTheme();
    return (
        <Container sx={{ my: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Stack justifyContent={"space-between"} alignItems={"center"}>

                <ShoppingCartIcon
                    sx={{
                        [theme.breakpoints.up('sm')]: {
                            fontSize: "40px",
                        },

                        [theme.breakpoints.down('sm')]: {
                            display:"none"
                        },
                    }}
                />

                <Typography sx={{


                    [theme.breakpoints.down('md')]: {

                        display: "none",




                    }
                }}
                >{t('header2.1')}</Typography>



            </Stack>



            <Search
                sx={{
                    borderRadius: "22px", display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />

                <div>
                    <List
                        component="nav"
                        aria-label="Device settings"

                        sx={{ // @ts-ignore
                            bgcolor: theme.palette.ColorSearch.main, borderBottomRightRadius: 22,
                            borderTopRightRadius: 22,
                            p: 0
                        }}
                    >
                        <ListItem
                            id="lock-button"
                            aria-haspopup="listbox"
                            aria-controls="lock-menu"
                            aria-label="when device is locked"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClickListItem}

                        >
                            <ListItemText

                                secondary={options[selectedIndex]}
                                sx={{ width: 85, "&:hover": { cursor: "pointer" } }}
                            />
                            <ExpandMore sx={{ fontSize: "16px" }} />
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                sx={{ fontSize: "13px" }}

                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Search>
            <div>
             

                  
                          <IconButton aria-label="cart">
                               <StyledBadge badgeContent={4} color="primary" >
                                      <ShoppingCartIcon />
                               </StyledBadge>
                        </IconButton>
                    

                <Link to="/users/login">
                    <IconButton>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </Link >

              

            </div>
        </Container>
    )
}

export default Header2;