import { createTheme, makeStyles } from "@material-ui/core";

export const theme = createTheme({
    typography: {
        h1: {
            fontSize: '2.2rem',
            fontWeight: 400,
            margin: '2rem 0',
            color: 'white',
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
        h3: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
        },
    },
    palette: {
        primary: {
            main: '#000',      
        },
        secondary: {
            main: '#fff',      
        },
        error: {
            main: '#E62818',      
        },
        background: {
            default: '#000',      
        },

    },


});

export const useStyle = makeStyles ( (theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: '1rem',
      },
      main: {
        padding: '1rem',
      },
      largeImage: {
        maxWidth: '50rem',
        width: '100%',
      },
      mt1: {
        marginTop: '1rem !important',
      },
      p1: {
        padding: '1rem !important',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '100%',
      },
      thead:{
          color: 'white',
      },
      tbody:{
        color: 'white',
    },
}));