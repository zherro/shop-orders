import styles from '../../../styles/Products.module.css'
import BtnProduct from './BtnAdd'

const ProductView = ({ product, actionAdd }) => {

    return <div className={styles.boxProducts} >
        <div className={styles.cardProduct} >
            <div className={styles.productName} >{product?.name} </div>
            <span className={styles.productCode}> {product?.id} </span>
            <div className={styles.productqtd} >qtd: {product?.qtd}</div>
            <div className={styles.productValue}> {product?.price} </div>

            <BtnProduct
                title={ '+ add' }
                action={actionAdd}
            />
        </div>
    </div>
}

export default ProductView