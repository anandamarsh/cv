import {createMuiTheme} from '@material-ui/core/styles'

export default createMuiTheme({
    palette: {
        "common": {"black": "#000", "white": "#fff"},
        "type": "light",
        "primary": {
            "50": "#e3f2fd",
            "100": "#bbdefb",
            "200": "#90caf9",
            "300": "#64b5f6",
            "400": "#42a5f5",
            "500": "#2196f3",
            "600": "#1e88e5",
            "700": "#1976d2",
            "800": "#1565c0",
            "900": "#0d47a1",
            "A100": "#82b1ff",
            "A200": "#448aff",
            "A400": "#2979ff",
            "A700": "#2962ff",
            "main": "#2196f3",
            "light": "#64b5f6",
            "dark": "#1976d2",
            "contrastText": "#fff"
        },
        "secondary": {
            "main": "rgb(225, 0, 80)",
            "light": "rgb(231, 51, 115)",
            "dark": "rgb(157, 0, 56)",
            "contrastText": "#fff"
        },
        "error": {"light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff"},
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#d5d5d5",
            "A200": "#aaaaaa",
            "A400": "#303030",
            "A700": "#616161"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "background": {"paper": "#fff", "default": "#fafafa"},
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.08)",
            "hoverOpacity": 0.08,
            "selected": "rgba(0, 0, 0, 0.14)",
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)"
        }
    },
    typography: {
        "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "display4": {
            "fontSize": "7rem",
            "fontWeight": 300,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.04em",
            "lineHeight": "1.14286em",
            "marginLeft": "-.04em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display3": {
            "fontSize": "3.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "letterSpacing": "-.02em",
            "lineHeight": "1.30357em",
            "marginLeft": "-.02em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display2": {
            "fontSize": "2.8125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.13333em",
            "marginLeft": "-.02em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "display1": {
            "fontSize": "2.125rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.20588em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "headline": {
            "fontSize": "1.5rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.35417em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "title": {
            "fontSize": "1.3125rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.16667em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "subheading": {
            "fontSize": "1rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.5em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body2": {
            "fontSize": "0.875rem",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.71429em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "body1": {
            "fontSize": "0.875rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.46429em",
            "color": "rgba(0, 0, 0, 0.87)"
        },
        "caption": {
            "fontSize": "0.75rem",
            "fontWeight": 400,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "lineHeight": "1.375em",
            "color": "rgba(0, 0, 0, 0.54)"
        },
        "button": {
            "fontSize": "0.875rem",
            "textTransform": "uppercase",
            "fontWeight": 500,
            "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
            "color": "rgba(0, 0, 0, 0.87)"
        }
    }
})