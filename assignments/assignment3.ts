let studentNames : string[] = ["Suresh","Mahesh","Naresh"];
let marks : number[] = [75,80,82];
let updatedMarks : number[] = [];
let sum:number =0;
let average : number;
for(let i:number=0;i<marks.length;i++){
    updatedMarks[i]  = marks[i] + 10;
    sum = sum + updatedMarks[i];
}
console.log('Updated Marks:')
for(let i:number =0;i<updatedMarks.length;i++){
    console.log(studentNames[i]+ ':' + updatedMarks[i] );
}
average = sum / updatedMarks.length;
console.log('Average Marks: '+average);
