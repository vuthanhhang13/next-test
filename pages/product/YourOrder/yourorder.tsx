import React from 'react';
import styles from '../../../styles/yourorder.module.css';

export default class YourOrder extends React.Component{
    render(){
        return(
            <div className={styles.yourorder}>
                <div className={styles.sticky}>
                    <div className={styles.total1}>
                        <h5>Your Order</h5>
                        <img src="pickbazar.png"/>
                        <p>No products found</p>
                    </div>
                    <hr></hr>
                    <div className={styles.total2}>
                        <div className={styles.left}>
                            <p>Sub Total</p>
                            <p>Delivery Fee</p>
                            <p>Discount</p>
                            <b>Total (Incl. VAT)</b>
                        </div>
                        <div className={styles.right}>
                            <p>$0.00</p>
                            <p>$0.00</p>
                            <p>$0.00</p>
                            <b>$0.00</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}