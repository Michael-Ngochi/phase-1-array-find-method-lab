// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  let superbowlWin=(record)=>{
    const result = record.find(item => item.result === "W");    
    return result ? result.year:undefined;
  }

console.log(
    superbowlWin(record)
);
console.log(record[0].year)