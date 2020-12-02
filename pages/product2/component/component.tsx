import React from 'react';
import styles from '../../../styles/comleft.module.css';
import Address from './address/address';
import Schedule from './schedule/schedule';
import Contact from './contact/contact'

export default class Left extends React.Component{
    render(){
        return(
            <>
                <div className={styles.comleft}>
                    <Address/>
                    <Schedule/>
                    <Contact/>
                </div>
            </>
        )
    }
}