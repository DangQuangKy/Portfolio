import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useTheme } from "../context/themeContext";
import { createTheme, ThemeProvider } from "@mui/material";

const DefaultLayout = () => {
    const { darkMode } = useTheme()

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <div className={darkMode ? "dark" : "light"}>
            <Header />
            <div className="min-h-screen max-w-screen-xl p-5 mt-4">
                <Outlet />
            </div>
            </div>
        </ThemeProvider>
    );
}

export default DefaultLayout;