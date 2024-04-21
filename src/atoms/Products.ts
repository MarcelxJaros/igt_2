import { atom } from 'jotai';
import productsData from '../data/products.json'; // Sample transaction data

// Create an atom to hold the state of the counter
const productsAtom = atom(productsData);

export default productsAtom;