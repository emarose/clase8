let searchArray = ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]
for (let i = 0; i < searchArray.length; i++) {
  if (searchArray[i] == "laboris") {
    searchArray[i] = searchArray[i].toUpperCase()
  }
}
console.log(searchArray)