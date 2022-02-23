import { useState } from 'react';

import jSampleData from '../../../mock/dataMock'
import ProductView from './../presentation/ProductView';
import ProductHeader from './../presentation/ProductHeader';

const Products = () => {

	// lista de produtos do carrinho
	const [aCart, setACart] = useState([])

	// quantidade de produtos do carrinho
	const [iContCart, setIContCart] = useState(0)

	// valor total dos produtos
	const [eCartAmmout, setECartAmmount] = useState(0.0)

	function roundValue(value) {
		return value.toFixed(2)
	}
	
	const addToCart = (product, round) => {
		
		aCart.push(product)
		// console.table(product)

		let dAmmounValue = round( eCartAmmout + product.price )	

		// console.log(value)

		setIContCart( iContCart + 1 )
		setACart(aCart)
		setECartAmmount(+dAmmounValue)
	}

	return <>	
		<ProductHeader qtd={iContCart} ammount={eCartAmmout} />
		{
			jSampleData.map((item, index) => {
				return <ProductView
							key={ index }
							product={item}
							actionAdd={ () => addToCart(item, roundValue) }
							nonValidProp="test"
						/>
			})
		}
	</>
}

export default Products