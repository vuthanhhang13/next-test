import React from 'react';
import styles from  '../../../../styles/boxadd.module.css';

const dataBoxContact= [{
    one:'Primary',
    two:'202-555-0191'
},
{
    one:'Secondary',
    two:'202-555-0701'
}];

export default class BoxContact extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                boxContact: dataBoxContact,
                check: dataBoxContact[0].one
            }
    }
    onClick = one => {
        this.setState({ check: one })
    }
    render(){
        const {check} = this.state
        return(
            <div className={styles.box}>        
                {this.state.boxContact.map(ele =>
                    <div onClick={() =>this.onClick(ele.one)} className={`${styles.hop} ${check === ele.one ? styles.check : ""}`}>
                        <p className={styles.one}>{ele.one}</p>    
                        <p className={styles.two}>{ele.two}</p>
                    </div>
                )}   
            </div>
        )
    }
}