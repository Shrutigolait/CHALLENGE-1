const massMark=78;              //Mark's mass 78Kg
const heightMark=1.69;          //Mark' height 1.69m
const massJohn=92;              //John's mass 92kg
const heightJohn=1.91;          //height 1.91m
const bmiMark=massMark/(heightMark*heightMark);
console.log("Mark's Bmi:",bmiMark);
const bmiJohn=massJohn/(heightJohn*heightJohn);
console.log("John's Bmi:",bmiJohn);
const markHigherBMI = bmiMark > bmiJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI); //True
