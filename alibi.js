var firstMessage = alert("So you messed up again! You idiot. It's alright, all you gotta do is answer a few measly questions and you'll have the perfect alibi for your latest fuckup.");
/*
*
* Part 1 of Code: User's Answers & Summary of Answers
*
*/
	var alibiQuestion = { 
	// would be good to add if statement in case user inputs other answer
		who: prompt("Who is this alibi for? (mom, dad, girlfriend, boyfriend, partner, professor)"),
		firstTime: prompt("Is this the first time? (yes/no)"),
		scaleOfIssue: prompt("How bad did you mess up? (on a scale of 1 to 10)")
		// more alibi questions?
	}
	
	// renames & updates variables to ignore case in user's answer
	var firstTimeAnswer = alibiQuestion.firstTime.toLowerCase( );
	var whosePissed = alibiQuestion.who.toLowerCase( );

	// this section analyzes user's answer to the firstTime prompt
	var repeatMistakeQ = " "; 

	if (firstTimeAnswer === "yes") {
		repeatMistakeQ = "At least it was for the first time.";
		// console.log(repeatMistakeQ);
	} else if (firstTimeAnswer === "no") {
		repeatMistakeQ = "And you've done it before? Eep."; 
		// console.log(repeatMistakeQ); 
	}

	// this section analyzes user's answer to scaleofIssue prompt
	var scaleOfIssueQ = ""; 

	if (alibiQuestion.scaleOfIssue === 10 || alibiQuestion.scaleOfIssue >= 10) {
		scaleOfIssueQ = "Holy shit, this could be bad. I don't know if I can get you outta this one";
	} else if (alibiQuestion.scaleOfIssue >= 8 && alibiQuestion.scaleOfIssue <= 9) {
		scaleOfIssueQ = "Eep, that bad's pretty bad. I'll do my best";
	} else if (alibiQuestion.scaleOfIssue >= 6 && alibiQuestion.scaleOfIssue <= 7 ) {
		scaleOfIssueQ = "Hmmm, alright, I think I can help you out";
	} else if (alibiQuestion.scaleOfIssue >= 4 && alibiQuestion.scaleOfIssue <= 5) {
		scaleOfIssueQ = "Okay, sounds like didn't mess up too badly, I got your back. We'll get through this together";
	} else if (alibiQuestion.scaleOfIssue >= 2 && alibiQuestion.scaleOfIssue <= 3) {
		scaleOfIssueQ = "You barely messed up! Let's call this a misdemeanour";
	} else if (alibiQuestion.scaleOfIssue = 1) {
		scaleOfIssueQ = "You know what, you'll be fine. I bet your " + alibiQuestion.who + " is already over it. Let's get you an alibi, just in case" 
	}

	// Below: Logs User's Input to Give Summary Based on Answers
	var alibiSummary = "Damn, you pissed off your " + whosePissed + "? " + repeatMistakeQ + " " + scaleOfIssueQ + ". "
	console.log(alibiSummary); 

	document.write(alibiSummary + "<br/><br/>" + "Alright, I'm formulating an alibi just for <em>you</em>. ");
	// document.write("<br/><br/>"+ "Okay, here's what you need to tell your " + whosePissed + ". Ready?")

/*
*
* Part 2 of Code: Alibi Creation
*
*/

// defines prefixes to insert before array items
var prefix = [ "my", "I had", "I was"]; 

/* My */ 	var alibiOption1 = [ "toilet expoloded", "apartment flooded", "great-aunt twice removed died", "cat had a seizure", "my phone died"];

/* I had */ var alibiOption2 = [ "diarrhea", "the bird flu", "my first period", "to meet my parole officer", "food poisoning", "vertigo"]; 

/* I was */ var alibiOption3 = ["watching porn", "in Montreal", "in a coma", "helping an old lady cross the street", "robbed", "arrested", "doing laundry", "in rehab", "at a Katy Perry concert", "dealing with my bedbug infestation"]; 

/* bad */ var badWord = ["awful", "terrible", "serious", "a bummer", "dreadful", "atrocious", "godawful", "gross", "abominable", "despicable", "horrid", "repulsive", "rotten"];

/* more*/ var moreAlibi = ["If you knew the state I was in, you wouldn't have wanted me around.", "I still can't believe this happened!", "I'm still dealing with it all, you know?", "Ugh, it's not even over yet. It's still going on."]

/* apology */ var alibiApology = ["Can we get past this?", "I hope we can move on from this, let's remember the good times. What do you say?", "I know I'm a bit of a fuckup, I hope you can find it in your hear to forgive me.", "This whole situation has been awful, but the worst part is knowing I disappointed you. This will never happen again. Let's move on. So uh, can I get you a beer?"]

// returns random item from array (full disclosure: borrowed from cat name project)
  var random = function(arr) {
  var num = arr.length;
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// updates array values to include prefix + elaborates with more info
var alibiOption1 = "I am SO sorry! Oh god, " + prefix[0] + " " + random(alibiOption1) + ". It was a real nightmare. " + random(moreAlibi) + " " + random(alibiApology); 
var alibiOption2 = "Believe me, I wish I could have been there. " + prefix[1] + " " + random(alibiOption2) + " and it was " + random(badWord) + "! " + random(moreAlibi) + " " + random(alibiApology);
var alibiOption3 = "I can't believe I'm saying this aloud, I feel  " + random(badWord) + ". But, I need to be honest with you... " + prefix[2] + " " + random(alibiOption3) + ". " + random(moreAlibi) + " " + random(alibiApology);

// defines function for creating alibi optiopns	 
var createAlibi = function(){	
	console.log("Okay, here's three options for you to tell your " + whosePissed + ". " + "1. " + alibiOption1 + "2. " + alibiOption2 + "3. " + alibiOption3);
	return "Okay, here's three options for you to tell your " + whosePissed + ". " + "1. " + alibiOption1 + "." + "2. " + alibiOption2 + "3. " + alibiOption3 + ".";
};
createAlibi(); // calls function 

// outputs options to the screen for user 
document.write("<br/><br/>" + "I lined up three options for you tell your " + whosePissed + ". Good luck!");
document.write("<br/><br/>" + "1. " + alibiOption1);
document.write("<br/><br/>" + "2. " + alibiOption2);
document.write("<br/><br/>" + "3. " + alibiOption3);