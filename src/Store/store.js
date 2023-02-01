import createStore from 'react-rxjs-state-management';

const counterHandler = {
  name: 'counter',
  defaultState: 0,
  setter: function (state, payload) {
    return state + 1;
  },
};

const nameHandler = {
  name: 'name',
  defaultState: '',
  setter: function (state, payload) {
    if (payload === 'Guillem') return 'Guillem';
    return 'No name';
  },
};

export default createStore([counterHandler, nameHandler]);
