import React from 'react';
import styles from  '../../../../styles/comboxadd.module.css';

const dataBoxSchedule = [{
    one:'Express-Delivery',
    two:'90 min express delivery'
},
{
    one:'8am-11am',
    two:'8.00 AM - 11.00 AM'
},
{
    one:'11am-2pm',
    two:'11.00 AM - 2.00 PM'
},
{
    one:'2pm-5pm',
    two:'2.00 PM - 5.00 PM'
},
{
    one:'5pm-8pm',
    two:'5.00 PM - 8.00 PM'
},
{
    one:'Next Day',
    two:'Next Day'
}]

export default class BoxSchedule extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                boxSch: dataBoxSchedule,
                check: dataBoxSchedule[0].one
            }
    }
    onClick = one => {
        this.setState({ check: one })
    }
    render(){
        const {check} = this.state
        return(
            <div className={styles.box}>        
                {this.state.boxSch.map(ele =>
                    <div onClick={() =>this.onClick(ele.one)} className={`${styles.hop} ${check === ele.one ? styles.check : ""}`}>
                        <p className={styles.one}>{ele.one}</p>    
                        <p className={styles.two}>{ele.two}</p>
                    </div>
                )}   
            </div>
        )
    }
}