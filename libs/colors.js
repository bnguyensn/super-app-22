export const bkgColors = [
  '#ffcdd2',
  '#f8bbd0',
  '#e1bee7',
  '#d1c4e9',
  '#c5cae9',
  '#bbdefb',
  '#b3e5fc',
  '#b2ebf2',
  '#b2dfdb',
  '#c8e6c9',
  '#dcedc8',
  '#f0f4c3',
  '#fff9c4',
  '#ffecb3',
  '#ffe0b2',
  '#ffccbc',
  '#d7ccc8',
  '#cfd8dc',
];

export const getRandomIntBtw = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

export const getRandomBkgColor = () => {
  return bkgColors[getRandomIntBtw(0, bkgColors.length - 1)];
};
