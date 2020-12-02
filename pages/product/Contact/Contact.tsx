import React from 'react';
import styles from  '../../../styles/address.module.css';
import BoxContact from './boxcontact/boxcontact';

const dataContact = [
    {
        id: 3,
        name: "Contact Number",
        add:'+ Add Contact',
    }
]

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                contact: dataContact,
            }
    }

    render() {
        // const {products,address}=this.state
        return(
            <div>
                <div>{this.state.contact.map(pro => 
                    <div className={styles.b1}>
                        <div className={styles.tt}>
                            <div className={styles.numdelivery}>
                                    <p className={styles.number}>{pro.id}</p>
                                    <p className={styles.delivery}>{pro.name}</p>
                            </div>
                            <p className={styles.add}>{pro.add}</p>
                        </div>
                        <BoxContact/>        
                        
                    </div>
                )}  
                </div>
                
            </div>
            
        )
    }
}