import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import { useTranslation } from "react-i18next";


const IconSection = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Container sx={{ bgcolor:
// @ts-ignore
        theme.palette.mode === "dark"? "#000" : " #fff", mt:2 }}>
            <Stack direction={"row"} flexWrap={"wrap"}
                divider={useMediaQuery('(min-width:600px)') ? <Divider orientation="vertical" flexItem   /> : null}
                spacing={2}
               
            >
                <MyBox icon={<ElectricBoltIcon
                    fontSize="large" />}
                    title={t('hero.Fast_Delivery')}
                    subtitle={t('hero.startFrom')}>

                </MyBox>
                <MyBox icon={<CreditScoreOutlinedIcon
                    fontSize="large" />}
                    title={t('hero.Money_Guarantee')}
                    subtitle={t('hero.7_Days_Back')}>

                </MyBox>
                <MyBox icon={<WorkspacePremiumOutlinedIcon fontSize="large" />}
                    title={t('hero.365_Days')}
                    subtitle={t('hero.For_Free_return')}>

                </MyBox>
                <MyBox icon={<AccessAlarmOutlinedIcon
                    fontSize="large" />}
                    title={t('hero.Payment')}
                    subtitle={t('hero.Secure_System')}>

                </MyBox>

            </Stack>
        </Container>
    )
}
export default IconSection;



// eslint-disable-next-line react/prop-types
export const MyBox = ({ icon, title, subtitle }) => {
    const theme = useTheme();
    return (
        <Box sx={{ width: 250, flexGrow: 1, display: "flex", alignItems: "center", gap: 3,
         
         
         
         py: 1.3 }} 
         justifyContent={useMediaQuery('(min-width:600px)') ? "center" : "left"}>
            {icon}
            <Box>
                <Typography
                    variant="body1">
                    {title}
                </Typography>


                <Typography
                    // @ts-ignore
                    sx={{ fontWeight: "300", color: theme.palette.text.secondary }}
                    variant="body1"
                >
                    {subtitle}
                </Typography>
            </Box>
        </Box>
    )
}
