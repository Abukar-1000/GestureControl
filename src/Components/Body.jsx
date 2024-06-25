import { Box } from "@mui/system";

/**
 * Acts as a wrapper and displays children elements
 * @param {Props} children 
 * @returns {Props}
 */
export function Page({ children }) {

    return (<>
        <Box
            minHeight={"80vh"}
            className={"rvt-container-lg"}
        >
            {children}
        </Box>
    </>)
}