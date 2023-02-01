export const nameHandler = {
  name: 'name',
  defaultState: '',
  setter: (state, payload) => {
    if (payload === 'Guillem') return 'Guillem';
    return 'no';
  },
};
