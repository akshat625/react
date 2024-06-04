import React from 'react'
import styles from './Input.module.css'

function Input({displayValue}) {
  return (
    <div >
        <input className={styles.display} type="text" value={displayValue} readOnly/>
      
    </div>
  )
}

export default Input
