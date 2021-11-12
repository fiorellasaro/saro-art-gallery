import { AppBar, CssBaseline, ThemeProvider, Toolbar, Link, Container, Box, Typography } from '@material-ui/core';
import  React, { useState, useContext, useEffect } from 'react';
import { theme, useStyle } from '../utils/styles';
import Head from 'next/head';
import NextLink from 'next/link';
import NavBar from './Navbar/Navbar';

import {
    CART_RETRIEVE_REQUEST,
    CART_RETRIEVE_SUCCESS,
  } from '../utils/constants';
import { Store } from './Store';
import getCommerce from '../utils/commerce';

export default function Layout ({
    children,
    commercePublicKey,
    title = 'Saro Art',
}) {
    const classes = useStyle();
    const [navbarOpen, setNavbarOpen] = useState(false);

    function handleNavbar() {
      setNavbarOpen(!navbarOpen)
    }

    const {state, dispatch} = useContext(Store)
    const { cart }  = state;
    useEffect(() => {
        const fetchCart = async () => {
          const commerce = getCommerce(commercePublicKey);
          dispatch({ type: CART_RETRIEVE_REQUEST });
          const cartData = await commerce.cart.retrieve();
          dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
        };
        fetchCart();
      }, []);

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
                <NavBar navbarState={navbarOpen} handleNavbar={handleNavbar} cart={cart}/>
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