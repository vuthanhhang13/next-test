import React from 'react';
import styles from  '../../../../styles/comadd.module.css';
import BoxAdd from './boxadd';


const dataAddress = [
    {
        id: 1,
        name: "Delivery Address",
        add: '+ Add Address',  
    }
]
export default class Address extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                address: dataAddress,
            }
    }

    render() {
        return(
            <div>
                <div>{this.state.address.map(pro => 
                    <div className={styles.b1}>
                        <div className={styles.tt}>
                            <div className={styles.numdelivery}>
                                    <p className={styles.number}>{pro.id}</p>
                                    <p className={styles.delivery}>{pro.name}</p>
                            </div>
                            <p className={styles.add}>{pro.add}</p>
                        </div>
                        <BoxAdd/>         
                    </div>
                )}  
                </div>
            </div>
        )
    }
}
