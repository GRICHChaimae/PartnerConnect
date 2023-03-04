import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" position="absolute" right='0' justifyContent="flex-end" p={2} >
        <IconButton onClick={colorMode.toggleColorMode}>
            { theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedIcon />
            ):(
                <LightModeOutlinedIcon />
            )}
        </IconButton>
        <IconButton>
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
            <PersonOutlinedIcon />
        </IconButton>
    </Box>)
}

export default Topbar;