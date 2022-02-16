import styles from '../../styles/Product.module.css'

const ProductBox = ({ item, actionCart }) => {
	return <div className={styles.box}>
		<div className={styles.productCard}>
			<h4>{item.name}</h4>

			<span>1013</span>
			<div className={styles.qtd}> {item.id} </div>
			<div className={styles.price}>{item.price}</div>

			<button onClick={() => actionCart(item)} className={styles.btn}>+ buy</button>

		</div>
	</div>
}

export default ProductBox