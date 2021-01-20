import styles from '../styles/utils.module.css'
import React from 'react'


export default () => {
  return (
    <div className={styles.container}>
        <a href="/">
        <img src="/images/logo.png" alt="Ex Impostoras">
        </img>
        </a>
        <p className={`${styles.texto}`}>Conheça nossos meios de comunicação</p>
     <a href="https://www.instagram.com/eximpostoras/?hl=pt-br">
        <img src="images\1CONTATO.png" alt="Instagram" width="238" height="315">
        </img>
        </a>
        <a href="https://www.linkedin.com/company/eximpostoras/">
        <img src="images\2CONTATO.png" alt="LinkedIn" width="238" height="315">
        </img>
        </a>
        <a href="https://www.facebook.com/eximpostoras">
        <img src="images\3CONTATO.png" alt="Facebook" width="238" height="315">
        </img>
        </a>
    </div>
  )
}