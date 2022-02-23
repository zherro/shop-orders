import styles from '../../../styles/Products.module.css'

const BtnProduct = ( { title, action } ) => {
    return <button onClick={ action } className={styles.btn} >{ title }</button>
}

export default BtnProduct