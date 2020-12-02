import React from 'react';
import styles from '../../../../styles/visa.module.css';

export default class Visa extends React.Component{
    render(){
        return(
            <div className={styles.payment}>
                <div className={styles.visa}>
                    <img className={styles.first} src="visa2.PNG" />
                    <img className={styles.left} src="visa1.PNG" />
                    <img className={styles.left} src="visa2.PNG" />
                </div>
                <div className={styles.chuyen}>
                    <div className={styles.trai}>&#60;</div>
                    <div className={styles.phai}>&#62;</div>
                </div>
            </div>  
        )
    }
}