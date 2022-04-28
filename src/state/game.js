import { atom } from 'recoil';

const roundState = atom({
  key: 'round',
  default: 0,
});

export { roundState };