import styles from './Container.module.css'


function Container(props) {
    return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
                    {props.children} 

        </div> //O {{props.children} ta se referindo a quem está dentro do container, ou seja, os filhos do container
    )
}

export default Container