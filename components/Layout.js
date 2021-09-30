import { AppBar, CssBaseline, ThemeProvider, Toolbar, Link, Container, Box, Typography } from '@material-ui/core';
import  React from 'react';
import { theme, useStyle } from '../utils/styles';
import Head from 'next/head';
import NextLink from 'next/link'

export default function Layout ({
    children,
    commercePublicKey,
    title = 'Saro Art',
}) {
    const classes = useStyle();
    return (

        <React.Fragment>
            <Head>
                <meta charSet="utf-8"/>
                <title>{`${title} - NFT Gallery`} </title>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar 
                    position="static"
                    color="primary"
                    elevation={0}
                    className= {classes.appBar}
                >
                    <Toolbar className={classes.toolbar}>
                        <NextLink href="/">
                            <Link
                                variant="h6"
                                color="inherit"
                                noWrap
                                href="/"
                                className={classes.toolbarTitle}
                            >
                            Saro Art Gallery
                            </Link>
                        </NextLink>
                        <nav>
                            <NextLink  href="/cart">
                                <Link
                                    variant="button"
                                    color="inherit"
                                    href="/cart"
                                    className={classes.link}
                                >
                                Cart
                                </Link>
                            </NextLink>
                        </nav>
                    </Toolbar>
                </AppBar>
                <Container component="main" className={classes.main}>
                    {children}
                </Container>
                <Container maxWidth="md" component="footer">
                    <Box mt={5}>
                        <Typography variant="body2" color="secondary" align="center">
                            {`© `}
                            Saro Art 2021
                            {`.`}
                        </Typography>
                    </Box>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
}