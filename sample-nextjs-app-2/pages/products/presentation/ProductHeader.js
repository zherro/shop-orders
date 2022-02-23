import styles from '../../../styles/Products.module.css'

const ProductHeader = ( { qtd, ammount } ) => {
    return <>
        <h2 className={styles.title} >Products </h2>

        <br />
        <div>QTD: {qtd} </div>
        <div>Total: {ammount} </div>
        <br />
    </>
}

export default ProductHeader;