import React from 'react';
import styles from  '../../../styles/payment.module.css';
import Visa from './visa/visa';


const dataPayment = [
    {
        id: 4,
        name: "Payment Option",
        add:'+ Add Card',
        save:'Saved Cards'
    }
]

export default class Payment extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                payment: dataPayment,
            }
    }

    render() {
        // const {products,address}=this.state
        return(
            <div >
                <div>{this.state.payment.map(pro => 
                    <>
                        <div className={styles.b1}>
                            <div className={styles.tt}>
                                <div className={styles.numdelivery}>
                                    <p className={styles.number}>{pro.id}</p>
                                    <p className={styles.delivery}>{pro.name}</p>
                                </div>
                                
                            </div>
                            <div className={styles.saveadd}>
                                <p className={styles.save}>{pro.save}</p>
                                <p className={styles.add}>{pro.add}</p>
                            </div>
                            <Visa/>
                            <div className={styles.cuoi}>
                                <p className={styles.tren}>Do you have a voucher?</p>
                                <p className={styles.duoi}>By making this purchase you agree to our <span>terms and conditions.</span></p>
                                <div className={styles.end}>Proceed to Checkout</div>
                            </div>
                        </div>
                    </>
                )}  
                </div>
                
            </div>
            
        )
    }
}


        