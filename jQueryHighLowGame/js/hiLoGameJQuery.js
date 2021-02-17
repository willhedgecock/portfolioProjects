let targetNumber= 0;

let topNum;

let numberRanges = [5, 10, 20];

function randomNumber(inTopNum) {
    return Math.floor(Math.random() * inTopNum) + 1;	//random number from 1 to inTopNum	
}

function getTargetNum() {

    topNum = $("#topNumber").val();

    targetNumber = randomNumber(topNum);

    //console.log(targetNumber);
}

function hiLowGame()	{
    
    let inNumb = $("#inputNumber").val(); //USER GUESS
    
    if (inNumb == targetNumber)	{
        $("#outResults").html("CORRECT!");
        $("#outResults").css("color", "green");	
    }
    else if ( inNumb < targetNumber ) {
        $("#outResults").html("Guess Higher");
        $("#outResults").css("color", "red");	
        }
        
    else {
        $("#outResults").html("Guess Lower");
        $("#outResults").css("color", "red");
        }
    
}

function clearDisplayField() {
    $("#outResults").html(" ");
    $("#showMe").html(" ");
}

function clearGuessRange() {
    $("#guessRange").html(" ");
}

function displayNumRange() {
    $("#guessRange").html("Guess a number between 1 and " + topNum);
}

function showRandomNum() {
    $("#showMe").html("The number you are looking for is: " + targetNumber);
}

function getCurrentYear()  {	
	let todaysDate = new Date();
	return todaysDate.getFullYear();
}