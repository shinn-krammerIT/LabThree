// LabThree

// Single input of data
const name = "John Smith"; // name
const mark = 50; // mark

//initial variable
let grade = 0;
let gradeDesc = "blank"
let desc = "blank"

//if statement used for grade
if (mark == 100) { // if mark is 100/100
    grade = " an A+. "; // A+
    gradeDesc = "Perfect";
} else if (mark < 100 && mark >= 75) { // if mark is 75 - 100
    gradeDesc = "Pass with Distinction"; 
    if (mark < 100 && mark >= 85) { // nest if: if mark is 85 - 100 
        grade = " an A+. "; // A+
    } else if (mark < 85 && mark >= 80) { // nest if: if mark is 80 - 85
        grade = " an A. "; // A
    } else if (mark < 80 && mark >= 75) { // nest if: if mark is 75 - 80 
        grade = " an A-. "; // A-
    }
} else if (mark < 75 && mark >= 60) { // if mark is 60 - 75
    gradeDesc = "Pass with Merit";
    if (mark < 75 && mark >= 70) { // nest if: if mark is 70 - 75
        grade = " a B+. "; // B+
    } else if (mark < 70 && mark >= 65) { // nest if: if mark is 65 - 70
        grade = " a B. "; // B
    } else if (mark < 65 && mark >= 60) { // nest if: if mark is 60 - 65
        grade = " a B-. "; // B-
    }
} else if (mark < 60 && mark >= 50) { // if mark is 50 - 60
    gradeDesc = "Pass";
    if (mark < 60 && mark >= 55) { // nest if: if mark is 55 - 60
        grade = " a C+. "; // C+
    } else if (mark < 55 && mark >= 50){ // nest if: if mark is 50 - 55
        grade = " a C. "; // C
    }
} else if (mark < 50 && mark > 0) { // if mark is above 0 - 50
    gradeDesc = "Fail Grades"; 
    if (mark < 50 && mark >= 40) { // nest if: if mark is 40 - 50
        grade = " a D. "; // D
    } else if (mark < 40 && mark > 0) { // nest if: if mark is 0 - 40
        grade = " an E. "; // E
    }
} else if (mark == 0) { // if mark is 0
    grade = " an F. "; // F
    gradeDesc = "Complete Fail";
} else if ((mark < 0 || mark > 100) || mark == NaN) { // Invalid input check. If mark is not a number or is less than zero or greater than 100
    console.log("Please input a valid grade.");
}

// switch used for desc
// This assigns a description to the type of grade the student got
switch (gradeDesc) {
    case "Perfect": {
        desc = "Congrats " + name + ", you have full marks and have passed with distinction.";
        break;
    }
    case "Pass with Distinction": {
        desc = "Congrats " + name + ", you have passed with distinction.";
        break;
    }
    case "Pass with Merit": {
        desc = "Congrats " + name + ", you have passed with merit.";
        break;
    }
    case "Pass": { 
        desc = "Congrats " + name + ", you have passed.";
        break;
    }
    case "Fail Grades": {
        desc = "Unfortunately, you have not passed and will need to retake.";
        break;
    }
    case "Complete Fail": {
        desc = "You were marked 0/100. Please retake the course.";
        break;
    }
    default: {
        console.log("Something has gone wrong.");
    }
} 

// console print
if (gradeDesc != "Blank" && (mark > 0 && mark <= 100) && mark != NaN) { // Invalid input check
    console.log("Student: " + name + " | Finale Marking (%): " + mark + " | Result: " + grade);
    console.log(name + ", your mark was " + mark + "/100 which makes your grade" + grade);
    console.log("Description: " + desc);
} else {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^") // Invalid input check
}
