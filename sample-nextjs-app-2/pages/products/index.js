import { useEffect, useState } from 'react';
import styles from '../../styles/Products.module.css'

import jSampleData from '../../mock/dataMock'


const Products = () => {

	const [aCart, setACart] = useState([]);
	const [iContCart, setIContCart] = useState(0);
	const [eCartAmmout, setECartAmmount] = useState(0);


	return <div>
	
		<h2 className={styles.title} >Products </h2>


		<br />
		<div>QTD: { iContCart } </div>
		<div>Total: { eCartAmmout } </div>
		<br />

		{
			jSampleData.map((item, index) => {

				// countItemRefres();
				
				return <div className={styles.boxProducts} key={index} >
						<div className={styles.cardProduct} >
							<div className={styles.productName} > { item.name } </div>
							<span className={styles.productCode}> { item.id } </span>
							<div className={styles.productqtd} >qtd: { item.qtd }</div>
							<div className={styles.productValue}> { item.price } </div>

							<button className={styles.btn}>+ add</button>
						</div>
					</div>

			})
		}

	</div>
}

export default Products;