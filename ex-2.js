//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let arrNew = []
  let scoreUp = 0;
  for(let i = 0; i<array.length; i++){
    if(operation(array[i])){
        scoreUp++;
    }
  }
  //console.log(scoreUp);
  if(scoreUp>=5){
    console.log(`ผ่านเกณฑ์`);
  }else{
    console.log("ไม่ผ่านเกณฑ์");
  }

}
function isLeast(num){
  return num>70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1,isLeast);
let scoreRoom2Result = atLeastFive(studentScoresRoom2,isLeast);
let scoreRoom3Result = atLeastFive(studentScoresRoom3,isLeast);
