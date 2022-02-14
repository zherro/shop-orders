import { StatusBar, SafeAreaView } from 'react-native';
import ProductForm from './src/pages/products/Form';

import './assets/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import Header from './src/components/header.component';
import ProductItens from './src/pages/products/Itens.page';

export default function App() {
  return (
    <SafeAreaView>
		<StatusBar />
		<Header />
      	<ProductItens />
    </SafeAreaView>
  );
}