import { atom } from 'recoil';

const roundsState = atom({
  key: 'rounds',
  default: '0',
});

export { roundsState };