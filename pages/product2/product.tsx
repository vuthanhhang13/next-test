import React from 'react';
import Head from 'next/head';
import styles from '../../styles/product.module.css';
import Left from '../product2/component/component';
import Right from '../product2/componentRight/componentR';
import Container from '@material-ui/core/Container';

export default class Product extends React.Component{
    render(){
        return(
            <>
                <Head>
                    <title>PickBazar</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
                    {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link> */}
                </Head>
                <div className={styles.product}>
                    <Container fixed>
                        <Right/>
                        <Left/>
                    </Container>
                </div>
            </>
        )
    }
}
