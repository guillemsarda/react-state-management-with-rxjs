import { counterHandler } from './counter-state';
import { nameHandler } from './name-state';
import mainStore from './store-creator';

export default mainStore([counterHandler, nameHandler]);
