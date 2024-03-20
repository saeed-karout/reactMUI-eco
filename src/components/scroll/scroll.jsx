import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";


const Scroll = () => {
   
    return (
        <Zoom in={ useScrollTrigger() }>
            <Fab
            onClick={()=>{
                window.scrollTo(0,0)
            }}
            variant="extended" size="small" sx={{ position: 'fixed', bottom: "20px", right: "20px" }} color='primary' aria-label="add">
                <KeyboardArrowUp fontSize="medium" />
            </Fab>
        </Zoom>
    )
}

export default Scroll;
