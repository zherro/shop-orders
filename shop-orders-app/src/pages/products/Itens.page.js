import React from "react";
import { FlatList } from "react-native";
import { productList } from "../../../mock/product.mock";
import PageHeader from "../../components/PageHeader.component";
import ProductItem from "../../components/product/Item.component";

const ProductItens = () => {
	return <>
		<PageHeader title={'Produtos'} />
		<FlatList
			data={productList}
			renderItem={( {item} ) => <ProductItem {...item} />}
			keyExtractor={item => item.id}
		/>	
	</>
}

export default ProductItens;