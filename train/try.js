const oneTwoThree = [1, 2, 3];
// let result = oneTwoThree.map((v) => {
//   console.log(v);
//   return v;
// });
// 콘솔에는 1, 2, 3이 찍힘
// oneTwoThree; // [1, 2, 3]
// result; // [1, 2, 3]
// oneTwoThree === result; // false


result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0  //* console.log(acc,cur,i)의 값  누적값 현재값 인덱스 요소(배열의 요소를 모두 적음)
// 1 2 1  //? 왜 console 하고 reture하고 값이 나오는 구멍은 2개 인데 값이 3개가 나오지?
// 3 3 2
result; // 6