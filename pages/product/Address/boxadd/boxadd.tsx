import React from 'react';
import styles from  '../../../../styles/boxadd.module.css';



const dataBoxAdd =[
    {
        one:'Home',
        two:'27 Street, 2569 Heritage Road Visalia, CA 93291'
    },
    {
        one:'Office',
        two:'33 Baker Street, Crescent Road, CA 65746'
    }
];

export default class BoxAdd extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
                boxAdd: dataBoxAdd,
                check: dataBoxAdd[0].one
            }
    }

    onClick = one => {
        this.setState({ check: one })
    }
    render(){
        const {check} = this.state
        return(
            <div className={styles.box}>        
                {this.state.boxAdd.map(ele =>
                    <div onClick={() =>this.onClick(ele.one)} className={`${styles.hop} ${check === ele.one ? styles.check : ""}`}>
                        <p className={styles.one}>{ele.one}</p>    
                        <p className={styles.two}>{ele.two}</p>
                    </div>
                )}   
            </div>
        )
    }
}




