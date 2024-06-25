import { Paper } from "@mui/material";

export function Video({ elevation = 4 }){
    
    return (<>
        <Paper
            elevation={elevation}        
        >
            <video autoplay playsinline></video>
        </Paper>
    </>)
}