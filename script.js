
/*
console.log('Hello World!!!');

var firstName = 'Hassan';
var lastName = 'Rajani';
var job = 'Web Developer';
var age = 28;
var isMarried = false;

console.log(firstName +' '+lastName+' is a ' + job +' and ' +age+ ' years of age.');

alert(firstName +' '+lastName+' is a ' + job +' and ' +age+ ' years of age.'+ ' Is he married? '+ isMarried);

var email = prompt('What is your email?');
console.log(firstName +' '+ lastName +' ' + 'email is '+ email);



Basic Operators



//Math
var now = 2018;
var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 12);

//Logical

var ageHassan = 28;
var ageMoiz = 30;

console.log(ageHassan < ageMoiz);

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 33;
var ageTim = 40;
var average = (ageJohn + ageMark + ageTim) / 3;

console.log(average);


var scoreJohn, scoreTim, scoreEd, scoreJacob, scoreAverage, passOrFail;
scoreJohn = 90;
scoreTim = 88;
scoreEd = 78;
scoreJacob = 87;
scoreAverage = (scoreJohn + scoreTim + scoreEd + scoreJacob) / 4;
passingGrade = 85;


console.log('Did John pass the exam?');
console.log(scoreJohn >= passingGrade);


//Multiple assignments


var x,y;
x = y = (3+5) * 4-6;

console.log(x, y, y, y);


//More operators

var age = 30
age +=2;
console.log(age);


/**********************
Coding Challenge 1
*/
/*
var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, bmiResult;

massMark = 54; //120 pounds
massJohn = 72; //160 pounds
heightMark = 1.52; //5ft 
heightJohn = 1.83; //6ft
bmiMark = massMark  / (heightMark * heightMark); //23
bmiJohn = massJohn  / (heightJohn * heightJohn); //21
bmiResult = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);

console.log ('Does Mark have a higher BMI than John?' + ' ' + bmiResult);
*/

/*

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is Married!');
}   else {
    console.log(firstName + ' will marry soon:)');
}



var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, bmiResult;

massMark = 54; //120 pounds
massJohn = 72; //160 pounds
heightMark = 1.52; //5ft 
heightJohn = 1.83; //6ft
bmiMark = massMark  / (heightMark * heightMark); //23
bmiJohn = massJohn  / (heightJohn * heightJohn); //21
bmiResult = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);

console.log ('Does Mark have a higher BMI than John?' + ' ' + bmiResult);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is greater than John\'s. His BMI is ' + bmiMark);
} else {
     console.log('John\'s BMI is greater than Mark\'s. His BMI is ' + bmiJohn);
     };



var scoreJohn, scoreMark, scoreDan, scoreRob, averageScore;
scoreJohn = 89;
scoreMark = 90;
scoreDan = 70;
scoreRob = 91;
averageScore = (scoreJohn + scoreMark +scoreDan + scoreRob) / 4; //85

console.log(scoreJohn, scoreMark, scoreDan, scoreRob, averageScore);

if (scoreDan < averageScore) {
    console.log('He needs to work on his score. His score is ' + scoreDan);
}
    else {
        console.log ('His score is higher than average. His score is ' + scoreDan);
    };




var weightDan, weightJon, weightEric, averageWeight, extremeWeight, myWeight;

weightDan = 150;
weightJon = 140;
weightEric = 100;
averageWeight = (weightDan + weightJon + weightEric) / 3; //130
extremeWeight = 200;
myWeight = prompt('What is your weight?');

if (myWeight >= averageWeight) {
    alert('You are above the average weight');
}
    else {
        alert('You are below the average weight');
    }



var gradeJon, gradeKim, gradeDan, userGrade, avgGrade;
gradeJon = 94;
gradeKim = 86;
gradeDan = 78;
avgGrade = (gradeJon + gradeKim + gradeDan) / 3;
userGrade = prompt('What is your score?');


if (userGrade < avgGrade) {
    console.log('You\'re grade is lower than average. Grade is ' + userGrade);
}   
    else {
        console.log('You\'re grade is higher than average. Grade is ' + userGrade);
    }

*/
/*
var firstName = 'John';
var age = 50;

if (age < 13)   {
    console.log(firstName + ' is a boy.');
    
}   else if (age >= 16 && age < 20) {
    console.log(firstName + ' is a teenager.');    
}   
    else if (age >= 20 && age <30) {
        console.log(firstName + ' is a young man.');
    }

    else if (age >= 50) {
        console.log(firstName + ' is a senior citizen.');
    }

    else {
    console.log(firstName + ' is a man');
}
    
*/
/*
var firstName = 'John';
var age = prompt(console.log('What is your age?'));

if (age < 13)   {
    alert(firstName + ' is a boy.');
    
}   else if (age >= 16 && age < 20) {
    alert(firstName + ' is a teenager.');    
}   
    else if (age >= 20 && age <30) {
        alert(firstName + ' is a young man.');
    }

    else if (age >= 50) {
        alert(firstName + ' is a senior citizen.');
    }

    else {
    alert(firstName + ' is a man');
}
*/

var firstName = 'John'
var age = prompt('What is your age?');

if (age < 18) {
    console.log('You can drink juice');
} 
    else if (age >= 30 && age <=50) {
        console.log('You can drink hard liquor');
    }
    else {
        console.log('You can drink beer');
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    







