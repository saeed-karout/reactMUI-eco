import { useTheme } from "@emotion/react";
import { Box, CircularProgress, Container, Dialog, IconButton, Rating, Stack, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";

import { useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";


import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next";
const Main = () => {
    const { t } = useTranslation();


    const handleAlignment = (event, newValue) => {
        if (newValue !== null) {

            setmyData(newValue)
        }
    };

    const theme = useTheme();


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };






    const allProductsAPI = "products?populate=*";
    const menCategoryAPI = "products?populate=*&filters[productCategory][$eq]=men";
    const womenCategoryAPI = "products?populate=*&filters[productCategory][$eq]=women";


    const [myData, setmyData] = useState(allProductsAPI);
    const { data, error, isLoading } = useGetproductByNameQuery(myData);

    const [ClickedProduct, setClickedProduct] = useState({});


    if (isLoading) {
        return (
            <Typography variant="h6">
                <Box sx={{ display: 'flex', justifyContent: "center", py: 11, alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            </Typography>
        )
    }

    if (error) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>

                <Typography variant="h6">
                    {
                        // @ts-ignore
                        error.error}
                </Typography>

                <Typography variant="h6">
                    Please Try again later
                </Typography>
            </Container>
        )
    }


    if (data) {
        return (
            <Container sx={{ mt: 5, py: 9 }}>

                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
                    <Box>
                        <Typography
                            variant="h6"
                        >
                            {t('main.Selected_Products')}
                        </Typography>



                        <Typography variant="body1" >

                        </Typography>
                    </Box>



                    <ToggleButtonGroup

                        color="error"
                        value={myData}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        sx={{
                            ".Mui-selected": {
                                border: "1px solid rgba(233,69,96,0.5)!important",
                                color: "#e94560",
                                bgcolor: "initial"
                            }
                        }}
                    >
                        <ToggleButton className="MyButton" value={allProductsAPI} aria-label="left aligned"
                            // @ts-ignore
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {t('main.All_Products')}

                        </ToggleButton>

                        <ToggleButton sx={{
                            mx: "10px !important", color: theme.
                                // @ts-ignore
                                palette.text.primary
                        }} className="MyButton" value={menCategoryAPI} aria-label="centered" >
                            {t('main.MEN_Category')}
                        </ToggleButton>

                        <ToggleButton className="MyButton" value={womenCategoryAPI} aria-label="right aligned"
                            // @ts-ignore
                            sx={{ color: theme.palette.text.primary }}
                        >
                            {t('main.Women_Category')}

                        </ToggleButton>

                    </ToggleButtonGroup>

                </Stack>


                <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                    <AnimatePresence>
                        {data.data.map((item) => {

                            return (
                                <Card component={motion.section}
                                    key={item.id}
                                    layout
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{
                                        duration: 2, type: "spring",
                                        stiffness: 50,
                                    }}
                                    sx={{
                                        maxWidth: 340, mt: 3, ":hover": {
                                            ".MuiCardMedia-root": { rotate: "1deg", scale: "1.1", transition: "0.38s" }
                                        }
                                    }}>

                                    <CardMedia
                                        sx={{
                                            height: 260,
                                            backgroundSize: "cover"
                                        }}
                                        // @ts-ignore
                                        image={`${import.meta.env.VITE_BASE_URL}${item.attributes.productImg.data[0].attributes.url}`}
                                        title="green iguana"
                                    />

                                    <CardContent>
                                        <Stack
                                            direction={"row"} justifyContent={"space-between"} alignItems={"center"}
                                        >
                                            <Typography gutterBottom variant="h6" component={"div"}>
                                                {item.attributes.productTitle}
                                            </Typography>

                                            <Typography>
                                                $ {item.attributes.productPrice}
                                            </Typography>
                                        </Stack>

                                        <Typography variant="body2" color={"text.secondary"}>

                                            {item.attributes.productDescription}
                                        </Typography>
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'space-between' }}>



                                        <Button
                                            onClick={() => {
                                                handleClickOpen()
                                                setClickedProduct(item)

                                            }}
                                            size="large" sx={{ textTransform: "capitalize" }} >
                                            < AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small"

                                            />
                                            add to cart
                                        </Button>







                                        <Rating precision={0.5} name="read-only" value={item.attributes.productRating} readOnly />
                                    </CardActions>
                                </Card>


                            )

                        })}



                    </AnimatePresence>
                </Stack>

                <Dialog

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                    sx={{
                        ".MuiPaper-root": {
                            minWidth: { xs: "100%", md: 800, }
                        }
                    }}
                >

                    <IconButton
                        sx={{

                            ":hover": {
                                color: "red", rotate: "180deg", transition: "0.4s",

                            },
                            position: "absolute",
                            top: 0, right: 10

                        }}
                        onClick={handleClose}
                    >

                        <Close />
                    </IconButton>
                    <ProductDetails ClickedProduct={ClickedProduct} />
                </Dialog>


            </Container>
        )
    }


}
export default Main;
