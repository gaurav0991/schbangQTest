let map = {};
let target = 10;
arr = [1, 2, 3, 4];
arr.map((d) => {
  map[d]++;
});
arr.map((d) => {
  if (map[target - d]) return true;
});
