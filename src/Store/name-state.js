export const nameHandler = {
  name: 'test',
  defaultState: 'name',
  setter: (state, payload) => {
    if (payload === 'Guillem') return 'Guillem';
    return 'no';
  },
};
