import React from 'react';
import styles from  '../../../styles/address.module.css';
import BoxSchedule from './boxshedule/boxschedule';

const  dataSch=[
    {
        id: 2,
        name: "Delivery Schedule",
        add:'',       
    }
]
export default class Schedule extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                schedule: dataSch,
            }
    }

    render() {
        // const {products,address}=this.state
        return(
            <div>
                <div>{this.state.schedule.map(pro => 
                    <div className={styles.b1}>
                        <div className={styles.tt}>
                            <div className={styles.numdelivery}>
                                    <p className={styles.number}>{pro.id}</p>
                                    <p className={styles.delivery}>{pro.name}</p>
                            </div>
                            <p className={styles.add}>{pro.add}</p>
                        </div>
                        <BoxSchedule/>        
                        
                    </div>
                )}  
                </div>
                
            </div>
            
        )
    }
}