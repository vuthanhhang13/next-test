import React from 'react';
import  styles from '../../../styles/comright.module.css';
import YourOrder from './yourorder/yourorder'

export default class Right extends React.Component{
    render(){
        return(
            <>
                <div className={styles.comright}>
                    <YourOrder/>
                </div>
                  
            </>
        )
    }
}