
//     QUESTION
/* Create a function that tells us how many days, weeks and months, we have left if we live until 90 years old; 
take your current age as input and console.log a message with our time left. You have X days, Y weeks, Z months left;
where X, Y, and Z are replaced by calculated numbers. Assume 365 days in a year, 52 weeks in a year, 12 months in a year
*/

//     SOLUTION 

function lifeInWeeks(age) {
    let yearsRemaining = 90 - age; 
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
    console.log("You have X days, Y weeks, and Z months");
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

lifeinweeks(20);
                                      
                                      
