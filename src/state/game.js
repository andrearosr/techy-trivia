import { atom } from 'recoil';

const roundState = atom({
  key: 'round',
  default: 0,
});

const isAdminState = atom({
  key: 'admin',
  default: false,
})

export { roundState, isAdminState };