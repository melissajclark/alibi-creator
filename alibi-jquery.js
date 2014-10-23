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

	// this function defines whosePissed alibi is for & stores the value
	$("fieldset.whosePissed input[type='radio']").on("change", function(){
		 whosePissed = $(this).val(); 
	}); // end of function listening on "whosePissed" question

	// this function defines whether it's the first time or not & stores the value
	$("fieldset.alibiTiming input[type='radio']").on("change", function(){
		 firstTimeAnswer = $(this).val(); 
	}); // end of function listening on alibi Timing

	// this function defines the scale of the issue & stores the value
	$("select.scaleMessUp").on("change", function(){
		 scaleOfIssueQ = $(this).val(); 
	}); // end of function listening on scale of Mess up Input

	// functions that run on submit button:	
	$("input[type=submit]").on("click",function(){
		$(this).addClass("animated wobble"); // fun effect for submit

		if (whosePissed == "other") { // checks the value of input with the value of "other"
			whosePissed = $("fieldset.whosePissed input[type=text]").val();
		}

		console.log("whosePissed alibi is for: " + whosePissed + ", " + "Happened before? "+ firstTimeAnswer + ", Scale of mess up: " + scaleOfIssueQ); // logs user's answers
	}); // end of click submit function

/**
*
* Code Section 2: Alibi Summary for User
*
**/


	 
}); // end doc ready function



