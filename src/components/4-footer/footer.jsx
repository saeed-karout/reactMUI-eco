import { Box, Button, Typography } from "@mui/material";


 const Footer = () => {
  return (
    <Box
    sx={{
        bgcolor:"#2B3445",
        py:1.3,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,

    }}
    >
        <Typography
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{fontSize:{xs:10,sm:13,md:16}}}
        >
            Designed and developed by 
            <Button
            href="https://myportfolio-karout.netlify.app/" target="_blank"
            
            sx={{
                mx:0.5,
                fontSize:"18px",
                textTransform:'capitalize',
                color:"#ff7790"
            }} variant="text" color="primary">
                MHD Saeed Karout
            </Button>

            &copy;2024
        </Typography>
        
    </Box>
  )
}
export default Footer;
