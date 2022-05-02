import { atom, selector } from 'recoil';

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

const orderedLeaderboardState = selector({
  key: 'leaderboard',
  get: ({ get }) => {
    const list = get(leaderboardState);

    return list.sort((a, b) => b.points - a.points);
  }
})

export { roundState, playerState, leaderboardState, orderedLeaderboardState};