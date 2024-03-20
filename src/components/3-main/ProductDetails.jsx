/* eslint-disable react/prop-types */
import AddShoppingCartOutlined from "@mui/icons-material/AddShoppingCartOutlined";
import { Box, Button, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const ProductDetails = ({ ClickedProduct }) => {
    const { t } = useTranslation();

   

    const [changeImg, setchangeImg] = useState(0);

    



  
    return (
        <Box sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, alignItems: "center", gap: 3, my: 3 }}>




            <Box sx={{ display: 'flex', ml: "10px" }}>
                <img width={360} src={`${
                    // @ts-ignore
                    import.meta.env.VITE_BASE_URL}${ClickedProduct.attributes.productImg.data[changeImg].attributes.url}`} alt="" />

            </Box>





            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h5">{ClickedProduct.attributes.productTitle}</Typography>


                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="body2">$ {ClickedProduct.attributes.productPrice}</Typography>


                <Typography variant="body1">
                    {ClickedProduct.attributes.productDescription}
                </Typography>

                <Stack sx={{
                    justifyContent: { xs: 'center', sm: "left" }
                }}
                    direction={"row"}
                    gap={1} my={2}
                >

                    <ToggleButtonGroup


                        value={changeImg}
                        exclusive


                        sx={{
                            ".Mui-selected": {
                                border: "1px solid royalblue !important",
                                borderRadius: "5px !important",
                                bgcolor: "initial",
                                opacity: "1!important"
                            }
                        }}
                    >


                        {ClickedProduct.attributes.productImg.data.map((item, index) => {

                            return (


                                <ToggleButton value={index}
                                    key={item.id}
                                    sx={{
                                        p: 0,
                                        opacity: 0.5,
                                        mx: 1,
                                        width: "110px",
                                        height: "110px"

                                    }}
                                >


                                    <img style={{ borderRadius: 3 }}
                                        height={"100%"} width={"100%"}
                                        // @ts-ignore
                                        src={`${import.meta.env.VITE_BASE_URL}${item.attributes.url}`}
                                        alt="" onClick={() => {
                                            setchangeImg(index)
                                        }} />
                                </ToggleButton>



                            )
                        })}


                    </ToggleButtonGroup>
                </Stack>

                <Button sx={{ textTransform: "capitalize" }} variant="contained">

                    <AddShoppingCartOutlined sx={{ mr: 1, }} fontSize="small" />
                    {t('hero.shopNow')}
                </Button>
                
               


            </Box>
        </Box>
    )
}
export default ProductDetails;
