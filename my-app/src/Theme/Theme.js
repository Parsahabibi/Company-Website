import {createTheme} from "@mui/material/styles";
import '../index.css'
const Theme = createTheme({
    direction: "rtl",
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    fontFamily: 'YekanBakh',
                    fontSize: "62.5%",
                    padding: 0,
                    margin: 0,
                    boxSizing: "border-box",
                },
                body: {
                    backgroundColor: "rgb(250,250,250)",
                    a: {
                        textDecoration: "none",
                        fontSize: "1.3rem",
                    },
                    label: {
                        fontSize: "1.6rem",
                        fontWeight: 500,
                    },
                    stronge: {
                        fontSize: "2.2rem",
                    },
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: "outlined"},
                    style: {
                        color: "#444A5D",
                        backgrond: "white",
                        border: '1px solid #444A5D',
                        borderRadius: "10px",
                        padding: "12px",
                        fontWeight: "500",
                        fontSize: "16px",
                        "&:hover": {
                            border: " 1px solid #FFBF3F"
                        },
                    },
                },
                {
                    props: {variant: "contained"},
                    style: {
                        background: "rgba(255, 191, 63, 1)",
                        color: "#333845",
                        borderRadius: "10px",
                        border: " 1px solid #444A5D",
                        backgroundColor: 'white',
                        fontSize: "16px",
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        padding: "10px 36px",
                        "&:hover": {
                            background: "rgba(255, 191, 63, 1)",
                            color: "#333845",
                            border: '1px solid rgba(255, 191, 63, 1)'
                        },
                    },
                },
            ],
        },
    },
    palette: {
        primary: {
            main: 'rgba(255, 191, 63, 1)',
            one: "rgba(255, 191, 63, 1)", //darkblue
            two: "rgba(255, 201, 92, 1)", //lightblue
            three: "rgba(255, 218, 143, 1)",
            four: "rgba(255, 229, 178, 1)",
            five: "rgba(255, 239, 208, 1)",
            six: "rgba(255, 248, 233, 1)"
        },
        secondary: {
            main: "rgba(68, 74, 93, 1)",
            one: "rgba(68, 74, 93, 1)", //red
            two: "rgba(80, 84, 97, 1)", //orange
            three: "rgba(117, 121, 135, 1)",
            four: "rgba(157, 160, 169, 1)"
        },
        info: {
            main: "rgba(57, 57, 58, 1)",
            one: "rgba(57, 57, 58, 1)", //discountPrice(grey)
            two: "rgba(181, 181, 181, 1)",
            three: "rgba(237, 237, 237, 1)",
            four: "rgba(51, 56, 69, 1)"
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            xxs: 375,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    typography: {
        fontFamily:'YekanBakh',
        h1: {
            fontSize: "30px",
            fontWeight: 900,
        },
        h2: {
            fontSize: "24px",
        },
        h3: {
            fontSize: "20px",
        },
        subtitle1: {
            fontSize: "16px", //card
        },
        subtitle2: {
            fontSize: "14px",
        },
        h5:{
            fontSize:"12px"
        }
    },
});

export default Theme;