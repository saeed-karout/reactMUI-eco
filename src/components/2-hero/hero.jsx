import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./slider.css"
import { useTheme } from "@emotion/react";
import IconSection from "./iconSection";
import { useTranslation } from "react-i18next";
import { t } from "i18next";


const mySlider =[
    {text:t('hero.women') , link:"./public/images/banner-25.jpg"},
    {text:t('hero.men'), link:"./public/images/banner-15.jpg"},

]
   


const Hero = () => {
    const { t } = useTranslation();
    const theme = useTheme()
    return (
        <Container  >


          <Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 ,pt:2}}>
              <Swiper
                  pagination={{
                      dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  loop={true}
                  className="mySwiper"
              >
                
                {mySlider.map((item) => {
                  return(
                      <SwiperSlide key={item.link} className="Swiper">
                      <img   src={item.link} alt="" />
            
                      <Box
                          sx={{
                              // @ts-ignore
                              [theme.breakpoints.up('sm')]: {
                                  textAlign:"left", position: "absolute", left: "10%" 
                                },
            
                                // @ts-ignore
                                [theme.breakpoints.down('sm')]: {
                                  pt:4,pb:6
                                },
                          }}
            
            
                      //  sx={{textAlign:"left", position: "absolute", left: "10%" }}
                       
                       className="">
            
            
                          <Typography
                              sx={{
                                  color: "#222",
            
                              }}
                              variant="h5"
                          >
                              {t('hero.LIFESTYLE')}
                          </Typography>
            
            
                          <Typography
                              sx={{
                                  color: "#222",
                                  fontWeight: 400,
                                  my: 1
                              }}
                              variant="h3"
                          >
                             {item.text}
                          </Typography>
            
            
                          <Stack
                              sx={{ justifyContent:{ xs:"center", sm:"left"} }}
                              direction={"column"}
                              alignItems={"left"}
                          >
                              <Typography color={"#333"} mr={1} variant="h4">
                                 {t('hero.sale')}
                              </Typography>
            
                              <Typography color={"#D23F57"} variant="h4">
                                  30% OFF
                              </Typography>
                              
                              <Typography
                                  sx={{ color: "#000", fontWeight: "300", my: 1 }}
                                  variant="body1"
                              >
                                    {t('hero.getFree')}
                              </Typography>
                          </Stack>
            
                          <Button
                              sx={{
                                  px: 5, py: 1, mt: 2, backgroundColor: "#222"
                                  , boxShadow: "0px 4px 16px rgba(43,52,69,0.1)", borderRadius: "1px",
                                  color:"#fff",
                                  "&:hover": {
                                      bgcolor: "#151515",
                                      boxShadow: "0px 4px 16px rgba(43,52,69,0.1)"
                                  }
                              }}
                              variant="contained"
                          >
                              {t('hero.shopNow')}
                          </Button>
            
            
            
            
                      </Box>
                  </SwiperSlide>
            
                  )
              }
            
              )}
              </Swiper>
            
            
              <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.5%" } }}>
                  <Box sx={{ position: 'relative' }}>
                      <img src=".\public\images\banner-17.jpg" alt="" width={"100%"} />
            
            
                      <Stack sx={{ position: 'absolute', top: "50%", transform: "translateY(-50%)", left: "30px" }}>
                          <Typography
                              variant="caption"
                              sx={{
                                  color: '#2B3445',
                                  fontSize: '25px'
                              }}
                          >
                             {t('hero.ARRIVALS')}
                          </Typography>
            
            
            
            
                          <Typography
                              variant="h6"
                              sx={{
                                  color: '#2B3445',
                                  lineHeight: '16px',
                                  mt: 1
                              }}
                          >
                              {t('hero.summer')}
                          </Typography>
            
            
                          <Typography variant="h6" sx={{ color: '#2B3445' }}>
                              {t('hero.saleoff')} 20% 
                          </Typography>
            
                          <Link
            
                              href='#'
                              underline="none"
                              sx={{
                                  color: '#2B3445',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  transition: '0.2s',
            
                                  "&:hover": {
                                      color: '#D23F57'
                                  },
                              }}
            
                          >
                              {t('hero.shopNow')}
                              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            
                          </Link>
            
            
            
                      </Stack>
            
                  </Box>
            
                  <Box sx={{ position: 'relative' }}>
                      <img src=".\public\images\banner-16.jpg" alt="" width={"100%"} />
                      <Stack sx={{ position: 'absolute', top: "50%", transform: "translateY(-50%)", left: "30px" }}>
                          <Typography
                              variant="caption"
                              sx={{
                                  color: '#2B3445',
                                  fontSize: '25px'
                              }}
                          >
                              {t('header3.games')} 4K
                          </Typography>
            
            
            
            
                          <Typography
                              variant="h6"
                              sx={{
                                  color: '#2B3445',
                                  lineHeight: '16px',
                                  mt: 1
                              }}
                          >
                              {t('hero.DESKTOPS')} & <br /> {t('hero.LAPTOPS')}
                          </Typography>
            
            
            
            
                          <Link
            
                              href='#'
                              underline="none"
                              sx={{
                                  color: '#2B3445',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '5px',
                                  transition: '0.2s',
            
                                  "&:hover": {
                                      color: '#D23F57'
                                  },
                              }}
            
                          >
                                                           {t('hero.shopNow')}

                              <ArrowForwardIcon sx={{ fontSize: "15px" }} />
            
                          </Link>
            
            
            
                      </Stack>
                  </Box>
              </Box>
            
          </Box>



         <IconSection />

         
        </Container>
    
    )
}

export default Hero
