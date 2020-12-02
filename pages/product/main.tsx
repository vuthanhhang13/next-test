import Head from 'next/head';
import React from 'react';
import Address from './Address/address';
import Schedule from './Schedule/schedule';
import Contact from './Contact/Contact'
import YourOrder from './YourOrder/yourorder';
import Payment from './Payment/save';
import Demo from './Demos/demo'

export default class Main extends React.Component{
    render(){
        return(
            <>
                <Head>
                    <title>PickBazar</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
                    {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link> */}
                </Head>
                <Address/>
                <Schedule/>
                <Contact/>
                <YourOrder/>
                <Payment/>
                <Demo/>
            </>
        )}      
}