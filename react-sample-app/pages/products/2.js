import { useEffect, useState } from 'react';
import ProductBox from '../../components/product/productBox.component';
import styles from '../../styles/Product.module.css'


const jSampleData = [
	{
		id: 1010,
		name: "Product 1",
		qtd: 12,
		price: 10.99
	},
	{
		id: 1011,
		name: "Product 2",
		qtd: 12,
		price: 10.90
	},
	{
		id: 1013,
		name: "Product 3",
		qtd: 12,
		price: 10.99
	},
]

const productHome = () => {


	const [iCounterUpdate, setICounterUpdate] = useState(0);
	const [aCart, setACart] = useState([]);
	const [iCartCount, setCartCount] = useState(0);
	const [fCartAmmount, setFCartAmmount] = useState(0)

	const fAddItemToCart = (item) => {
		aCart.push(item);

		console.table(aCart);

		setACart(aCart);
		setCartCount(iCartCount + 1)
	}

	useEffect(() => {
		// Similar to componentDidMount and componentDidUpdate:

		// conta atualizações do react do
		//setICounterUpdate(iCounterUpdate + 1);
	});

	useEffect(() => {
		let eTotalAmmount = 0;
		for (let i = 0; i < aCart.length; i++) {
			eTotalAmmount += aCart[i].price
		}
		setFCartAmmount(eTotalAmmount)
	}, [iCartCount])

	return <>
		{
			iCounterUpdate > 0 &&
			<span >updates( {iCounterUpdate} )</span>
		}
		<h3 className={styles.title} >Products Page</h3>

		<div className={ styles.cart }>
			<p><b>CART</b></p>
			<div>QTD: { iCartCount } </div>
			<div>Total: { fCartAmmount } </div>
		</div>

		{
			jSampleData.map((item, key) => {
				return <ProductBox
					key={key}
					item={item}
					actionCart={fAddItemToCart} />
			})
		}

	</>
}

export default productHome