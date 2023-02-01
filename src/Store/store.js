import { counterHandler } from './counter-state';
import { nameHandler } from './name-state';
import createStore from './store-creator';

export default createStore([counterHandler, nameHandler]);
