import './App.css';
import { useAtom } from 'jotai';
import productsAtom from './atoms/Products'; 
import DataTable from './components/DataTable';
import InputField from './components/InputField';
import BasicModal from './components/Modal';

function App() {
  const [products, setProducts] = useAtom(productsAtom);

  console.log(products);

  return (
    <div className='page-wrapper'>
      <InputField />
      <DataTable />
      <BasicModal />
    </div>
  );
}

export default App;
