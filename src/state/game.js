import { atom } from 'recoil';

const roundState = atom({
  key: 'round',
  default: 0,
});

const playerState = atom({
  key: 'player',
  default: {
    id: '',
    name: '',
    points: 0,
  },
});

const leaderboardState = atom({
  key: 'leaderboard',
  default: [],
});

export { roundState, playerState, leaderboardState };