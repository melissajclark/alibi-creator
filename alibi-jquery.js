$(document).ready(function(){

/**
*
* Code Section 1: Variables defined for user's input
*
**/

	$(".otherField").hide(); // hides other text field on page load
	$("fieldset.who [value='other']").on("click", function(){
		$(".otherField").show();
	});

	$("form.questions").on("submit",function(event){
		event.preventDefault(); // prevents form from refreshing
	}); // end of form.questions event function

	var alibiQuestion = { 
	// would be good to add if statement in case user inputs other answer
		who: "",
		firstTime: "",
		scaleOfIssue: ""
		// more alibi questions?
	}

	var nameQhtml = '<label for="who_9">Whats their name?</label><input type="radio" name="their" id="who_8" value="name" /><span class="whoName"><em>specify below</em><br/><input type="text" name="their" id="who_8" placeholder="name" /></span>';

	// this function defines alibiQuestion.who alibi is for & stores the value
	$("fieldset.who input[type='radio']").on("change", function(){
		 alibiQuestion.who = $(this).val(); 
		 if (alibiQuestion.who === "mom") { // checks the value of input with the value of "other"
		 	$("p .nameofPissed").append(nameQhtml);
		 	console.log(nameQhtml);
		 }
	}); // end of function listening on "alibiQuestion.who" question

	// this function defines whether it's the first time or not & stores the value
	$("fieldset.alibiTiming input[type='radio']").on("change", function(){
		 alibiQuestion.firstTime = $(this).val(); 
	}); // end of function listening on alibi Timing

	// this function defines the scale of the issue & stores the value
	$("select.scaleMessUp").on("change", function(){
		 alibiQuestion.scaleOfIssue = $(this).val(); 
	}); // end of function listening on scale of Mess up Input	

	$("input[type=submit]").one("click",function(){
		$(this).addClass("animated wobble"); // fun effect for submit

		if (alibiQuestion.who == "other") { // checks the value of input with the value of "other"
			alibiQuestion.who = $("fieldset.who input[type=text]").val();
		}

		console.log("Who alibi is for: " + alibiQuestion.who + ", " + "Happened before? "+ alibiQuestion.firstTime + ", Scale of mess up: " + alibiQuestion.scaleOfIssue); // logs user's answers

	}); // end of click submit function & logging of quick alibi summary

/**
*
* Code Section 2: Alibi Summary for User
*
**/

	var scaleOfIssueQ = ""; 

	$("input[type=submit]").on("click",function(){
		// this section analyzes user's answer to scaleofIssue prompt

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
		console.log(scaleOfIssueQ); // logs reply to user's input

		var analyzedAlibi = "<p>" + "Alright so you messed up and pissed off your " + alibiQuestion.who + " ." + "</p>" + "<p>" +scaleOfIssueQ + "." + "</p>"; 

		$(".alibiSummary").append(analyzedAlibi); // inserts response to answers into the DOM

	}); // end of click submit function that analyzes scale of Issue


	// $("input[type=submit]").on("click",function(){
	// 	// this section analyzes user's answer to scaleofIssue prompt

	// // started this but realized I should do it within the above function

	// }); // end of click submit function that analyzes scale of Issue

}); // end doc ready function




