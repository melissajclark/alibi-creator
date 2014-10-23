$(document).ready(function(){

/**
*
* Code Section 1: Variables defined for user's input
*
**/

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

	// this function defines alibiQuestion.who alibi is for & stores the value
	$("fieldset.alibiQuestion.who input[type='radio']").on("change", function(){
		 alibiQuestion.who = $(this).val(); 
	}); // end of function listening on "alibiQuestion.who" question

	// this function defines whether it's the first time or not & stores the value
	$("fieldset.alibiTiming input[type='radio']").on("change", function(){
		 alibiQuestion.firstTime = $(this).val(); 
	}); // end of function listening on alibi Timing

	// this function defines the scale of the issue & stores the value
	$("select.scaleMessUp").on("change", function(){
		 alibiQuestion.scaleOfIssue = $(this).val(); 
	}); // end of function listening on scale of Mess up Input

	// functions that run on submit button:	
	$("input[type=submit]").on("click",function(){
		$(this).addClass("animated wobble"); // fun effect for submit

		if (alibiQuestion.who == "other") { // checks the value of input with the value of "other"
			alibiQuestion.who = $("fieldset.alibiQuestion.who input[type=text]").val();
		}

		console.log("Who alibi is for: " + alibiQuestion.who + ", " + "Happened before? "+ alibiQuestion.firstTime + ", Scale of mess up: " + alibiQuestion.scaleOfIssue); // logs user's answers

		/**
		*
		* Code Section 2: Alibi Summary for User
		*
		**/

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
		console.log(scaleOfIssueQ);

	}); // end of click submit function



	 
}); // end doc ready function



