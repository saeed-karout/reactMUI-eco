import Header1 from "./components/1-header/Header1";
import Header2 from "./components/1-header/Header2";
import Header3 from "./components/1-header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/2-hero/hero";
import Main from "./components/3-main/main";
import Footer from "./components/4-footer/footer";
import Scroll from "./components/scroll/scroll";

import Login from "./components/users/login";
import Register from "./components/users/register";


import { Route, Routes } from "react-router-dom";



function App() {
  const [theme, colorMode] = useMode();
  return (



    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
       
          <CssBaseline />

          <Header1 />
          <Header2 />
          
          <Header3 />

          <Routes>
         
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/Register" element={<Register />} />
          </Routes>

          <Box bgcolor={theme.
            // @ts-ignore
            palette.bg.main}>
              <Hero />
        <Routes>
           
           
            <Route path="/" element={<Main />} />

          







        </Routes>
            

            


          </Box>
        <Footer />

        <Scroll />
      </ThemeProvider>
    </ColorModeContext.Provider >


  )
}

export default App
