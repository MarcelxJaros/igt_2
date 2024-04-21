import { atom } from 'jotai';

// Create an atom to hold the state of the counter
const ModalToggleAtom = atom({toggle: false, heading: 'test', desc: "desc"});

export default ModalToggleAtom;