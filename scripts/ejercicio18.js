let array18 = [
  "lorem",
  "ipsum",
  "lorem",
  "scammer",
  "simply",
  "laboris",
  "sit",
  "amet",
  "laboris",
];

let result = array18.filter((item,index)=>{
  return array18.indexOf(item) === index;
})
console.log(result);