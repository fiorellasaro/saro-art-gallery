//import { products } from '@chec/commerce.js/features/products';
import Image from "next/image";
import Link from 'next/link';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Slide,
  Typography,
} from '@material-ui/core';
import Layout from "../components/Layout";
import getCommerce from "../utils/commerce";
import {Alert} from '@material-ui/lab';
import MainBanner from "../components/MainBanner/MainBanner";

export default function Home(props) {
  const { products } = props;
  return (
    <Layout title="Home" commercePublicKey={props.commercePublicKey}>
    <MainBanner></MainBanner>
    {products.length === 0 && <Alert>No product found</Alert>}
    <Grid id="gallery" style={{width:'100%',  padding: '60px'}} container spacing={2} className='cards-container'>
    {products.map((product) => {
      return(
        <Grid key={product.id} item md={3}>
        <Slide direction="up" in={true}>
          <Card>
            <Link href={`/products/${product.permalink}`}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={product.media.source}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textPrimary"
                    component="p"
                  >
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      component="p"
                    >
                      {product.price.formatted_with_symbol}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Slide>
      </Grid>
      )
        })}
    </Grid>
    </Layout>


  );
}

export async function getStaticProps() {
  const commerce = getCommerce();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}
