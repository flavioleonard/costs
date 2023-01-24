import styles from './Message.module.css'
import { useState, useEffect } from 'react'



function Message ({type, msg}) {

    const [visible, setVisible] = useState(false) /*Constante pra fazer a mensagem sumir depois de um certo tempo.  */

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        } //Se a mensagem não existir ele não emite mensagem

        setVisible(true) //Se a mensagem existir 

        const timer = setTimeout(() =>{setVisible(false)}, 3000) //3000 milisegundos

        return () => clearTimeout(timer) //limpar quando o tempo acabar
    }, [msg])

    return (
       <>
       {visible && /*Se estiver visivel ("visible" for true) então(&&)..... */
        <div className={`${styles.message} ${styles[type]}`/*Definindo class dinamica que vai agir de acordo com o que a msg for: sucesso, erro... */}>{msg}</div>}
       </>

    )
}

export default Message