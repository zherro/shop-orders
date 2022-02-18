import { useEffect, useState } from 'react';
import styles from '../../styles/Products.module.css'

const jSampleData = [
	{
		id: 1010,
		name: "Product 1",
		qtd: 12,
		price: 10.10,
	},
	{
		id: 1013,
		name: "Product 2",
		qtd: 12,
		price: 10.10,
	},
	{
		id: 1011,
		name: "Product 3",
		qtd: 12,
		price: 10.10,
	},
];

const Products = () => {

	function funAddToCart(item) {
		aCart.push(item)

		setIContCart(iContCart + 1)
	}

/*
	const funAddToCart = (item) => {
		aCart.push(item)

		setIContCart(iContCart + 1)
	}
*/

	const [iContEffect, setIContEffect] = useState(0);

	const [aCart, setACart] = useState([]);
	const [iContCart, setIContCart] = useState(0);
	const [eCartAmmout, setECartAmmount] = useState(0);

	// useEffect(() => {
	// 	setIContEffect(iContEffect + 1);
	// })

	return <div>
		{ /* <h2 className={styles.title} >Products - { iContEffect } </h2> */ }

		<h2 className={styles.title} >Products</h2>

		<div>QTD: { iContCart } </div>
		<div>Total: { eCartAmmout } </div>

		{
			jSampleData.map((item, key) => {

				return <div className={styles.boxProducts} >
					<div className={styles.cardProduct}>
						<div className={styles.productName} > { item.name } </div>
						<span className={styles.productCode}> { item.id } </span>
						<div className={styles.productqtd} >qtd: { item.qtd }</div>
						<div className={styles.productValue}> { item.price } </div>

						<button
							onClick={() => funAddToCart(item)}
							className={styles.btn}>+ add</button>
					</div>
				</div>

			})
		}

	</div>
}

export default Products;